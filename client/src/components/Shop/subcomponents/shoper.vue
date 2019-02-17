<template>
  <div></div>
</template>

<script>
    export default {
        name: "shoper",
      data(){
          return{
            goodlist:[]
          }
      },
      created(){
          this.axios.get('http://localhost:3000/goods').then(res=>{
            //console.log(res.data)
            this.goodlist=res.data.data
          })
      }
    }
</script>

<style scoped>

</style>
