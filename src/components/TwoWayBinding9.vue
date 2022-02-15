<template>
    <div>
    <h1>9. (1:01:30) Vue js two way binding</h1>    
    <input type="text" v-model="data">
    <h2>text:-{{data}}</h2>
    <h1>10. (1:06:00) get input field value in Vue js</h1>
    <input type="text" placeholder="enter email" v-model="email">
    <br/>
    <br/>
    <input type="text" placeholder="Enter password" v-model="password">
    <br/>
    <br/>
    <button type="button" v-on:click="getData()">Get Data</button>
    <h1>11. (1:12:09) Vue js get checkbox and radio button value </h1>
    <h3>Technologies</h3>
    <input type="checkbox" value="python" v-model="Technology" id="python" >
    <label for="python">python</label>
    <input type="checkbox" value="php" v-model="Technology" id="php" >
    <label for="php">php</label>
    <input type="checkbox" value="vue js" v-model="Technology" id="vue js" >
    <label for="vue js">vue js</label>
    <h4>Technologies:-{{Technology}}</h4>
    <br/>
    <br/>
    <h3>Profession</h3>
    <input type="radio" value="student" id="student" name="Profession" v-model="Profession">
    <label for="student">student</label>
    <input type="radio" value="teacher" id="teacher" name="Profession" v-model="Profession">
    <label for="teacher">teacher</label>
    <input type="radio" value="manager" id="manager" name="Profession" v-model="Profession">
    <label for="manager">manager</label>
    <h4>profession:-{{Profession}}</h4>
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
            Technology:[],
            Profession:null,
        }
    },
    methods: {
        getData(){
            console.warn('Emails:-',this.email,'Password:-', this.password);
        }
    },
    
}
</script>