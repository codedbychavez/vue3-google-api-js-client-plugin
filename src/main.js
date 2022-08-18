import { createApp } from 'vue'
import { createPinia } from 'pinia'
import gapiPlugin from './plugins/gapiPlugin'

import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(gapiPlugin, {
  apiKey: 'AIzaSyAL_ZJq7uJPIKtifveUKXdEZXX4MS9W2b8',
  clientId: '920632948783-ia29gokkbdl28l3u4rq3incesj27nhud.apps.googleusercontent.com',
  discoveryDocs: ['https://mybusinessbusinessinformation.googleapis.com/$discovery/rest?version=v1'],
  scope: 'https://www.googleapis.com/auth/business.manage email'
})

app.mount('#app')
