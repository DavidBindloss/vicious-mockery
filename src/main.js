import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import "./assets/style.scss"

import SocialSharing from "vue-social-sharing";
 
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faShareAlt, faRedo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub);
library.add(faShareAlt);
library.add(faRedo);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(SocialSharing);

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
