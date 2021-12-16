<template>
  <div>
    <Header/>
      <div class="AdminHomePage">
        <AdminBodyHome/>
      </div>
    <Footer/>
  </div>
</template>

<script>


export default {
 data() {
   return {
     
   };
 },
  name: 'Admin',
  components: {
    Header: () => import("@/admin/components/Header/Header") ,
    
    AdminBodyHome: () => import("@/admin/components/AdminHome/AdminBodyHome") ,

    Footer: () => import("@/components/Footer/Footer") ,
  }
}
</script>

<style scoped lang="scss" src="@/admin/assets/scss/Home/index.scss">