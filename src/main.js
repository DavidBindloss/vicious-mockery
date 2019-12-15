import Vue from 'vue'
import App from './App.vue'
import Clipboard from 'v-clipboard'
import VueRouter from 'vue-router'

import "./assets/style.scss"

 import store from "./store"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faRedo, faShareAlt, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRedo, faShareAlt, faMoneyCheckAlt);

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
  store,
  router,
  render: h => h(App),
  created() {
    let query = this.$route.query.id || undefined;
    this.$store.dispatch("generateInsult", query);
    if (this.$route.query.id) this.$router.replace("/");
  }
}).$mount('#app')
