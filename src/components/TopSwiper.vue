<template>
  <div class="">
    <swiper
      :indicator-dots='true'
      indicator-colot='#EA5A49'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'
    >
      <div v-for="(banner, index) in imgUrls" :key="index">
        <swiper-item>
          <img 
            mode='aspectFit' 
            v-for="(img, index2) in banner"
            :key="index2"
            :src="img.image"
            style="width:33.3%;height:250rpx;margin:10rpx 0"
          />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Topswiper',
  props: ['banners'],
  data () {
    return {

    }
  },
  computed: {
    imgUrls () {
      // console.log(this.banners)
      let res = this.banners
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6, 9)]
    }
  },
  mounted () {
    console.log(this.banners)
  }
}
</script>

<style lang="less" scoped>
</style>
