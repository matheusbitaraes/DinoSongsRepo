// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSimpleAlert from 'vue-simple-alert'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(VueSimpleAlert)
Vue.use(Vuetify)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify(),
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
