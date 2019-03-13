<template>
  <div class="container">

    <div v-if="userinfo.openId" class="userinfo">
      <img :src="userinfo.avatarUrl">
      <p>{{userinfo.nickName}}</p>
    </div>

    <div v-if="!userinfo.openId" style="text-align:center;margin:10px">
      <img :src="userinfo.avatarUrl">
      <button 
        v-if="!userinfo.openId" 
        open-type="getUserInfo" 
        lang="zh_CN" 
        @getuserinfo="doLogin()"
        style="width:100px;font-size:12px;margin-top:10px">
        点击登录
      </button>
    </div>

    <YearProgress></YearProgress>

    <!-- <button v-if="userinfo.openId" class="btn" @click="scanBook()">添加图书</button> -->
    <button class="btn" @click="scanBook()">添加图书</button>
  </div>
</template>

<script type="text/ecmascript-6">
import YearProgress from '@/components/YearProgress'
import { post, showSuccess, showModal } from '@/utils'
import config from '@/config'
export default {
  name: 'Me',
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../../../static/img/unlogin.png',
        nickName: ''
      }
    }
  },
  components: {
    YearProgress
  },
  methods: {
    // 添加图书请求
    addBook (isbn) {
      // const res = await post('/weapp/addbook', {
      //   isbn,
      //   openid: this.userinfo.openId
      // })
      console.log(isbn)
      // showModal('添加成功', `${res.title}添加成功`)
    },
    // 扫码方法
    scanBook () {
      wx.scanCode({
        success: (res) => { // 扫码得到的信息
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    doLogin: function (e) {
      // let user = wx.getStorageSync('userinfo')
      if (!user) {
        console.log('登录');
      }
    }
  },
  // onShow () { // 页面显示/切入前台时触发。
  //   let userinfo = wx.getStorageSync('userinfo')
  //   if (userinfo) {
  //     this.userinfo = userinfo
  //   }
  // }
}
</script>

<style lang="less" scope>
.container {
  padding: 0 30rpx;
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
  }
  img {
    width: 128rpx;
    height: 128rpx;
    border-radius: 50%;
    margin: 20rpx;
  }
}

</style>
