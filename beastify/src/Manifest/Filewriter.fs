// ts2fable 0.7.1
module rec Filewriter
open System
open Fable.Core
open Fable.Core.JS
open Browser.Types

type Error = System.Exception

let [<Import("FileSaver","filewriter")>] FileSaver: FileSaver = jsNative

/// This interface provides methods to monitor the asynchronous writing of blobs to disk using progress events [PROGRESS-EVENTS] and event handler attributes.
/// This interface is specified to be used within the context of the global object (Window [HTML5]) and within Web Workers (WorkerUtils [WEBWORKERS-ED]).
type [<AllowNullLiteral>] FileSaver =
    inherit EventTarget
    /// When the abort method is called, user agents must run the steps below:
    /// <ol>
    /// <li> If readyState == DONE or readyState == INIT, terminate this overall series of steps without doing anything else. </li>
    /// <li> Set readyState to DONE. </li>
    /// <li> If there are any tasks from the object's FileSaver task source in one of the task queues, then remove those tasks. </li>
    /// <li> Terminate the write algorithm being processed. </li>
    /// <li> Set the error attribute to a DOMError object of type "AbortError". </li>
    /// <li> Fire a progress event called abort </li>
    /// <li> Fire a progress event called writeend </li>
    /// <li> Terminate this algorithm. </li>
    /// </ol>
    abstract abort: unit -> unit
    /// The blob is being written.
    abstract INIT: float with get, set
    /// The object has been constructed, but there is no pending write.
    abstract WRITING: float with get, set
    /// The entire Blob has been written to the file, an error occurred during the write, or the write was aborted using abort(). The FileSaver is no longer writing the blob.
    abstract DONE: float with get, set
    /// The FileSaver object can be in one of 3 states. The readyState attribute, on getting, must return the current state, which must be one of the following values:
    /// <ul>
    /// <li>INIT</li>
    /// <li>WRITING</li>
    /// <li>DONE</li>
    /// <ul>
    abstract readyState: float with get, set
    /// The last error that occurred on the FileSaver.
    abstract error: Error with get, set
    /// Handler for writestart events
    abstract onwritestart: (ProgressEvent -> unit) with get, set
    /// Handler for progress events.
    abstract onprogress: (ProgressEvent -> unit) with get, set
    /// Handler for write events.
    abstract onwrite: (ProgressEvent -> unit) with get, set
    /// Handler for abort events.
    abstract onabort: (ProgressEvent -> unit) with get, set
    /// Handler for error events.
    abstract onerror: (ProgressEvent -> unit) with get, set
    /// Handler for writeend events.
    abstract onwriteend: (ProgressEvent -> unit) with get, set

/// This interface expands on the FileSaver interface to allow for multiple write actions, rather than just saving a single Blob.
type [<AllowNullLiteral>] FileWriter =
    inherit FileSaver
    /// The byte offset at which the next write to the file will occur. This must be no greater than length.
    /// A newly-created FileWriter must have position set to 0.
    abstract position: float with get, set
    /// The length of the file. If the user does not have read access to the file, this must be the highest byte offset at which the user has written.
    abstract length: float with get, set
    /// <summary>Write the supplied data to the file at position.</summary>
    /// <param name="data">The blob to write.</param>
    abstract write: data: Blob -> unit
    /// <summary>Seek sets the file position at which the next write will occur.</summary>
    /// <param name="offset">If nonnegative, an absolute byte offset into the file. If negative, an offset back from the end of the file.</param>
    abstract seek: offset: float -> unit
    /// <summary>Changes the length of the file to that specified. If shortening the file, data beyond the new length must be discarded. If extending the file, the existing data must be zero-padded up to the new length.</summary>
    /// <param name="size">The size to which the length of the file is to be adjusted, measured in bytes.</param>
    abstract truncate: size: float -> unit

/// This interface lets users write, truncate, and append to files using simple synchronous calls.
/// This interface is specified to be used only within Web Workers (WorkerUtils [WEBWORKERS]).
type [<AllowNullLiteral>] FileWriterSync =
    /// The byte offset at which the next write to the file will occur. This must be no greater than length.
    abstract position: float with get, set
    /// The length of the file. If the user does not have read access to the file, this must be the highest byte offset at which the user has written.
    abstract length: float with get, set
    /// <summary>Write the supplied data to the file at position. Upon completion, position will increase by data.size.</summary>
    /// <param name="data">The blob to write.</param>
    abstract write: data: Blob -> unit
    /// <summary>Seek sets the file position at which the next write will occur.</summary>
    /// <param name="offset">An absolute byte offset into the file. If offset is greater than length, length is used instead. If offset is less than zero, length is added to it, so that it is treated as an offset back from the end of the file. If it is still less than zero, zero is used.</param>
    abstract seek: offset: float -> unit
    /// <summary>Changes the length of the file to that specified. If shortening the file, data beyond the new length must be discarded. If extending the file, the existing data must be zero-padded up to the new length.
    /// Upon successful completion:
    /// <ul>
    ///      <li>length must be equal to size.</li>
    ///      <li>position must be the lesser of
    ///           <ul>
    ///               <li>its pre-truncate value,</li>
    ///               <li>size.</li>
    ///           </ul>
    ///       </li>
    ///   </ul></summary>
    /// <param name="size">The size to which the length of the file is to be adjusted, measured in bytes.</param>
    abstract truncate: size: float -> unit

module Constructor = 
    type [<AllowNullLiteral>] FileSaver =
        /// When the FileSaver constructor is called, the user agent must return a new FileSaver object with readyState set to INIT.
        /// This constructor must be visible when the script's global object is either a Window object or an object implementing the WorkerUtils interface.
        [<Emit "new $0($1...)">] abstract Create: data: Blob -> obj
