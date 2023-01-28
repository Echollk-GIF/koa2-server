const Goods = require('../model/goods.model')

class GoodsService {
  //新增货物
  async createGoods (goods) {
    const res = await Goods.create(goods)
    return res.dataValues
  }
  //修改货物
  async updateGoods (id, goods) {
    const res = await Goods.update(goods, { where: { id } })
    return res[0] > 0 ? true : false
  }
}
module.exports = new GoodsService()

