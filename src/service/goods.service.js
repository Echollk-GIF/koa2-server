const Goods = require('../model/goods.model')

class GoodsService {
  //新增商品
  async createGoods (goods) {
    const res = await Goods.create(goods)
    return res.dataValues
  }
  //修改商品
  async updateGoods (id, goods) {
    const res = await Goods.update(goods, { where: { id } })
    return res[0] > 0 ? true : false
  }
  //删除、下架商品
  async removeGoods (id) {
    const res = await Goods.destroy({ where: { id } })
    return res > 0 ? true : false
  }
  //上架商品
  async restoreGoods (id) {
    const res = await Goods.restore({ where: { id } })

    return res > 0 ? true : false
  }
}
module.exports = new GoodsService()

