import Vue from 'vue'
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
import App from './App.vue'
import store from './store';
import router from './routers'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

require('./mock');

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
