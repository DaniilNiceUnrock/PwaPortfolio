<template>
  <div>
    <Visit  />

    <div class="containerabout" v-if="visible = true">
      <MySkills  />
      <SliderWorks />
      <Reviews />
    </div>

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data: () => ({
  }),
  name: 'Home',
  components: {
    Visit: () => import("@/components/Visit/Visit.vue") ,
    Footer: () => import("@/components/Footer/Footer") ,
    MySkills: () => import("@/components/MySkills/MySkills.vue") ,
    SliderWorks: () => import("@/components/SliderWorks/SliderWorks.vue") ,
    Reviews: () => import("@/components/Reviews/Reviews.vue") ,
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/HomePage/index.scss">