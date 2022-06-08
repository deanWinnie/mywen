import App from './App.vue'
import router from './router'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelazyload from 'vue-lazyload'
import store from './store'
Vue.config.productionTip=false;
axios.defaults.timeout=8000;
Vue.use(VueAxios,axios);
Vue.use(Vuelazyload,{
  loading:'/imgs/loading-svg/loading-bubbles.svg',
  error:'imgs/error.svg'
});

new Vue({
  store,
    router,
    render: h => h(App)
  }).$mount('#app')
  
