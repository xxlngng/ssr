import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import store from "./store";

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

export function createApp(context) {
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    context, // 用于外部和vue内部交互
    render: h => h(App)
  });

  return { app, router };
}
