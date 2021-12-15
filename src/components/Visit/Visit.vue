<template>
    <div class="visit">

        <BurgerMenu/>
        <div class="preview">
            <!--<div class="preview_image">
               
            </div>-->
            <div class="preview_info">
                <div class="preview_info_text">
                    <p class="preview_info_text__name">Пономарев Даниил</p>
                    <p class="preview_info_text__who">Web разработчик</p>
                </div>
                <div class="preview_info_social">
                            <a class="header_socials__a" href="https://t.me/DaniiPonomarev" target="_blank"> 
                                <img class="header_socials__img" src="../../assets/socials/telegram.webp" width="40px" height="40px" alt="">
                            </a>
                            <a class="header_socials__a" href="mailto:daniilponomarevinfo@gmail.com" target="_blank"> 
                                <img class="header_socials__img" src="../../assets/socials/mail.webp" width="40px" height="40px" alt="">
                            </a>
                            <a class="header_socials__a" href="https://www.instagram.com/" target="_blank"> 
                                <img class="header_socials__img" src="../../assets/socials/instagram.webp" width="40px" height="40px" alt="">
                            </a>
                </div>
                <div class="preview_info_request">
                    <router-link  to="/request"> Оставить заявку</router-link>
                </div>
        
            </div>
            <div class="header_toMain" @click="toMain"> 
                <img class="header_socials__img" src="../../assets/arrow_down.webp" alt="" width="40px" height="40px">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    components: {
        BurgerMenu: () => import("@/components/BurgerMenu/BurgerMenu.vue") ,
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
        toMain: function () {
                document.getElementById('MySkills').scrollIntoView({
                top: 100,
                behavior: "smooth"
            });
        },
    }
}
</script>

<style scoped lang="scss">
  @import "./Visit.scss";
</style>