<template>
    <div class="left-card">
        <h2> درباره من </h2>
        <p> من فرزاد میرحسینی هستم متولد 1376 </p>


    </div>
</template>

<script>
export default {
    
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
    p{
        font-size: 12px;
    }
}

</style>
