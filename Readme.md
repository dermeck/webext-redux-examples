# Examples for webext-redux

This Repo contains small example extensions illustrating an issue with webext-redux. 

Both examples are almost identical `react17-rr8` is a copy of `react17-rr7` with an upgrade of `react-redux` to vetrsion 8 (https://github.com/dermeck/webext-redux-examples/commit/6bfddf5cae108db0fe242d965cfa6439c948f1db) 

The `react17-rr7` works, `react17-rr8` has the following issue when selectiong state:

https://github.com/tshaddix/webext-redux/issues/280

`Uncaught TypeError: can't access property "state", this is undefined` 


## Using the examples
Build the extension with `yarn start`

Load the Extension
- in Firefox navigate to `about:debugging#/runtime/this-firefox` > `Load  Temporary Add-on...`
- select the `manifest.json` file from the `dist` folder

