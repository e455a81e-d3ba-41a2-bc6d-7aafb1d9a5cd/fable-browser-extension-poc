// ts2fable 0.7.1
module rec Filesystem
open System
open Fable.Core
open Fable.Core.JS
open Filewriter
open Browser.Types

type Error = System.Exception


module Index =

    type [<AllowNullLiteral>] LocalFileSystem =
        /// Used for storage with no guarantee of persistence.
        abstract TEMPORARY: float with get, set
        /// Used for storage that should not be removed by the user agent without application or user permission.
        abstract PERSISTENT: float with get, set
        /// <summary>Requests a filesystem in which to store application data.</summary>
        /// <param name="type">Whether the filesystem requested should be persistent, as defined above. Use one of TEMPORARY or PERSISTENT.</param>
        /// <param name="size">This is an indicator of how much storage space, in bytes, the application expects to need.</param>
        /// <param name="successCallback">The callback that is called when the user agent provides a filesystem.</param>
        /// <param name="errorCallback">A callback that is called when errors happen, or when the request to obtain the filesystem is denied.</param>
        abstract requestFileSystem: ``type``: float * size: float * successCallback: FileSystemCallback * ?errorCallback: ErrorCallback -> unit
        /// <summary>Allows the user to look up the Entry for a file or directory referred to by a local URL.</summary>
        /// <param name="url">A URL referring to a local file in a filesystem accessable via this API.</param>
        /// <param name="successCallback">A callback that is called to report the Entry to which the supplied URL refers.</param>
        /// <param name="errorCallback">A callback that is called when errors happen, or when the request to obtain the Entry is denied.</param>
        abstract resolveLocalFileSystemURL: url: string * successCallback: EntryCallback * ?errorCallback: ErrorCallback -> unit
        /// see requestFileSystem.
        abstract webkitRequestFileSystem: ``type``: float * size: float * successCallback: FileSystemCallback * ?errorCallback: ErrorCallback -> unit

    type [<AllowNullLiteral>] LocalFileSystemSync =
        /// Used for storage with no guarantee of persistence.
        abstract TEMPORARY: float with get, set
        /// Used for storage that should not be removed by the user agent without application or user permission.
        abstract PERSISTENT: float with get, set
        /// <summary>Requests a filesystem in which to store application data.</summary>
        /// <param name="type">Whether the filesystem requested should be persistent, as defined above. Use one of TEMPORARY or PERSISTENT.</param>
        /// <param name="size">This is an indicator of how much storage space, in bytes, the application expects to need.</param>
        abstract requestFileSystemSync: ``type``: float * size: float -> FileSystemSync
        /// <summary>Allows the user to look up the Entry for a file or directory referred to by a local URL.</summary>
        /// <param name="url">A URL referring to a local file in a filesystem accessable via this API.</param>
        abstract resolveLocalFileSystemSyncURL: url: string -> EntrySync
        /// see requestFileSystemSync
        abstract webkitRequestFileSystemSync: ``type``: float * size: float -> FileSystemSync

    type [<AllowNullLiteral>] Metadata =
        /// This is the time at which the file or directory was last modified.
        abstract modificationTime: DateTime with get, set
        /// The size of the file, in bytes. This must return 0 for directories.
        abstract size: float with get, set

    type [<AllowNullLiteral>] Flags =
        /// Used to indicate that the user wants to create a file or directory if it was not previously there.
        abstract create: bool option with get, set
        /// By itself, exclusive must have no effect. Used with create, it must cause getFile and getDirectory to fail if the target path already exists.
        abstract exclusive: bool option with get, set

    /// This interface represents a file system.
    type [<AllowNullLiteral>] FileSystem =
        /// This is the name of the file system. The specifics of naming filesystems is unspecified, but a name must be unique across the list of exposed file systems.
        abstract name: string
        /// The root directory of the file system.
        abstract root: FileSystemDirectoryEntry

    type [<AllowNullLiteral>] FileSystemEntry =
        /// Entry is a file.
        abstract isFile: bool
        /// Entry is a directory.
        abstract isDirectory: bool
        /// <summary>Look up metadata about this entry.</summary>
        /// <param name="successCallback">A callback that is called with the time of the last modification.</param>
        /// <param name="errorCallback">ErrorCallback A callback that is called when errors happen.</param>
        abstract getMetadata: successCallback: MetadataCallback * ?errorCallback: ErrorCallback -> unit
        /// The name of the entry, excluding the path leading to it.
        abstract name: string
        /// The full absolute path from the root to the entry.
        abstract fullPath: string
        /// The file system on which the entry resides.
        abstract filesystem: FileSystem
        /// Move an entry to a different location on the file system. It is an error to try to:
        /// 
        /// <ui>
        /// <li>move a directory inside itself or to any child at any depth;</li>
        /// <li>move an entry into its parent if a name different from its current one isn't provided;</li>
        /// <li>move a file to a path occupied by a directory;</li>
        /// <li>move a directory to a path occupied by a file;</li>
        /// <li>move any element to a path occupied by a directory which is not empty.</li>
        /// <ul>
        /// 
        /// A move of a file on top of an existing file must attempt to delete and replace that file.
        /// A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.
        abstract moveTo: parent: FileSystemDirectoryEntry * ?newName: string * ?successCallback: EntryCallback * ?errorCallback: ErrorCallback -> unit
        /// Copy an entry to a different location on the file system. It is an error to try to:
        /// 
        /// <ul>
        /// <li> copy a directory inside itself or to any child at any depth;</li>
        /// <li> copy an entry into its parent if a name different from its current one isn't provided;</li>
        /// <li> copy a file to a path occupied by a directory;</li>
        /// <li> copy a directory to a path occupied by a file;</li>
        /// <li> copy any element to a path occupied by a directory which is not empty.</li>
        /// <li> A copy of a file on top of an existing file must attempt to delete and replace that file.</li>
        /// <li> A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.</li>
        /// </ul>
        /// 
        /// Directory copies are always recursive--that is, they copy all contents of the directory.
        abstract copyTo: parent: FileSystemDirectoryEntry * ?newName: string * ?successCallback: EntryCallback * ?errorCallback: ErrorCallback -> unit
        /// Returns a URL that can be used to identify this entry. Unlike the URN defined in [FILE-API-ED], it has no specific expiration; as it describes a location on disk, it should be valid at least as long as that location exists.
        abstract toURL: unit -> string
        /// <summary>Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.</summary>
        /// <param name="successCallback">A callback that is called on success.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract remove: successCallback: VoidCallback * ?errorCallback: ErrorCallback -> unit
        /// <summary>Look up the parent DirectoryEntry containing this Entry. If this Entry is the root of its filesystem, its parent is itself.</summary>
        /// <param name="successCallback">A callback that is called to return the parent Entry.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract getParent: successCallback: DirectoryEntryCallback * ?errorCallback: ErrorCallback -> unit

    type Entry =
        FileSystemEntry

    /// This interface represents a directory on a file system.
    type [<AllowNullLiteral>] FileSystemDirectoryEntry =
        inherit FileSystemEntry
        /// Creates a new DirectoryReader to read Entries from this Directory.
        abstract createReader: unit -> DirectoryReader
        /// <summary>Creates or looks up a file.</summary>
        /// <param name="path">Either an absolute path or a relative path from this DirectoryEntry to the file to be looked up or created. It is an error to attempt to create a file whose immediate parent does not yet exist.</param>
        /// <param name="options"><ul>
        /// <li>If create and exclusive are both true, and the path already exists, getFile must fail.</li>
        /// <li>If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.</li>
        /// <li>If create is not true and the path doesn't exist, getFile must fail.</li>
        /// <li>If create is not true and the path exists, but is a directory, getFile must fail.</li>
        /// <li>Otherwise, if no other error occurs, getFile must return a FileEntry corresponding to path.</li>
        /// </ul></param>
        /// <param name="successCallback">A callback that is called to return the File selected or created.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract getFile: path: string * ?options: Flags * ?successCallback: FileEntryCallback * ?errorCallback: ErrorCallback -> unit
        /// <summary>Creates or looks up a directory.</summary>
        /// <param name="path">Either an absolute path or a relative path from this DirectoryEntry to the directory to be looked up or created. It is an error to attempt to create a directory whose immediate parent does not yet exist.</param>
        /// <param name="options"><ul>
        /// <li>If create and exclusive are both true and the path already exists, getDirectory must fail.</li>
        /// <li>If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.</li>
        /// <li>If create is not true and the path doesn't exist, getDirectory must fail.</li>
        /// <li>If create is not true and the path exists, but is a file, getDirectory must fail.</li>
        /// <li>Otherwise, if no other error occurs, getDirectory must return a DirectoryEntry corresponding to path.</li>
        /// </ul></param>
        /// <param name="successCallback">A callback that is called to return the DirectoryEntry selected or created.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract getDirectory: path: string * ?options: Flags * ?successCallback: DirectoryEntryCallback * ?errorCallback: ErrorCallback -> unit
        /// <summary>Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete a directory that contains a file that cannot be removed], some of the contents of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.</summary>
        /// <param name="successCallback">A callback that is called on success.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract removeRecursively: successCallback: VoidCallback * ?errorCallback: ErrorCallback -> unit

    type DirectoryEntry =
        FileSystemDirectoryEntry

    /// This interface lets a user list files and directories in a directory. If there are no additions to or deletions from a directory between the first and last call to readEntries, and no errors occur, then:
    /// <ul>
    /// <li> A series of calls to readEntries must return each entry in the directory exactly once.</li>
    /// <li> Once all entries have been returned, the next call to readEntries must produce an empty array.</li>
    /// <li> If not all entries have been returned, the array produced by readEntries must not be empty.</li>
    /// <li> The entries produced by readEntries must not include the directory itself ["."] or its parent [".."].</li>
    /// </ul>
    type [<AllowNullLiteral>] DirectoryReader =
        /// <summary>Read the next block of entries from this directory.</summary>
        /// <param name="successCallback">Called once per successful call to readEntries to deliver the next previously-unreported set of Entries in the associated Directory. If all Entries have already been returned from previous invocations of readEntries, successCallback must be called with a zero-length array as an argument.</param>
        /// <param name="errorCallback">A callback indicating that there was an error reading from the Directory.</param>
        abstract readEntries: successCallback: EntriesCallback * ?errorCallback: ErrorCallback -> unit

    /// This interface represents a file on a file system.
    type [<AllowNullLiteral>] FileEntry =
        inherit FileSystemEntry
        /// <summary>Creates a new FileWriter associated with the file that this FileEntry represents.</summary>
        /// <param name="successCallback">A callback that is called with the new FileWriter.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract createWriter: successCallback: FileWriterCallback * ?errorCallback: ErrorCallback -> unit
        /// <summary>Returns a File that represents the current state of the file that this FileEntry represents.</summary>
        /// <param name="successCallback">A callback that is called with the File.</param>
        /// <param name="errorCallback">A callback that is called when errors happen.</param>
        abstract file: successCallback: FileCallback * ?errorCallback: ErrorCallback -> unit

    /// When requestFileSystem() succeeds, the following callback is made.
    type [<AllowNullLiteral>] FileSystemCallback =
        /// <param name="filesystem">The file systems to which the app is granted access.</param>
        [<Emit "$0($1...)">] abstract Invoke: filesystem: FileSystem -> unit

    /// This interface is the callback used to look up Entry objects.
    type [<AllowNullLiteral>] EntryCallback =
        [<Emit "$0($1...)">] abstract Invoke: entry: FileSystemEntry -> unit

    /// This interface is the callback used to look up FileEntry objects.
    type [<AllowNullLiteral>] FileEntryCallback =
        [<Emit "$0($1...)">] abstract Invoke: entry: FileEntry -> unit

    /// This interface is the callback used to look up DirectoryEntry objects.
    type [<AllowNullLiteral>] DirectoryEntryCallback =
        [<Emit "$0($1...)">] abstract Invoke: entry: FileSystemDirectoryEntry -> unit

    /// When readEntries() succeeds, the following callback is made.
    type [<AllowNullLiteral>] EntriesCallback =
        [<Emit "$0($1...)">] abstract Invoke: entries: ResizeArray<FileSystemEntry> -> unit

    /// This interface is the callback used to look up file and directory metadata.
    type [<AllowNullLiteral>] MetadataCallback =
        [<Emit "$0($1...)">] abstract Invoke: metadata: Metadata -> unit

    /// This interface is the callback used to create a FileWriter.
    type [<AllowNullLiteral>] FileWriterCallback =
        [<Emit "$0($1...)">] abstract Invoke: fileWriter: FileWriter -> unit

    /// This interface is the callback used to obtain a File.
    type [<AllowNullLiteral>] FileCallback =
        [<Emit "$0($1...)">] abstract Invoke: file: File -> unit

    /// This interface is the generic callback used to indicate success of an asynchronous method.
    type [<AllowNullLiteral>] VoidCallback =
        [<Emit "$0($1...)">] abstract Invoke: unit -> unit

    /// When an error occurs, the following callback is made.
    type [<AllowNullLiteral>] ErrorCallback =
        [<Emit "$0($1...)">] abstract Invoke: err: Error -> unit

    /// This interface represents a file system.
    type [<AllowNullLiteral>] FileSystemSync =
        /// This is the name of the file system. The specifics of naming filesystems is unspecified, but a name must be unique across the list of exposed file systems.
        abstract name: string with get, set
        /// root The root directory of the file system.
        abstract root: DirectoryEntrySync with get, set

    /// An abstract interface representing entries in a file system, each of which may be a FileEntrySync or DirectoryEntrySync.
    type [<AllowNullLiteral>] EntrySync =
        /// EntrySync is a file.
        abstract isFile: bool with get, set
        /// EntrySync is a directory.
        abstract isDirectory: bool with get, set
        /// Look up metadata about this entry.
        abstract getMetadata: unit -> Metadata
        /// The name of the entry, excluding the path leading to it.
        abstract name: string with get, set
        /// The full absolute path from the root to the entry.
        abstract fullPath: string with get, set
        /// The file system on which the entry resides.
        abstract filesystem: FileSystemSync with get, set
        /// <summary>Move an entry to a different location on the file system. It is an error to try to:
        /// <ul>
        /// <li> move a directory inside itself or to any child at any depth;</li>
        /// <li> move an entry into its parent if a name different from its current one isn't provided;</li>
        /// <li> move a file to a path occupied by a directory;</li>
        /// <li> move a directory to a path occupied by a file;</li>
        /// <li> move any element to a path occupied by a directory which is not empty.</li>
        /// </ui>
        /// A move of a file on top of an existing file must attempt to delete and replace that file. A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.</summary>
        /// <param name="parent">The directory to which to move the entry.</param>
        /// <param name="newName">The new name of the entry. Defaults to the EntrySync's current name if unspecified.</param>
        abstract moveTo: parent: DirectoryEntrySync * ?newName: string -> EntrySync
        /// Copy an entry to a different location on the file system. It is an error to try to:
        /// <ul>
        /// <li> copy a directory inside itself or to any child at any depth;</li>
        /// <li> copy an entry into its parent if a name different from its current one isn't provided;</li>
        /// <li> copy a file to a path occupied by a directory;</li>
        /// <li> copy a directory to a path occupied by a file;</li>
        /// <li> copy any element to a path occupied by a directory which is not empty.</li>
        /// </ui>
        /// A copy of a file on top of an existing file must attempt to delete and replace that file.
        /// A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.
        /// Directory copies are always recursive--that is, they copy all contents of the directory.
        abstract copyTo: parent: DirectoryEntrySync * ?newName: string -> EntrySync
        /// Returns a URL that can be used to identify this entry. Unlike the URN defined in [FILE-API-ED], it has no specific expiration; as it describes a location on disk, it should be valid at least as long as that location exists.
        abstract toURL: unit -> string
        /// Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.
        abstract remove: unit -> unit
        /// Look up the parent DirectoryEntrySync containing this Entry. If this EntrySync is the root of its filesystem, its parent is itself.
        abstract getParent: unit -> DirectoryEntrySync

    /// This interface represents a directory on a file system.
    type [<AllowNullLiteral>] DirectoryEntrySync =
        inherit EntrySync
        /// Creates a new DirectoryReaderSync to read EntrySyncs from this DirectorySync.
        abstract createReader: unit -> DirectoryReaderSync
        /// <summary>Creates or looks up a directory.</summary>
        /// <param name="path">Either an absolute path or a relative path from this DirectoryEntrySync to the file to be looked up or created. It is an error to attempt to create a file whose immediate parent does not yet exist.</param>
        /// <param name="options"><ul>
        /// <li> If create and exclusive are both true and the path already exists, getFile must fail.</li>
        /// <li> If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.</li>
        /// <li> If create is not true and the path doesn't exist, getFile must fail.</li>
        /// <li> If create is not true and the path exists, but is a directory, getFile must fail.</li>
        /// <li> Otherwise, if no other error occurs, getFile must return a FileEntrySync corresponding to path.</li>
        /// </ul></param>
        abstract getFile: path: string * ?options: Flags -> FileEntrySync
        /// <summary>Creates or looks up a directory.</summary>
        /// <param name="path">Either an absolute path or a relative path from this DirectoryEntrySync to the directory to be looked up or created. It is an error to attempt to create a directory whose immediate parent does not yet exist.</param>
        /// <param name="options"><ul>
        /// <li> If create and exclusive are both true and the path already exists, getDirectory must fail.</li>
        /// <li> If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.</li>
        /// <li> If create is not true and the path doesn't exist, getDirectory must fail.</li>
        /// <li> If create is not true and the path exists, but is a file, getDirectory must fail.</li>
        /// <li> Otherwise, if no other error occurs, getDirectory must return a DirectoryEntrySync corresponding to path.</li>
        /// </ul></param>
        abstract getDirectory: path: string * ?options: Flags -> DirectoryEntrySync
        /// Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete a directory that contains a file that cannot be removed], some of the contents of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.
        abstract removeRecursively: unit -> unit

    /// This interface lets a user list files and directories in a directory. If there are no additions to or deletions from a directory between the first and last call to readEntries, and no errors occur, then:
    /// <ul>
    /// <li> A series of calls to readEntries must return each entry in the directory exactly once.</li>
    /// <li> Once all entries have been returned, the next call to readEntries must produce an empty array.</li>
    /// <li> If not all entries have been returned, the array produced by readEntries must not be empty.</li>
    /// <li> The entries produced by readEntries must not include the directory itself ["."] or its parent [".."].</li>
    /// </ul>
    type [<AllowNullLiteral>] DirectoryReaderSync =
        /// Read the next block of entries from this directory.
        abstract readEntries: unit -> ResizeArray<EntrySync>

    /// This interface represents a file on a file system.
    type [<AllowNullLiteral>] FileEntrySync =
        inherit EntrySync
        /// Creates a new FileWriterSync associated with the file that this FileEntrySync represents.
        abstract createWriter: unit -> FileWriterSync
        /// Returns a File that represents the current state of the file that this FileEntrySync represents.
        abstract file: unit -> File

    type [<AllowNullLiteral>] Window =
        inherit LocalFileSystem
        inherit LocalFileSystemSync

    type [<AllowNullLiteral>] WorkerGlobalScope =
        inherit LocalFileSystem
        inherit LocalFileSystemSync
