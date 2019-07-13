# deskgap-cra-boilerplate

boilerplate for a deskgap app with CRA-based UI

includes a port of most of the deskgap API demo

- `npm run start` will run the standard CRA webpack dev server
- `npm run build` will create a production build of the react app, and copy the necessary files for the deskgap app into `/bin`
- `./deskgap/main.js` is the deskgap startup script; IPC can be setup here
