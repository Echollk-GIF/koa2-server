const Koa = require('koa')
const KoaBody = require('koa-body')

const router = require('../router/index')
const errHandler = require('./errHandler')
const app = new Koa()

//KoaBody中间件要在所有路由之前
app.use(KoaBody())
app.use(router.routes())
app.use(router.allowedMethods())
// 统一的错误处理
app.on('error', errHandler)

module.exports = app
