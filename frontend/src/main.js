import "font-awesome/css/font-awesome.css";
import Vue from "vue";
import App from "./App.vue";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORARIO
require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlZpbmljaXVzIEZhdXN0aW5vIFNpbHZhIiwiZW1haWwiOiJ2aW5pY2l1c0B2aW5pY2l1cy5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTc3NzE1MDczLCJleHAiOjE1Nzc5NzQyNzN9.h8z3pgFfgebcrmzLDLMp73rKJJOpd7bGUmw0fLzRGbQ";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
