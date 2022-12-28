# Fable Browser Extension

This is a simple Fable app which implements the example browser extension [Beastify](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).
The extension is implemented using manifest 3 instead of version 2.


## Building and running the app

* Install JS dependencies (this will also invoke `dotnet tool restore`, check package.json scripts): `npm install`
* Run Fable build: `npm run build`
* After the first compilation is finished,
    * In Firefox: Open the `about:debugging` page, click the __This Firefox__ option, click the Load Temporary Add-on button, then select any file in the _public_ directory. _at the time of writing, manifest version 3 was not yet enabled in mainline releases_
    * In Chromium or Edge: open chrome://extension, enable developer mode and click 'Load unpacked', then select the _public_ directory.