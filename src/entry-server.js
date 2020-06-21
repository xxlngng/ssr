import { createApp } from "./main";

// 服务端入口：将来请求进来之后，可以获取一个vue实例
// 跳转到首屏

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context);

    // 跳转至首屏
    router.push(context.url);
    // 路由就绪，返回结果
    router.onReady(() => {
      // renderer返回Vue实例
      resolve(app)
    }, reject);
  });
};
