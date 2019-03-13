<template>
  <div class="bookinfo">
    <div class="thumb">
      <img 
        mode="aspectFill"
        :src="info.image" 
        class="back"
      >
      <img 
        mode="aspectFit"
        :src="info.image" 
        class="img"
      >
      <div class="info">
        <div class="title">
          {{info.title}}
        </div>
        <div class="author">
          {{info.author}}
        </div>
      </div>
    </div>

    <div class="detail">
      <img :src="userinfo.avatarUrl" class="avatar" mode="aspectFit">
      {{userinfo.nickName}}
      <div class="right text-primary">
        {{info.rate}}分
        <Rate :value="info.rate"></Rate>
      </div>
    </div>

    <div class="detail">
      {{info.publisher}}
      <div class="right">
        {{info.price}}
      </div>
    </div>

    <div class="tags">
      <div class="badge" v-for="tag in info.tags" :key="tag">{{tag}}</div>
    </div>

    <div class="summary">
      <p v-for='(sum, i) in info.summary' :key="i">{{sum}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Rate from './Rate'
export default {
  name: 'Bookinfo',
  props: ['info'],
  components: {
    Rate
  },
  data () {
    return {}
  },
  computed: {
    userinfo () {
      return this.info.user_info || {}
    }
  }
}
</script>

<style lang="less" scoped>
@img-width: 750rpx;
.bookinfo {
  font-size: 14px;
  .tags{
    padding: 5px 10px;
    .badge {
      display: inline-block;
      margin: 3px;
      padding: 3px;
      border-radius: 10px;
      border: 1px #ea5a49 solid;
      color: #ea5a49;
    }
  }
  .summary {
    padding: 5px 10px;
    p {
      text-indent: 2em;
      font-size: 14px;
    }
  }
  .right {
    float: right;
  }
  .detail {
    padding: 5px 10px;
    .avatar {
      width: 20px;
      height: 20px;
    }
  }
  .thumb{
    width: @img-width;
    height: 500rpx;
    overflow: hidden;
    position: relative;
    .back{
      filter: blur(15px);
      width: @img-width;
    }
    .img {
      position: absolute;
      height: 300rpx;
      left: 0;
      top: 30rpx;
    }
    .info {
      color: white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 330rpx;
      text-align: center;
      .title {
        font-size: 20px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
}
</style>
