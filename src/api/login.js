import { createHttp } from '../utils/apiRequest'

class LoginMapper {
  constructor () {
    this.createHttp = createHttp
  }

  /**
   * 登录
   * @param {*} data
   * @returns
   */
   login (data) {
    return this.createHttp({
      method: 'POST',
      url: '/user/login',
      data: data
    })
  }

  /**
   * 注册
   * @param {}} data 
   * @returns 
   */
  register (data) {
    return this.createHttp({
      method: 'POST',
      url: '/user/register',
      data: data
    })
  }

  logout () {
    return this.createHttp({
      method: 'get',
      url: '/user/logout'
    })
  }

  // 刷新方法
  // refreshToken() {
  //   return this.createHttp({
  //     url: '/user/refresh',
  //     method: 'post'
  //   })
  // }

  getInfo () {
    // return this.createHttp({
    //   method: 'get',
    //   url: '/user/logout'
    // })
  }
}

const loginMapper = new LoginMapper()

export { loginMapper }