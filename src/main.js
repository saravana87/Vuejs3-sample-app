import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css';

import router from './router'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


// createApp(App).mount('#app')
//createApp(App).use(router).mount('#app')


const app = createApp(App);

app.use(router);


app.component('EasyDataTable', Vue3EasyDataTable);

app.mount('#app')






