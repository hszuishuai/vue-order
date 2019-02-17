<template>
  <div id="swiper">
  <mt-swipe :auto="2000">
    <mt-swipe-item>
  <img src="./imgs/3.jpg">
    </mt-swipe-item>
    <mt-swipe-item>
    <img src="./imgs/22.jpg"/>
    </mt-swipe-item>
  </mt-swipe>
    <!--<img src="./imgs/1.jpg"/>-->
  </div>
</template>

<script>
    export default {
        name: "swiper",
      data(){
          return {
            swiperlist: [{"url": "./imgs/1jpg"},
              {"url": "./imgs/22.jpg"},
              {"url": "./imgs/3.jpg"}
            ]
          }
      }
    }
</script>

<style scoped lang="less">
  #swiper{
    .mint-swipe{
      width: 100%;
      height: 150px;
      img{
        width: 100%;
      }
    }
  }

</style>
