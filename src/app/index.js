const path = require('path')
const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static')

const router = require('../router/index')
const errHandler = require('./errHandler')
const app = new Koa()

//KoaBody中间件要在所有路由之前
app.use(KoaBody({
  multipart: true,
  formidable: {
    // 在配制选项option里, 不推荐使用相对路径
    // 在option里的相对路径, 不是相对的当前文件. 相对process.cwd()
    uploadDir: path.join(__dirname, '../upload'),
    keepExtensions: true,
  },
  parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
}))
app.use(KoaStatic(path.join(__dirname, '../upload')))
app.use(router.routes())
app.use(router.allowedMethods())
// 统一的错误处理
app.on('error', errHandler)

module.exports = app
