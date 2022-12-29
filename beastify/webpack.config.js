// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var path = require("path");

let config = {
    devtool: 'cheap-module-source-map', // We can not use the default devtool because it uses 'eval()'. Manifest 3 disallows unsafe-eval.
    mode: "development",
    output: {
        path: path.join(__dirname, "./public"),
        filename: "[name].bundle.js",
    }
}

module.exports = (env, argv) => {
    console.log(argv)
    if (argv.env.entry == 'popup') {
        config.entry = {
            popup: "./src/Popup/Popup.fs.js"
        }
    } else if (argv.env.entry == 'content') {
        config.entry = {
            content: "./src/Content/Content.fs.js"
        }
    } else {
        throw "error: env.entry not set"
    }

    if (argv.mode == 'production') {
        config.mode = argv.mode
    }
    return config;
}