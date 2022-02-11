<template >      
        <div class="Reviews" v-if="isMobile()" id="Reviews">
            <span class="Reviews_h2">
                Отзывы обо мне
            </span>
        
            <carousel :per-page="items"  :loop="true" :autoplay="false" :navigationEnabled="false" :navigate-to="someLocalProperty" :mouse-drag="true" v-if="Reviews.length" >
                <slide  v-for="review in Reviews" :key="review.id">
                    <div class="slide" v-if="review.status === true">
                        <div class="slide_author">
                            <!--<img :src="`https://webdev-api.loftschool.com/`+review.photo" alt="" class="slide_author__image" width="100px" height="100px">-->
                            <img v-lazy='img[0].src' alt="" class="slide_author__image" width="100px" height="100px">
                            <p class="slide_author__name">{{review.name}}</p>
                        </div>
                        
                        <div class="slide_body"> 
                            <div class="slide_body__text">{{review.body}}</div>
                            <div class="slide_body__date">{{review.publishedAt}}</div>
                        </div>
                       
                    </div>    
                                     
                </slide>

                <slide>
                    <div class="slide" >
                        <div class="slide_add" v-if="!reviewadd"> 
                            <p>Оставить отзыв</p>
                            <button class="slide_add_buttonnewrev" @click="AddRevievShowForm"></button>
                        </div>
                        <div class="slide_add_form" v-else>
                            <form @submit.prevent="AddReviev" class="addreview_form">
                                <p class="addreview_form__p">Новый отзыв</p>

                                <input v-model="name" type="text" name="name" id="name" placeholder="Ваше имя"  class="addreview_form__input" required/>     
                                <input v-model="body" type="text" name="body" id="body" placeholder="Отзыв" class="addreview_form__input" required/>
                                
                                <button  type="submit" value="Go" style="float: left" :class="{button_disabled : !isButtonDisabled}" class="addreview_form__button" >Добавить</button>
                                <button  @click="AddRevievShowForm" value="Back" style="float: left" class="addreview_form__button" >Отмена</button>

                            </form>

                        </div>
                    </div>    
                </slide>

            </carousel>
        </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from "vuex";

import Intersect from 'vue-intersect'
import { Carousel, Slide } from 'vue-carousel';

export default {

    data: () => ({
        val: 0,
        visible: false,
        reviewadd: false,
        items: 0,
        name: "",
        body: "",
        status: false,
        img:[
            {src: require('@/assets/reviews/man.png')} 
        ],
    }),
    methods: {
        ...mapActions({
            addNewReview: "addReview",           
        }),
        isMobile() {
            if (screen.width <= 768) {
                this.items = 1;
                return true
            } else {
                this.items = 2;
                return true
            }
        },  
        AddRevievShowForm () {
            this.reviewadd = !this.reviewadd;
        },
        async AddReviev() {
            let BodyReview = {
                name: this.name,
                body: this.body,
                status: this.status,
            };
            try {
                await this.addNewReview(BodyReview);
                this.name = '';
                this.body = '';
                
                 Swal.fire(
                    'Успешно! Спасибо за отзыв! ',
                    'Отзыв отправлен на модерацию!',
                    'success'
                ).then(() => {
                    this.reviewadd = !this.reviewadd;
                });

            } catch (error) {
                alert('Ошибка! ');
            }
        },
    },
    async mounted() {  
        this.$store.dispatch("getReviews");
    },
    computed: {
        Reviews() {
            return this.$store.state.Reviews
        },
        isButtonDisabled () {
            return this.name && this.body;
        },
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