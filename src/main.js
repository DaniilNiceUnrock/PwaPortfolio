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

const loadimage = require('./assets/Spin.gif')
const errorimage = require('./assets/Spin.gif')
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ],
  silent: false,
});

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
