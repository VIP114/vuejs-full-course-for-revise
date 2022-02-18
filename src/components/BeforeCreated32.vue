<template>
    <div>
        <h1>32. (3:45:42) Before created and created life cycle methods</h1>
        <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {
    name:"BeforeCreated32",
    data() {
        console.warn("data is created");
            console.log(this.name);
        return {    
            name:'anil',
            
        }
        
    },
    methods: {
        
    },
    beforeCreate() {
        this.name = 'vip'
        console.log(this.name);
        alert("before creaated")
    },
    created() {
        this.name= 'vishv'
        console.log(this.name);
        alert("created ")
    },
}
</script>