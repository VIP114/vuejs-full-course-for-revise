<template>
  <div>
    <h1>41. (5:00:49) Send data in API with Post Method</h1>
    <input type="text" name="email" v-model="email" />
    <br />
    <br />
    <input type="text" name="password" v-model="password" />
    <br />
    <br />
    <button v-on:click="addUser()">Add new</button>
  </div>
</template>
<script>
import axios from "axios"
export default {
    name:"API41",
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        async addUser(){
           let result= await axios.post("http://localhost:8080/user",
           {
               email:this.email,
               password:this.password
               }) 
            console.warn("function called",this.email,"password:-",this.password);
            console.warn(result);
        }
    },
}
</script>
