module Popup

open App.Manifest
open Browser.Dom
open Fable.Core.JsInterop
open Browser

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



type MyCssDetails(_css) =
    interface CssDetails with
        member val css = _css with get, set
        member val files = [||] with get, set
        member val origin = "" with get, set
        member val target = null with get, set


type MyScriptDetails(_files, tabId) =
    let mutable _target = 
        let injectionTarget = browser.scripting.InjectionTarget.Create()
        injectionTarget.tabId <- tabId
        injectionTarget

    interface ScriptDetails with 
        member val args = [||] with get, set
        member val files = _files with get, set
        member val func = null with get, set
        member val injectImmediately = true with get, set
        member val target = _target with get, set



let addClickEventListener =
    fun () -> document.addEventListener("click", (fun e -> 

        let (beast: string) = e.target?textContent

        let beastify (tabs: Tab[]) =
            let injectionTarget = {| tabId = tabs[0].id |}
            let cssDetails = {| css = hidePage; target = injectionTarget |}
            let insertCssPromise= (browser.scripting.insertCSS(cssDetails))
            insertCssPromise 
            |> Promise.map (fun () -> 
                    let url = beastNameToUrl beast
                    browser.tabs.sendMessage(
                        tabs[0].id,
                        {| command = "beastify"; beastUrl = url |}
                    )
            ) |> ignore
            ()
        getActiveTab beastify
    ))

getActiveTab (fun tabs ->

    let injectionTarget = {| tabId = tabs[0].id |}
    let scriptDetails = {| files = [|"content.js"|]; target = injectionTarget |}

    browser.scripting.executeScript(scriptDetails)
    |> Promise.map addClickEventListener
    |> Promise.catchEnd raiseError
)