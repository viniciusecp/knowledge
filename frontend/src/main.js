import "font-awesome/css/font-awesome.css";
import Vue from "vue";
import App from "./App.vue";

import "./config/bootstrap";
import "./config/msgs";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORARIO
require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlZpbmljaXVzIEZhdXN0aW5vIFNpbHZhIiwiZW1haWwiOiJ2aW5pY2l1c0B2aW5pY2l1cy5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTc4Mzk3NDk4LCJleHAiOjE1Nzg2NTY2OTh9.3EieqkrVeTjaCWi-liK3DCUkUUXRTwke18qgzQHKGQU";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
