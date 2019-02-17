<template>
  <div id="app">
  <router-view/>
    <foote-guide v-if="$route.meta.show"></foote-guide>
  </div>
</template>

<script>
  import  footerg from "./components/Footer/footers.vue"
  import  {mapActions} from 'vuex'
  export default {
    name: 'App',
    data(){
      return{
      }
    },
   components:{
      "foote-guide":footerg
    },
    mounted(){
     this.getuserinfo()
    },
    methods:{
    ...mapActions(['getuserinfo'])
    }
  }
</script>

<style scoped lang="less">
  #app{
  }

</style>
