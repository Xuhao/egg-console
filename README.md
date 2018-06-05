# egg-console

Rails-like console for eggjs

## 安装

    npm i @xuhao/egg-console --save

## 在package.json添加命令

Node 10+ 支持 top-level await，需添加`--experimental-repl-await`选项。

```diff
  "scripts": {
    /* node >= 10 */
+   "console": "node --experimental-repl-await node_modules/egg-console/lib/index.js",
    /* node < 10 */
+   "console": "node node_modules/egg-console/lib/index.js",
    ....
}
```

## 使用

支持`app`，`ctx` 变量, Node 10+ 开启`--experimental-repl-await`后可以直接使用`await`。

```shell
$ npm run console

> web-api@1.0.0 console /Users/Xuhao/Workspace/web-api
> node --experimental-repl-await node_modules/egg-console/lib/index.js

> app.name
web-api

> ctx.request
{ method: 'GET',
  url: '/',
  header: { 'x-forwarded-for': '127.0.0.1' } }

> await ctx.model.Article.findOne()
{ _id: 5a818d65a3af86eb70560952,
  sourceId: 59e9643f2c09353cfd51aadb,
  updatedAt: 2018-02-27T02:41:26.710Z,
  __v: 0,
  createdAt: 2018-02-12T12:49:41.975Z,
  collectingCount: 0,
  helpfulCount: 0,
  viewCount: 40 }
> 
```

