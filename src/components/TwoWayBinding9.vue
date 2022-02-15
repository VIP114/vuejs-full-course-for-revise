<template>
    <div>
    <h1>9. (1:01:30) Vue js two way binding</h1>    
    <input type="text" v-model="data">
    <h2>{{data}}</h2>
    <br/>
    <input type="text" placeholder="enter email" v-model="email">
    <br/>
    <br/>
    <input type="text" placeholder="Enter password" v-model="password">
    <br/>
    <br/>
    <button type="button" v-on:click="getData()">Get Data</button>
    </div>
</template>
<script>
// import { warn } from '@vue/runtime-core'
export default {
    name:'TwoWayBinding9',
    data() {
        return {
            data: '',
            email:null,
            password:null,
        }
    },
    methods: {
        getData(){
            console.warn('Emails:-',this.email,'Password:-', this.password);
        }
    },
    
}
</script>