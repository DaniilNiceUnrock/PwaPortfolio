<template>
      <div data-aos-duration="1600" data-aos="zoom-in" >
        <h2> Мои работы </h2>
          <SliderWorks/>
      </div>
</template>

<script>

export default {
    components: {
      SliderWorks: () => import("@/components/SliderWorks/SliderWorks.vue") ,
      
    },

}
</script>