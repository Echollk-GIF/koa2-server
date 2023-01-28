const path = require('path')

const {
  fileUploadError,
  unSupportedFileType,
  publishGoodsError,
  invalidGoodsID
} = require('../constants/err.type')

const {
  createGoods,
  updateGoods
} = require('../service/goods.service')

class GoodsController {
  //上传图片
  async upload (ctx, next) {
    // console.log(ctx.request.files)
    const { file } = ctx.request.files
    // console.log(file)
    const fileTypes = ['image/jpeg', 'image/png']
    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit('error', unSupportedFileType, ctx)
      }
      ctx.body = {
        code: 0,
        message: '商品图片上传成功',
        result: {
          goods_img: path.basename(file.path),
        },
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }
  //创建商品
  async create (ctx) {
    // 直接调用service的createGoods方法
    try {
      const { createdAt, updatedAt, ...res } = await createGoods(
        ctx.request.body
      )
      ctx.body = {
        code: 0,
        message: '发布商品成功',
        result: res,
      }
    } catch (err) {
      console.error(err)
      return ctx.app.emit('error', publishGoodsError, ctx)
    }
  }
  //修改商品
  async update (ctx) {
    try {
      const res = await updateGoods(ctx.params.id, ctx.request.body)

      if (res) {
        ctx.body = {
          code: 0,
          message: '修改商品成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidGoodsID, ctx)
      }
    } catch (err) {
      console.error(err)
    }
  }
}
module.exports = new GoodsController()
