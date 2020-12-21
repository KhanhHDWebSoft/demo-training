import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import "./filter";
import Vuelidate from "vuelidate";
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate/dist/vee-validate.full';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./directive"

// bs
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// components
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// default axios
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Vue.use(axios);

// vuelidate
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
