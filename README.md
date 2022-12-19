# Fable Browser Extension

This is a simple Fable app which implements the example browser extension [Borderify](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension).


## Building and running the app

* Install JS dependencies (this will also invoke `dotnet tool restore`, check package.json scripts): `npm install`
* Run Fable build: `dotnet fable src --run webpack` or `npm run build`
* After the first compilation is finished,
    * In Firefox: Open the `about:debugging` page, click the __This Firefox__ option, click the Load Temporary Add-on button, then select any file in the _public_ directory.