namespace App
open Fable.Core

module Manifest = 
    type Scripting = 
        abstract executeScript: obj -> JS.Promise<unit>
        abstract insertCSS: obj -> JS.Promise<unit>

    type Tab = 
        abstract id: int with get

    type Tabs = 
        abstract sendMessage: tabId: int * message: obj * ?options: obj -> JS.Promise<obj>
        abstract query: queryObj : obj -> JS.Promise<Tab[]>

    type OnMessage =
        abstract addListener: listener: (obj->unit) -> unit

    type Runtime =
        abstract onMessage: OnMessage with get
        abstract getURL: string -> string

    type Browser = 
        abstract runtime: Runtime with get
        abstract scripting: Scripting with get
        abstract tabs: Tabs with get

    [<Emit("chrome")>]
    let [<Global>] browser: Browser = jsNative