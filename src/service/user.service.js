const User = require('../model/user.model')

class UserService {
  async CreatUser (user_name, password) {
    // 插入数据
    const res = await User.create({
      user_name: user_name,
      password: password
    })
    // console.log(res)
    return res.dataValues
  }
}

module.exports = new UserService()
