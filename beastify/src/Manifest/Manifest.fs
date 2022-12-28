namespace App
open Fable.Core
open Fable.Core.JsInterop
open System

module Manifest = 
    type [<AllowNullLiteral; Global>] InjectionTarget =
        abstract allFrames: bool with get, set
        abstract frameIds: bool with get, set
        abstract tabId: int with get, set

    type [<AllowNullLiteral; Global>] ScriptDetails =
        abstract args: obj[] with get, set
        abstract files: string[] with get, set
        abstract func: obj with get, set
        abstract injectImmediately: bool with get, set
        abstract target: InjectionTarget  with get, set


    type [<AllowNullLiteral; Global>] CssDetails =
        abstract css: string with get, set
        abstract files: string[] with get, set
        abstract origin: string with get, set
        abstract target: InjectionTarget  with get, set

    type IInjectionTarget = 
        [<Emit("new $0()")>]
        abstract Create: unit -> InjectionTarget

    type Scripting = 
        abstract InjectionTarget : IInjectionTarget with get
        abstract executeScript: obj -> JS.Promise<unit>
        abstract insertCSS: obj -> JS.Promise<unit>

    type Tab = 
        abstract id: int with get

    type ITab = 
        [<Emit("new $0($1)")>]
        abstract Create: unit -> Tab

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