# Koa2开发过程（未完待续）

# 一. 项目的初始化

## 1 npm 初始化

```
npm init -y
```

生成`package.json`文件:

- 记录项目的依赖

# 二. 搭建项目

## 1 安装 Koa 框架

```
npm install koa
```

## 2 编写最基本的 app

创建`src/main.js`

```
const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})
```

## 3 测试

在终端, 使用`node src/main.js`

# 三. 项目的基本优化

## 1 自动重启服务

安装 nodemon 工具

```
npm i nodemon -D
```

编写`package.json`脚本

```
"scripts": {
  "dev": "nodemon ./src/main.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

执行`npm run dev`启动服务