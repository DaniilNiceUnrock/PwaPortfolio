<template >

    <intersect @enter="visible = true" @leave="visible = true">
        <div class="container_skills" id="MySkills">
            <h2 class="MySkills_head">Мои навыки</h2>
            {{MySkills}}
            {{skills}}
            <div class="skills" >
                <div class="skills_img">
                    <img class="skills_img__img" src="../../assets/bg/back2.webp" alt="">
                </div>
                <div class="skills_block" v-if="MySkills.length">
                    <div class="skills_myskills" v-for="skill in MySkills" :key="skill._id" >
                        <span class="skills_myskills__header"> {{skill.name}} </span>
                        <div class="skills_myskills__skill">
                            <div class="skills_myskills__circle" v-for="skill2 in category.skills2" :key="skill2._id">
                                <div class="skills_myskills_skill__items">
                                        <vue-ellipse-progress 
                                            color="#1565c0"
                                            :size="140"
                                            mode="out-over" 
                                            :legend="true"
                                            :progress = skill.percent 
                                            v-if="visible"
                                        >
                                        <span class="present">{{skill.name}}  <br> {{skill.percent}}% <br> </span>
                                        </vue-ellipse-progress>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div v-else> loading...</div>

            </div>
            
        
        </div>
    </intersect>
</template>

<script>
import Intersect from 'vue-intersect';
import axios from 'axios';
axios.defaults.baseURL  = "https://webdev-api.loftschool.com";
export default {
    data: () => ({
        val: 0,
        visible: false,
         skills: [],
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
    async created() {
        const { data } = await axios.get("/categories/1");
        this.skills = data;
    }
}
</script>

<style scoped lang="scss"  src='@/components/MySkills/_MySkills.scss'>

</style>