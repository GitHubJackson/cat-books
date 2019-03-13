<template>
  <div class="">
    <BookInfo :info="bookDetail"></BookInfo>
    <CommentList :comments="comments"></CommentList>
    <div class="comment" v-if="showAdd">
      <textarea 
        v-model='comment'
        class='textarea'
        :maxlength='100'
        placeholder='请输入图书短评'>
      </textarea>

      <div class='location'>
        地理位置：
        <switch color='#EA5A49' :checked='location' @change='getGeo'></switch>
        <span class='text-primary'>{{location}}</span>
      </div>

      <div class='phone'>
        手机型号：
        <switch color='#EA5A49' :checked='phone' @change='getPhone'></switch>
        <span class='text-primary'>{{phone}}</span>
      </div>

      <button class="btn" @click='addComment'>
        评论
      </button>
    </div>
    <div v-else class='text-footer'>
      未登录或者已经评论过啦
    </div>

    <button open-type='share' class="btn">转发给好友</button>
  </div>
</template>

<script type="text/ecmascript-6">
import BookInfo from '@/components/BookInfo'
import CommentList from '@/components/CommentList'
import {get, post, showModal} from '@/utils'
export default {
  name: '',
  components: {
    BookInfo,
    CommentList
  },
  data () {
    return {
      bookid: '',
      bookDetail: {},

      userinfo: {},
      comment: '',
      location: '',
      phone: '',
      comments: []
    }
  },
  computed: {
    showAdd () {
      // 没登录
      if (!this.userinfo.openId) {
        return false
      }
      // 评论页面里查到有自己的openid
      if (this.comments.filter(v => v.openid === this.userinfo.openId).length) {
        return false
      }
      return true
    }
  },
  mounted () {
    // mpvue方法在页面onload时获取到传过来的options值
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
    this.getComments()
  },
  methods: {
    // 获取图书详情
    getDetail() {
      console.log('获取图书详情');
    },
    // async getDetail () {
    //   const bookDetail = await get('/weapp/bookdetail', {bookid: this.bookid})
    //   // console.log(bookDetail)
    //   wx.setNavigationBarTitle({
    //     title: bookDetail.title
    //   })
    //   this.bookDetail = bookDetail
    //   console.log(this.bookDetail)
    // },
    // 获取评论列表
    getComments() {
      console.log('获取评论列表');
    },
    // async getComments () {
    //   const comments = await get('/weapp/commentlist', {bookid: this.bookid})
    //   this.comments = comments.list || []
    //   console.log(this.comments)
    // },
    // 获取地理位置
    getGeo (e) {
      // 小程序api结合百度api地理编码显示城市...
      const ak = 'dGc7iAQkfNurr1vFy2iXqVxX8Q1mZAKr'
      let url = 'http://api.map.baidu.com/geocoder/v2/'
      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longitude}`,
                output: 'json'
              },
              success: res => {
                console.log(res)
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = ''
                }
              }
            })
            console.log(geo)
          }
        })
      } else {
        this.location = ''
      }
    },
    // 获取手机型号
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        // console.log(phoneInfo)
        this.phone = phoneInfo.model
      } else {
        // 没选中
        this.phone = ''
      }
    },
    // 添加评论
    addComment() {
      console.log('添加评论');
    }
    // async addComment () {
    //   if (!this.comment) {
    //     return
    //   }
    //   const data = {
    //     openid: this.userinfo.openId,
    //     bookid: this.bookid,
    //     comment: this.comment,
    //     phone: this.phone,
    //     location: this.location
    //   }
    //   console.log(data)
    //   try {
    //     await post('/weapp/addcomment', data)
    //     this.comment = ''
    //     this.getComments()
    //   } catch (e) {
    //     showModal('评论失败', e.msg)
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
.comment{
  margin-top:10px;
  .textarea{
    width:730rpx;
    height:200rpx;
    background:#eee;
    padding:10rpx;
  }
  .location{
    margin-top:10px;
    padding:5px 10px;
  }
  .phone{
    margin-top:10px;
    padding:5px 10px;
  }
}
.btn {
  margin-top: 10px;
}
</style>
