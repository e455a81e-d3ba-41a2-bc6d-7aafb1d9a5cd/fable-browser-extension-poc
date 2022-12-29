# Fable Browser Extension

This is a simple Fable app which implements the example browser extension [Beastify](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).
The extension is implemented using manifest 3 instead of version 2.

The chrome extension API was generated from the [typescript type definitions](https://www.npmjs.com/package/@types/chrome) using [ts2fable](https://github.com/fable-compiler/ts2fable). _Unfortunately version 0.7.1 does not produce useable results without manually correcting quite a few mistakes like missing modules or declarations that produce code that fails at runtime._

## Building and running the app

* Install JS dependencies (this will also invoke `dotnet tool restore`, check package.json scripts): `npm install`
* Run Fable build: `npm run build`
* After the first compilation is finished,
    * In Chromium or Edge: open chrome://extension, enable developer mode and click 'Load unpacked', then select the _public_ directory.