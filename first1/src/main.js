import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxiosPlugin from 'vue-axios-plugin'
import { Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';
import { Image as VanImage } from 'vant';
import { Grid, GridItem } from 'vant';
import { NavBar } from 'vant';
import { Loading } from 'vant';
import { ShareSheet } from 'vant';
import { Search } from 'vant';
import { Popup } from 'vant';
import { PullRefresh } from 'vant';
// import { Toast } from 'vant';

// Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(Search);
Vue.use(Popup);
Vue.use(ShareSheet);
Vue.use(Loading);
Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Button);


Vue.use(VueAxiosPlugin, {
  // 请求拦截处理
  reqHandleFunc: config => config,
  reqErrorFunc: error => Promise.reject(error),
  // 响应拦截处理
  resHandleFunc: response => response,
  resErrorFunc: error => Promise.reject(error)
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
