<template>
    <transition name="fade">
        <div id="pagetop" class="fixed left-0 bottom-0" style="position: fixed;cursor: pointer;right: 1rem;bottom: 0;" v-show="scY > 800" @click="toTop">
            <svg class="pagetop_top" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="#4a5568"
                stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </div>
    </transition>  
</template>

<script>
export default {
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    }
}
</script>

<style scoped lang="scss">

.pagetop_top:hover {
  transition: all .5s ease;
  stroke: $white;
}

</style>