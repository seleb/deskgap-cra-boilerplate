# deskgap-cra-boilerplate

boilerplate for a [deskgap](https://github.com/patr0nus/DeskGap) app with [CRA](https://create-react-app.dev)-based UI

includes a port of most of the deskgap API demo

- The standard host for deskgap's binary distribution no longer works, so this project includes a copy of the binaries.
  The `DESKGAP_DIST_FOLDER` env var needs to be set when running `npm install` in order for these to work:
  
  ```sh
  export DESKGAP_DIST_FOLDER=`realpath ./deskgap_bin` && npm i
  ```

- `npm run start` will run the standard CRA webpack dev server
- `npm run build` will create a production build of the react app, and copy the necessary files for the deskgap app into `/bin`
- `./deskgap/main.js` is the deskgap startup script; IPC can be setup here

## Windows Limitation

Edge webviews do not allow loading localhost URLs without admin privileges, or by adding a loopback exception:

```sh
CheckNetIsolation LoopbackExempt -a -n="microsoft.win32webviewhost_cw5n1h2txyewy"
```

A fallback view is included in the template to help resolve the issue.

[Reference](https://github.com/webview/webview/issues/556#issuecomment-805672457)
