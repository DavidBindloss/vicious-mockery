import Vue from 'vue'
import App from './App.vue'
import Clipboard from 'v-clipboard'
import VueRouter from 'vue-router'

import "./assets/style.scss"
 
import { library } from "@fortawesome/fontawesome-svg-core"
import { faRedo, faShareAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRedo, faShareAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Clipboard);

let routes = [
   { path: '/', component: App, name: 'home'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
