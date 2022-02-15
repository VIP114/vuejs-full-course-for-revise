<template>
    <div>
    <h1>Home Component</h1>    
    <h3>Email:- {{email}}</h3>
    <h3>Moile no:-{{mobile}}</h3>
    <h3>Moile no:-{{mobile='8734934281'}}</h3>
    <h3>name: {{getName()}}</h3>
    <h3>Gender: {{getGender('male')}}</h3>
    <h3>name1: {{getName1( )}}</h3>
    <h3>name2: {{getName2('vipatel')}}</h3>
    <h3>Data: {{getData1()}}</h3>
    <h3>Data: {{getData1().name}}</h3>
    <h3>Data: {{getData1().email}}</h3>
    </div>
</template>
<script>
export default {
    name:'Home5',
    data() {
        return {
            email : 'vishv@gmail.com',
            mobile:'9558924322',
            getName(){
                return 'vishv'
            },
            getGender(x){
                return x
            }
        }
    },
    methods: {
        getName1(){
            return 'vip'
        },
        getName2(name){
            return name
        },
        getData1(){
            return{
                name:'dhruv',
                // email:'dhruv@gmail.com',
                email:this.email,
                mo:'8787678909'
            }
        }
    },
}
</script>
<style scoped>
h1{
    color: red;
}
</style>