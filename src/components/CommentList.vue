<template>
   <div class="comment-list">
     <div class="page-title" v-if="comments.length">
       评论
     </div>

      <div
        class="comment"
        v-for="comment in comments"
        :key="comment.id">

        <div class="user">
          <div class="inline">
            <img 
              :src="comment.image" 
              mode="aspectFit"
              class="avatar">
            {{comment.title}}
          </div>
          <div class="right">
            {{comment.location||'未知地点'}}
            <span class="text-primary">--</span>
            {{comment.phone||'未知型号'}}
          </div>
        </div>
        <div class="content">
          {{comment.comment}}
        </div>
      </div>
      
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Commentlist',
  props: ['comments'],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.comment-list{
  background:#eee;
  font-size:14px;
  .comment{
    background: white;
    margin-bottom:10px;
    padding:5px 20px;
    .content{
      margin:10px 0;
    }
    .user{
      .inline{
        display:inline;
        .avatar{
          width:20px;
          height:20px;
          border-radius: 50%;
        }
      }

    }

  }

}
</style>
