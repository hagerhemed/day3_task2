import { createApp } from 'vue'
// import App from './App.vue'
// import wrapperComponent from './wrapperComponent'
// import router from './routers/index'
import stateComponent from './statemanagment/stateCounter'
import {createPinia} from 'pinia'

const app = createApp(stateComponent)
// app.use(router)

const pinia =createPinia()
app.use(pinia)
app.mount('#app')
// createApp(stateComponent).mount('#app')
