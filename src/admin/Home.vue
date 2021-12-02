<template>
  <div>
    <div class="admin">
        <p>124214214214</p>
    </div>
    <Footer/>
  </div>
</template>

<script>


export default {
  data: () => ({
  }),
  name: 'Admin',
  components: {
    Footer: () => import("@/components/Footer/Footer") ,
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/HomePage/index.scss">