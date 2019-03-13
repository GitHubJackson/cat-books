<template>
   <div class="rate">
     <!-- ★☆ -->
     <span>☆☆☆☆☆</span>
     <div class="hollow" :style="style">
       ★★★★★
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Rate',
  props: {
    value: {
      type: [Number, String],
      default: '0'
    }
  },
  data () {
    return {}
  },
  computed: {
    style () {
      return `width:${this.value / 2}em`
    }
  }
}
</script>

<style lang="less" scoped>
.rate{
  position: relative;
  display: inline-block;
  .hollow{
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
  }
}
</style>
