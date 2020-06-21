const express = require("express");

const app = express();
// 处理路径
const resolve = dir => require('path').resolve(__dirname,dir)
// 开放dist/client目录，静态文件需要下载
app.use(express.static(resolve('../dist/client'), {index: false}))

// 创建一个bundle渲染器
const { createBundleRenderer } = require("vue-server-renderer");

// bundle就是打包生成的/server/vue-ssr-server-bundle.json文件
const bundle = resolve("../dist/server/vue-ssr-server-bundle.json");
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext
  template: require("fs").readFileSync(
    resolve("../public/index.html"),
    "utf-8"
  ), // 宿主文件
  clientManifest: require(resolve(
    "../dist/client/vue-ssr-client-manifest.json"
  )) // 客户端清单
});

// 处理路由
app.get("*", async (req, res) => {
  const context = {
    url: req.url,
    tittle: "见证奇迹"
  }
  try {
    const html = await renderer.renderToString(context);
    res.send(html);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    res.status(500).send("服务器内部错误");
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("qidong");
});
