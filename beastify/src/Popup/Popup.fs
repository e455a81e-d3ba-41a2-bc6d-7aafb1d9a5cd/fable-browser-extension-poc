module Popup

open Manifest
open Browser.Dom
open Fable.Core.JsInterop
open Manifest.Chrome.Tabs
open Manifest.Chrome.Scripting
open Manifest.Chrome

let hidePage = 
    """body > :not(.beastify-image) {
        display: none;
    }"""

exception MyError of string

let raiseError e =
    let object = Fable.Core.JS.JSON.stringify(e)
    console.log(object)
    MyError $"Error occurred: {object}" |> raise

let beastNameToUrl beastName: string =
    match beastName with
    | "Frog" -> runtime.getURL("beasts/frog.jpg")
    | "Snake" -> runtime.getURL("beasts/snake.jpg")
    | "Turtle" -> runtime.getURL("beasts/turtle.jpg")
    | _ -> MyError "No such beast!" |> raise


let getActiveTab f =
    let tabQuery: QueryInfo = !!{| active = true; currentWindow = true|}
    tabs.query(tabQuery)
    |> Promise.map f 
    |> Promise.catchEnd raiseError


let addClickEventListener =
    fun () -> document.addEventListener("click", (fun e -> 

        let beast: string = e.target?textContent

        let cssDetails (tab: Tab) : CSSInjection  = 
            let injectionTarget: InjectionTarget = !!{| tabId = tab.id |> Option.defaultValue 0|}
            !!{| css = hidePage; target = injectionTarget |}


        let beastify (tabArray: ResizeArray<Tab>) =
            scripting.insertCSS(cssDetails tabArray[0]) 
            |> Promise.map (fun () -> 
                    let url = beastNameToUrl beast
                    tabs.sendMessage(
                        tabArray[0].id |> Option.defaultValue 0,
                        {| command = "beastify"; beastUrl = url |}
                    )
            ) |> ignore
            ()

        let reset (tabArray: ResizeArray<Tab>) =
            scripting.removeCSS (cssDetails tabArray[0])
            |> Promise.map (fun () -> 
                    tabs.sendMessage(
                        tabArray[0].id |> Option.defaultValue 0,
                        {| command = "reset" |}
                    )
            ) |> ignore

        match e.target?``type``  with
        | "reset" -> getActiveTab reset
        | _ -> getActiveTab beastify
    ))

getActiveTab (fun tabs ->

    let injectionTarget = {| tabId = tabs[0].id |}
    let scriptDetails: ScriptInjection<obj, obj> = !!{| files = [|"content.bundle.js"|]; target = injectionTarget |}

    scripting.executeScript(scriptDetails)
    |> Promise.map (fun _ -> addClickEventListener())
    |> Promise.catchEnd raiseError
)