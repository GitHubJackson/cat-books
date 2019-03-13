<template>
  <div class="">
    <TopSwiper :banners="banners"></TopSwiper>

    <Card v-for="book in books" :key="book.id" :book="book">
      {{ book.title }}
    </Card>

    <p v-if="more" style="text-align:center;font-size:12px">
      没有更多数据了
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
import {get} from '@/utils'
import Card from '@/components/Card'
import TopSwiper from '@/components/TopSwiper'
export default {
  name: 'Books',
  components: {
    Card,
    TopSwiper
  },
  data () {
    return {
      books: [],
      page: 0, // 当前页数
      more: false,
      banners: [] // 轮播图
    }
  },
  mounted () { // mounted和created的区别
    this.getList(true)
    this.getBanner()
  },
  onPullDownRefresh () { // 下拉刷新初始化
    this.getList(true)
    this.getBanner()
  },
  onReachBottom () { // 触底刷新增加数据
    if (!this.more) {
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  methods: {
    getList() {
      console.log('获取列表');
    }
    // async getList (init) { // init参数判断是否是初始化
    //   if (init) {
    //     this.page = 0
    //     this.more = true
    //   }
    //   wx.showNavigationBarLoading()
    //   const books = await get('/weapp/booklist', {page: this.page})
    //   // console.log(books)
    //   if (books.list.length < 5 && this.page > 0) {
    //     this.more = false
    //   }
    //   if (init) {
    //     this.books = books.list
    //     wx.stopPullDownRefresh()
    //   } else {
    //     // 触底刷新时累加books数组
    //     this.books = this.books.concat(books.list)
    //   }
    //   wx.hideNavigationBarLoading()
    // },
    // 获取轮播图
    // async getBanner () {
    //   const banners = await get('/weapp/banner')
    //   // console.log(banners)
    //   this.banners = banners.list
    // }
  }
}
</script>

<style scoped>
</style>
