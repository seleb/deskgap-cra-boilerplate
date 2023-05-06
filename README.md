# deskgap-cra-boilerplate

boilerplate for a [deskgap](https://github.com/patr0nus/DeskGap) app with [CRA](https://create-react-app.dev)-based UI

includes a port of most of the deskgap API demo

- ```sh
  export DESKGAP_DIST_FOLDER=`realpath ./deskgap_bin` && npm i
  ```

- `npm run start` will run the standard CRA webpack dev server
- `npm run build` will create a production build of the react app, and copy the necessary files for the deskgap app into `/bin`
- `./deskgap/main.js` is the deskgap startup script; IPC can be setup here
