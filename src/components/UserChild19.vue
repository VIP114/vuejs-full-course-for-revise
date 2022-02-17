<template>
    <div>
    <h1>User Child 19 components</h1>    
    <button v-on:click="getUser(userName)">send your name to parent</button>
    </div>
</template>
<script>
export default {
    name:'UserChild19',
    data() {
        return {
            userName:'vishv'
        }
    },
    props:{
        getUser:Function,
    }
}
</script>