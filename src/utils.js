// 工具函数
import config from './config'

// get 工具函数
export function get (url, data) {
  return request(url, 'GET', data)
}
// post 工具函数
export function post (url, data) {
  return request(url, 'POST', data)
}
// promise 工具函数
function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

// 原先的get函数
// export function get (url) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: config.host + url,
//       success: function (res) {
//         if (res.data.code === 0) {
//           resolve(res.data.data)
//         } else {
//           reject(res.data)
//         }
//       }
//     })
//   })
// }

// 模态弹窗
export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

// 成功弹窗
export function showSuccess (title) {
  wx.showToast({
    title,
    type: 'success'
  })
}
