<template>
    <div id="order">
      <div id="map" ref="Bmap">

      </div>
    </div>
</template>

<script>
  import {MP} from "../common/MP";

  export default {
        name: "order",
        data(){
          return{
            map:null,
            ak:'92IBa2XKyKXFVKwqRH0OE2GgCTGtO1We'
          }
        },
      mounted(){
          this._getmap()
      },
    methods:{
          _getmap(){
            this.$nextTick(()=>{
              const that=this
              MP(that.ak).then((BMap)=>{
                const map=new BMap.Map(this.$refs.Bmap);
                const point=new BMap.Point(116.404, 39.915)
                 map.centerAndZoom(point, 15);
              })
            })}
    }
    }

</script>

<style scoped lang="less">
  #order{
    #map{
      width: 100%;
      height: 400px;
    }
  }

</style>
