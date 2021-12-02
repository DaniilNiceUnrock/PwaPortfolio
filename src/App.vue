<template>

  <div id="app">

      <main>
        <router-view/> 
      </main>


    <VueScrollProgressBar/>
    <MySkiScrollToplls/> 
  </div>
  
</template>


<script>
// @ is an alias to /src

export default {
  name: 'HomePage',
  data() {
    return {   
    }
  },
  components: {
 
    MySkiScrollToplls: () => import("@/components/ScrollTop/ScrollTop.vue") ,
    VueScrollProgressBar: () => import("@/components/VueScrollProgressBar/VueScrollProgressBar.vue"),
  },
  
}
</script>
<style lang="scss">

</style>
