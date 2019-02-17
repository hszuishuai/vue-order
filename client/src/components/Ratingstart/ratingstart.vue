<template>
  <div id="rating">
    <div v-for="(rating,index) in ratings" :key="index">
    <img v-if="shoprating+1<rating" src="./img/star_fill_none.png">
      <img v-else-if="shoprating>=rating" src="./img/star_fill_whole.png">
      <img v-else="shoprating>=rating-1" src="./img/star_fill_half.png">
      </div>
  </div>
</template>

<script>
    export default {
      name: "ratingstart",
      data(){
        return{
          ratings:[1,2,3,4,5]
        }
      },
      props:{
          shoprating:Number
      }
    }
</script>

<style scoped lang="less">

#rating{
  width: 50%;
  display: flex;
  align-items: center;
  div{
    img{
      width: 10px;
      height: 10px;
      float: left;
      margin-left: 2px;
    }
  }
}
</style>
