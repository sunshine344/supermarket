import Vue from 'vue'
import router from './router'
import store from './store'
import App from './pages'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './style/index.less'

new Vue({
    router,
    store,
    render:ce => ce(App)
}).$mount('#root')