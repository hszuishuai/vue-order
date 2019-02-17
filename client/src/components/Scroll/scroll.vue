<template>
    <div class="scroll">
      <slot name="scroll"></slot>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "scroll",
      props:{
        probeType: {
          type: Number,
          default: 1
        },
        scrollX: {
          type: Boolean,
          default: false
        },
        data: {
          type: Array,
          default: null
        },
        click:{
          type:Boolean,
          default:true
        }
      },
      mounted() {
        // 保证在DOM渲染完毕后初始化better-scroll
        setTimeout(() => {
          this._iscrooY()
        }, 20)
      },
      methods:{
          _iscrooY(){
            if(!this.scroll){
              this.scroll=new BScroll('.scroll',{probeType:this.probeType,click:this.click})
            }else {
              this.scroll.refresh()
            }
            // this.scroll.on('scroll',(pos)=>{
            //   this.$emit('emit',pos)
            // })
            // this.scroll = new BScroll('scroll', {
            //   probeType: 2,
            //   click: true
            // })
          },
        scrollTo() {
          // 代理better-scroll的scrollTo方法
          this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
        },
      },
      watch: {
        // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
        data() {
          setTimeout(() => {
            this.scroll.refresh();
          }, 20);
        }
      }
    }
</script>

<style scoped lang="less">
 .scroll{
   max-height: 200px;
   overflow: hidden;
 }
</style>
