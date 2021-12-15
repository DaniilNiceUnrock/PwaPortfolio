<template>
    <intersect @enter="visible = true" @leave="visible = true" >
        <div class="main_SliderWorks" id="MyWorks">
            <h2 class="main_SliderWorks_head"> Мои работы</h2>
            <div class="containertest" v-if="visible" >
                <div v-for="slide in slides" 
                
                    :key="slide.id"  
                    class="slide" 
                    :class="{ active: activeItem === slide.id}" 
                    :id="slide.id"  
                    v-on:click="activeItem = slide.id; scrollToMe(slide.id)"
                    :style="'background-image: url('+slide.image+')'" >
                
                    <a :href="slide.href" target="_blank" :style="'color: '+slide.color+''"> {{slide.title}} </a>
                </div>
            </div>
        </div>
    </intersect>
</template>


<script>
    import Intersect from 'vue-intersect'
    export default {
        data() {
            return {
                visible: false,
                activeItem: 3,
                slides: [
                    {id: 1, title:'Доставка цветов', color: '#ED9D22', href: 'https://www.dostavka-tsvetov.com/', image: require('@/assets/MyWorks/dc.webp')}, 
                    {id: 2, title:'Дары Ямала', color: '#000000', href: 'http://dari-yamala.cw97450.tmweb.ru/',  image: require('@/assets/MyWorks/dy.webp')},
                    {id: 3, title:'Портфолио', color: '#414C63', href: 'https://my.ponomarevdaniil.fun/',  image: require('@/assets/MyWorks/pf.webp')},
                    {id: 4, title:'Экодом24', color: '#8EC90D', href: 'http://ek24.cw97450.tmweb.ru/',  image: require('@/assets/MyWorks/ek.webp')},
                    {id: 5, title:'Black8', color: '#009788', href: 'https://black8.ru/',  image: require('@/assets/MyWorks/b8.webp')},
                    {id: 6, title:'Фиксиома', color: '#33383E', href: 'https://fixioma.ru/',  image: require('@/assets/MyWorks/fx.webp')},
                ],
            };
        },
        components: {
            Intersect
        },
        methods: {
            scrollToMe(id) {  
                console.log(id);
                if(id) {
                    setTimeout(() => {
                        console.log('скролл');
                        document.getElementById(id).scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
                    },500);
                }
            },
        }
        
    }
</script>

<style scoped lang="scss">
     @import "./_SliderWorks.scss";
</style>