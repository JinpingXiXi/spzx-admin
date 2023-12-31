/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:36:55
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import request from '@/utils/request'

// 后台登录接口
const API = '/admin/system/index';

// 登录接口
export const Login = data => {
  return request({
    url: `${API}/login`,
    method: 'post',
    data,
  })
}

// 获取登录用户信息
export const GetUserinfo = () => {
  return request({
    url: `${API}/getUserInfo`,
    method: 'get',
  })
}

// 退出
export const Logout = () => {
  return request({
    url: `${API}/logout`,
    method: 'get',
  })
}

// 获取图片验证码
export const GetCaptcha = () => {
  return request({
    url: `${API}/getCaptcha`,
    method: 'get',
  })
}
