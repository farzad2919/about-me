<template>
    <div class="left-card">
        <h2> مهارت های من </h2>
        <form>
            <div class="left-card__search" >
                <input type="text" placeholder ="جستجو"  v-model.trim="search" @keydown="searchSkill()" >
                <button @click.prevent="removeFilter" > حذف فیلتر </button>
            </div>

            <p> شما {{ countSkill }} مهارت دارید</p>
            <p> نمایش{{ searchSkill.length }} از {{ skillsList.length }} </p>

            <div class="left-card__skills-conteiner">
                <div v-for="skill in searchSkill" :key="skill.name" class="left-card__skills" >
                    <label> {{ skill.name }} </label>
                    <input type="checkbox" v-model="skill.selected" >
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            skillsList : [ 
                { name: "html" , selected : true } ,
                { name: "css" , selected : true } ,
                { name: "sass" , selected : true } ,
                { name: "vue" , selected : true } ,
                { name: "vueX" , selected : true } ,
                { name: "pinia" , selected : true } ,
                { name: "javaScript" , selected : true } ,
                { name: "C++" , selected : false } ,
                { name: "python" , selected : false } ,
                { name: "React" , selected : false } ,
                { name: "C#" , selected : false } ,
                { name: "Git" , selected : true } ,
            ],
            search : "" ,
            total : undefined ,
        }
    },
    computed: {
        searchSkill() {
            if (this.search == "") {
                return this.skillsList
            }else{
                let patt = new RegExp ( this.search , 'i' );
                return this.skillsList.filter ( skill => patt.test(skill.name) );
            }
        },
        countSkill(){
            return this.skillsList.filter( skill => skill.selected ).length
        },
        removeFilter(){
            this.search = ""
        }
    }
}
</script>

<style lang="scss" scoped>
.left-card{
    display: flex;
    flex-direction: column;
    background-color: gray;
    border-radius: 5px;
    padding: 20px;
    direction: rtl;
    width: 300px;
    height: 300px;

    h2{
        border-bottom: 1px solid black;
        margin: 0px;
        padding-bottom: 10px;
    }

    &__search {
        display: flex;
        flex-direction: row;
        gap: 3px;

        input {
            padding: 5px;
            margin: 5px 0px 0px;
            border: none;
            border-radius: 3px;
            background-color: lightgray;
            direction: ltr;
        
        }
        button {
            padding: 5px;
            margin: 5px 0px 0px;
            border: none;
            border-radius: 3px;
            background-color: lightgray;
            cursor: pointer;
            &:hover{
                background-color: red;
            }
        }
    }

    p{
        font-size: 12px;
        margin: 0px;
        margin-top: 5px;
        
    }

    &__skills-conteiner{
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    &__skills{
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        margin: 6px;
        border-radius: 4px;
        width: fit-content;
        height: fit-content;
        background-color: lightgray;

    }
}

</style>
