<template>
    <div>
        <h1>Child components</h1>
        <h2>My name is {{name}}</h2>
        <h2>{{Data}}</h2>
        <button v-on:click='getdata()'>Click me</button>
    </div>
</template>
<script>
export default {
    name:'Child14',
    props:{
        name:String,
        Data:Object,
        getdata:Function, 
    },
    
}
</script>