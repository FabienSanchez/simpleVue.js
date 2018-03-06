import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './components/MachinesList.vue'
import Map from './components/MachinesMap.vue'
import Machine from './components/Machine.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Axios from 'axios'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBNgvN5kTLVkNVDWsxlvg3iOfERFO2Abbs',
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/machines', component: List },
        { path: '/map', component: Map },
        { path: '/machine', component: Machine }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
