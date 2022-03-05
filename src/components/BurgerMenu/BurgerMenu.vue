<template>
    <component :is="currentMenu" :closeOnNavigation="true" right >
        <a active-class="active" href="#about">
            <span>About me</span> 
        </a>
        <a active-class="active" href="#MySkills">
            <span>Skills</span> 
        </a>
        <a active-class="active" href="#MyWorks">
            <span>Works</span> 
        </a>

        <a active-class="active" href="#Reviews">
            <span>Reviews</span> 
        </a>
        <a id="GitHub" href="https://github.com/DaniilNiceUnrock" target="_blank"> 
            <span>GitHub</span>  
        </a>
    </component>
</template>


<script>

export default ({
    scrollhrefhrefp: true,
        components: {
        Slide: () => import("@/components/BurgerMenu/Menu/slide.vue") 
    },
    data() {
        return {
            currentMenu: 'slide',
            scTimer: 0,
            scY: 0,
        }
    },
})
</script>
