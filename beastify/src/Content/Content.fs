module Content

open Browser.Dom
open App.Manifest
open Fable.Core.JsInterop
open Fable.Core.JS
open Browser.Types

let removeExistingBeasts =
    let existingBeasts = document.querySelectorAll(".beastify-image")
    let array: Element[] = Constructors.Array.from(existingBeasts)
    FSharp.Collections.Array.iter (fun (x: Element) -> x.remove() ) array |> ignore

let insertBeast beastURL =
    removeExistingBeasts |> ignore
    let image = document.createElement("img")
    image.setAttribute("src", beastURL)
    image.className <- "beastify-image";
    image?style?height <- "100vh"
    document.body.appendChild(image) |> ignore

browser.runtime.onMessage.addListener (fun message ->
    match (message?command ) with
    | "beastify" -> insertBeast message?beastUrl
    | "reset" -> removeExistingBeasts
    | _ -> ()
)