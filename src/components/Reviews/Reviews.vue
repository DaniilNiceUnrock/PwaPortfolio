<template >      
        <div class="Reviews" v-if="isMobile()" id="Reviews">
            <span class="Reviews_h2">
                Отзывы обо мне
            </span>
        
            <carousel :per-page="items"  :loop="true" :autoplay="false" :navigationEnabled="false" :navigate-to="someLocalProperty" :mouse-drag="true" v-if="Reviews.length" >
                <slide  v-for="review in Reviews" :key="review.id">
                    <div class="slide">
                        <div class="slide_author">
                            <!--<img :src="`https://webdev-api.loftschool.com/`+review.photo" alt="" class="slide_author__image" width="100px" height="100px">-->
                            <img src="../../assets/reviews/man.png" alt="" class="slide_author__image" width="100px" height="100px">
                            <p class="slide_author__name">{{review.name}}</p>
                        </div>
                        
                        <div class="slide_body">
                            <div class="slide_body__text">{{review.body}}</div>
                            <div class="slide_body__date">{{review.publishedAt}}</div>
                        </div>
                    </div>                 
                </slide>
            </carousel>
        </div>
</template>

<script>
import Intersect from 'vue-intersect'
import { Carousel, Slide } from 'vue-carousel';

export default {

    data: () => ({
        val: 0,
        visible: false,
        items: 0,
    }),
    methods: {
        isMobile() {
            if (screen.width <= 768) {
                this.items = 1;
                return true
            } else {
                this.items = 2;
                return true
            }
        },  
    },
    created: {

    },
    async mounted() {  
        this.$store.dispatch("getReviews");
    },
    computed: {
        Reviews() {
            return this.$store.state.Reviews
        }
    },
    components: {
        Carousel,
        Slide,
        Intersect ,
    }
}
</script>

<style scoped lang="scss" src='@/components/Reviews/_Reviews.scss'>

</style>