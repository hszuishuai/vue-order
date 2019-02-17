<template>
    <div id="header">
      <header>
        <span class="address">
          <span class="head-title">
         {{title}}
        </span>
        </span>
       <slot name="left"></slot>
        <slot name="right"></slot>
      </header>
    </div>
</template>

<script>
    export default {
      name: "headerTop",
      props:{
          title:String
      }
    }
</script>

<style scoped lang="less">
#header{
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    background: #ffffff;
    z-index: 100;
    }
  }
</style>
