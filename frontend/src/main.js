import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from "vue-router";
import routes from './routes.js'

import './style.css'
import App from './App.vue'
import * as path from "node:path";

const pinia = createPinia();
const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(pinia);
app.use(router);
app.mount('#app')
