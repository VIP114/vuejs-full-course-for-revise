<template>
    <div class="user">
        <!-- <h1>{{data}}</h1>     -->
        <h1>{{data.name}}</h1>    
        <h1>{{data.moblie}}</h1>    
        <!-- <h2>{{data}}</h2> -->
        <button v-on:click='getData(data.name)'>Click me</button>
    </div>
</template>
<script>
export default {
    name:'childUser15',
    props:{
        data:Object,
        getData:Function
    },
    

}
</script>
<style scoped>
.user{
    background-color: rgb(255, 166, 166);
    /* margin-bottom: 15px solid black; */
    padding: 17px;
    margin: 23px;
    border-bottom: 1px solid black;
}
</style>