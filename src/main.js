import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import './index.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
  timeFormat(date) {
    return moment(date).format("HH:mm")
  },
  dateFormat(date) {
    return moment(date).locale("tr").format("ddd,DD/MM/YYYY")
  },

}

app.use(router).use(store)
app.mount('#app')
