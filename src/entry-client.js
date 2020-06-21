// 客户端入口
import { createApp } from "./main";

const { app, router } = createApp();

// 还原状态
// if (window.__INITIAL_STATE__) {
//   store.replaceState(window.__INITIAL_STATE__);
// }

// 路由就绪，返回结果
router.onReady(() => {
  app.$mount("#app");
});