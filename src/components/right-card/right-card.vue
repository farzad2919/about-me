<template>
    <div class="right-card">

        <img src="../../assets/logo.svg" alt="logo" >
        <div class="right-card__links">
            <button @click="changePage('aboutMe')"  class="right-card__btn"  :class="{'right-card__active-btn' :effectivePage=='aboutMe'}" > درباره من </button>
            <button @click="changePage('mySkills')"  class="right-card__btn" :class="{'right-card__active-btn' :effectivePage=='mySkills'}" > مهارت های من </button>
        </div>
    </div>
</template>

<script>
export default {
    props:['effectivePage'],
    methods:{
        changePage( pageName ){
            this.$emit( 'pageName' , pageName )
        }
    }
}
</script>

<style lang="scss" scoped>
.right-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: gray;
    border-radius: 5px;
    padding: 20px;
    height: 300px;

    img{
        block-size: 100px;
    }
    &__links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    &__btn{
        text-decoration: none;
        color: black;
        background-color: transparent;
        border: none;
        &:hover{
            cursor: pointer;
        }
    }   
    &__active-btn{
        background-color: green;
        color: #fff;
        font-size: 18px;
    }
}

</style>
