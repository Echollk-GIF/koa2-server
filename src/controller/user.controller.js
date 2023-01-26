const { CreatUser } = require('../service/user.service')
const { userRegisterError } = require('../constants/err.type')
class UserController {
  //用户注册
  async register (ctx, next) {
    //1.获取数据
    const { user_name, password } = ctx.request.body

    try {
      //2.操作数据库
      const res = await CreatUser(user_name, password)
      console.log(res)
      //3.返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }
    } catch (err) {
      console.log(err)
      ctx.app.emit('error', userRegisterError, ctx)
    }

  }
  //用户登录
  async login (ctx, next) {
    const { user_name } = ctx.request.body
    ctx.body = `${user_name}用户登录成功`
  }
}

module.exports = new UserController()
