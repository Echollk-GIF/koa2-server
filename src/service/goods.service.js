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
  //获取所有商品
  async findGoods (pageNum, pageSize) {
    // // 1. 获取总数
    // const count = await Goods.count()
    // // console.log(count)
    // // 2. 获取分页的具体数据
    // const offset = (pageNum - 1) * pageSize
    // const rows = await Goods.findAll({ offset: offset, limit: pageSize * 1 })

    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Goods.findAndCountAll({
      offset: offset,
      limit: pageSize * 1,
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
}
module.exports = new GoodsService()

