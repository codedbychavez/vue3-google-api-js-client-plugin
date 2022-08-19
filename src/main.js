import { createApp } from 'vue'
import { createPinia } from 'pinia'
import gapiPlugin from 'vue3-googleapis'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(gapiPlugin, {
  apiKey: '<GOOGLE_PROJECT_API_KEY>',
  clientId: '<CLIENT_ID>.apps.googleusercontent.com',
  discoveryDocs: ['https://mybusinessbusinessinformation.googleapis.com/$discovery/rest?version=v1'],
  scope: 'https://www.googleapis.com/auth/business.manage email'
})

app.mount('#app')
