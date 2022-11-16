import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css';

import router from './router'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'


// createApp(App).mount('#app')
//createApp(App).use(router).mount('#app')


const app = createApp(App);

app.use(router);

app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('EasyDataTable', Vue3EasyDataTable);

app.mount('#app')






