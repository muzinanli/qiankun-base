import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'
Vue.use(ElementUI)

Vue.config.productionTip = false

const appList = [
  {
    name: 'vueApp', //微应用的名称
    entry: '//localhost:10000', //子应用需要支持跨域
    container: '#vue', //容器名
    activeRule: '/vue', //激活的路径
    props: { a: 1 },
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  },
]
registerMicroApps(appList) //在主应用中注册微应用
start()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
