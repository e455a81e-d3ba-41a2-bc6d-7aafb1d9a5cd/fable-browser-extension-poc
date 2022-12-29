module Popup

open App.Manifest
open Browser.Dom
open Fable.Core.JsInterop

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
    | "Frog" -> browser.runtime.getURL("beasts/frog.jpg")
    | "Snake" -> browser.runtime.getURL("beasts/snake.jpg")
    | "Turtle" -> browser.runtime.getURL("beasts/turtle.jpg")
    | _ -> MyError "No such beast!" |> raise


let getActiveTab f =
    let tabQuery = {| active = true; currentWindow = true|}
    browser.tabs.query(tabQuery)
    |> Promise.map f 
    |> Promise.catchEnd raiseError


let addClickEventListener =
    fun () -> document.addEventListener("click", (fun e -> 

        let beast: string = e.target?textContent

        let cssDetails (tab: Tab) = 
            let injectionTarget = {| tabId = tab.id |}
            {| css = hidePage; target = injectionTarget |}


        let beastify (tabs: Tab[]) =
            browser.scripting.insertCSS(cssDetails tabs[0]) 
            |> Promise.map (fun () -> 
                    let url = beastNameToUrl beast
                    browser.tabs.sendMessage(
                        tabs[0].id,
                        {| command = "beastify"; beastUrl = url |}
                    )
            ) |> ignore
            ()

        let reset (tabs: Tab[]) =
            browser.scripting.removeCSS (cssDetails tabs[0])
            |> Promise.map (fun () -> 
                    browser.tabs.sendMessage(
                        tabs[0].id,
                        {| command = "reset" |}
                    )
            ) |> ignore

        match e.target?``type``  with
        | "reset" -> getActiveTab reset
        | _ -> getActiveTab beastify
    ))

getActiveTab (fun tabs ->

    let injectionTarget = {| tabId = tabs[0].id |}
    let scriptDetails = {| files = [|"content.bundle.js"|]; target = injectionTarget |}

    browser.scripting.executeScript(scriptDetails)
    |> Promise.map addClickEventListener
    |> Promise.catchEnd raiseError
)