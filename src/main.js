import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);
//app.AOS = new AOS.init({ disable: "phone" });

import  './assets/main.scss'



Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
