<template >


    <intersect @enter="visible = true" @leave="visible = true">
        <div class="container_skills" ref="MySkills" id="123"  v-if="MySkills.length">
            <h2 class="MySkills_head">Мои навыки</h2>
            <div class="skills" >
                <div class="skills_img"> 
                    <img class="skills_img__img" v-lazy='img[0].src' alt="Мои навыки">
                </div>
                <div class="skills_block" >
                    <div class="skills_myskills" v-for="skill in MySkills" :key="skill._id" >
                        <span class="skills_myskills__header"> {{skill.name}} </span>
                        <div class="skills_myskills__skill">
                            <div class="skills_myskills__circle" v-for="skill2 in skill.Skillsbodies" :key="skill2._id">
                                <div class="skills_myskills_skill__items">
                                    <vue-ellipse-progress 
                                        color="#1565c0"
                                        :size="140"
                                        mode="out-over" 
                                        :legend="true"
                                        :progress = skill2.percent 
                                        v-if="visible"
                                    >
                                    <span class="present">{{skill2.name}}  <br> {{skill2.percent}}% <br> </span>
                                    </vue-ellipse-progress>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
        <div v-else> <img src="@/assets/Spin.gif" alt="Прелоэдер"></div>
    </intersect>

</template>

<script>
import Intersect from 'vue-intersect';
export default {
    data: () => ({
        img:[
            {
                src: require('@/assets/bg/back2.webp')
            }
        ],
        val: 0,
        visible: false,
    }),
    mounted() {
        this.$store.dispatch("getMySkills");
    },
    computed: {
        MySkills() {
           return this.$store.state.MySkills;
        }
    },
    components: {
        Intersect ,
    },    
}
</script>

<style scoped lang="scss"  src='@/components/MySkills/_MySkills.scss'>

</style>