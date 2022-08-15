import axios from 'axios'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode';

// XmlHttpRequest根路径
const baseUrl = process.env.VUE_APP_URL

/**
 * 创建ajax请求
 * @param {*} options
 * options.url: 请求url
 * options.method: POST/GET  默认POST
 * options.data: 请求的数据
 */
function createHttp (options = {}) {
  const instance = axios.create()
  // Axios的实例的基础配置
  instance.defaults.method = options.method || 'POST'
  instance.defaults.baseURL = baseUrl
  instance.defaults.timeout = 0
  instance.defaults.responseType = options.responseType || 'json'
  instance.defaults.validateStatus = (status) => {
    const result = status !== 401 && status !== 500
    return result
  }
  // 配置请求信息
  instance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = options.contentType || 'application/json; charset=UTF-8'
    // const isToken = (config.headers || {}).isToken === false;
    // config.headers.Authorization = Cookies.get('authorization')
    if (getToken()) {
      config.headers['Authorization'] =  getToken(); // 让每个请求携带自定义token 请根据实际
    }
    return config
  }, (error) => {
    Promise.reject(error)
  })
  // 处理返回信息
  instance.interceptors.response.use((res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    if (code !== 200  && code !== 601) {
      debugger
      ElementUI.Message({
        message: res.data.msg,
        type: 'error',
        onClose: () => {
            location.href = '/'
        }
      })
      // ElementUI.Message.error(res.data.msg)
    } else if (code === 200) { 
      // todo
      if (options.prompt) {
        // this.$notify.success({
        //   title: '提示',
        //   message: res.data.msg
        // });
        ElementUI.Message.success('res.data.msg')
      }
      return res.data
    }  else if (code === 601) {
      return res.data
    } else if (code === 401 || code === 403) {
      localStorage.removeItem('account')
      localStorage.removeItem('permissions')
      Cookies.remove('authorization')
      ElementUI.Message({
        message: res.data.msg,
        type: 'error',
        onClose: () => {
          const logouturl = Cookies.get('logouturl')
          if (logouturl !== undefined && logouturl !== '' && logouturl !== null) {
            location.href = logouturl
          } else {
            location.href = '/'
          }
        }
      })
    } 
    return Promise.reject(res.data.msg)
  }, (error) => {
    const res = error.response
    // Do something with response error
    if (res && res.status === 401) {
      // localStorage.removeItem('access_token');
      location.href = '/'
    } else if (res && res.status === 500) {
      ElementUI.Message.error('服务器内部出错')
    } else if (res && res.status === 502) {
      ElementUI.Message.error('网关错误')
    }
    Promise.reject(res)
  })
  return instance(options)
}
// function getToken () {
//   return Cookies.get('authorization')
// }
export { createHttp, getToken }
