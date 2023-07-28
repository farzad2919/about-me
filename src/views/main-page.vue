<template>
    <main class="main">
        <div class="main__conteiner">
            <div class="main__right">
                <rightCard @pageName="currentPage($event)" :effectivePage="effectivePage" ></rightCard>
            </div>

            <div v-if="effectivePage==='aboutMe' " class="main__left">
                <aboutMe></aboutMe>
            </div>

            <div v-if="effectivePage==='mySkills' " class="main__left">
                <mySkills></mySkills>
            </div>
        </div>

    </main>
</template>

<script>
import rightCard from "../components/right-card/right-card.vue";
import aboutMe from "../components/left-card/about-me.vue";
import mySkills from "../components/left-card/my-skills.vue";
export default {
    components: { rightCard, aboutMe, mySkills, aboutMe },
    data(){
        return{
            effectivePage : "aboutMe"
        }
    },
    methods: {
        currentPage(page){
            if ( page === "aboutMe" ) {
                this.effectivePage = "aboutMe"
            }else {
                this.effectivePage = "mySkills"
            }
        },

    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row ;
    align-items: center ;
    justify-content: center ;
    background-image: url("../assets/images/Rectangle\ 15.png") ;
    background-repeat: no-repeat ; 
    background-position: center center;
    background-size: cover;
   
    &__conteiner{
        width: fit-content;
        direction: rtl;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 15px;
        gap: 15px;
        border-radius: 5px;
        background-color: rgba($color: #000000, $alpha: 0.4);
        
    }

    &__right{
        align-self: center;
    }

    &__left{
        align-self: center;
    }
}
</style>
