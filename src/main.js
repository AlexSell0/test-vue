import '../assets/fonts/geometria/stylesheet.css'
import '../assets/fonts/montserrat/stylesheet.css'

import '../assets/css/main.css';
import '../assets/css/header.css';


import { createApp } from 'vue'
import router from "./router/index.js";
import store from "./store/index.js";

import VclickOutside from "./directives/VclickOutside.vue";

import App from './App.vue'

const app = createApp(App)

app.directive('click-outside', VclickOutside)
app.use(router)
app.use(store)
app.mount('#app')