  // The Vue build version to load with the `import` command
  // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import store from './store/store'
  import App from './App'
  import router from './router'
  import '../static/style/reset.css'
  import '../static/script/jquery-easyui-1.5.3/jquery.easyui.min.js'
  import '../static/script/jquery-easyui-1.5.3/locale/easyui-lang-zh_CN.js'
  import '../static/script/jquery-easyui-1.5.3/themes/default/easyui.css'
  import '../static/script/jquery-easyui-1.5.3/themes/icon.css'

  Vue.use(ElementUI)
  Vue.config.productionTip = false

  /* eslint-disable no-new */

  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
