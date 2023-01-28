const Router = require('koa-router')

const {
  auth,
  hadAdminPermission
} = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')
const {
  upload,
  create,
  update,
  remove
} = require('../controller/goods.controller')
const router = new Router({ prefix: '/goods' })

//商品图片上传
router.post('/upload', auth, hadAdminPermission, upload)

// 发布商品接口
router.post('/', auth, hadAdminPermission, validator, create)

//修改商品信息
router.put('/:id', auth, hadAdminPermission, validator, update)

//硬删除
router.delete('/:id', auth, hadAdminPermission, remove)

module.exports = router
