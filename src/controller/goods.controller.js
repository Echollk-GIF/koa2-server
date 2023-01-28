class GoodsController {
  //上传图片
  async upload (ctx, next) {
    ctx.body = '上传成功'
  }
}
module.exports = new GoodsController()
