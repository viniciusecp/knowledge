import "font-awesome/css/font-awesome.css";
import Vue from "vue";
import App from "./App.vue";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORARIO
require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkhvbmRhIENpdmljIiwiZW1haWwiOiJjaXZpY0B2aW5pY2l1cy5jb20iLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTU3NzcxMTk4OSwiZXhwIjoxNTc3OTcxMTg5fQ.vPd6nuV9oe84pFxfDFikHitgq4cyuIs6kTIpVgfmC6o";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
