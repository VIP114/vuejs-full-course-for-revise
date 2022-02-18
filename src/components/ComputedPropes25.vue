<template>
    <div>
        <h1>25. (2:52:49) Computed Props in Vue js </h1>
        <h3>Computed property : {{doller}}</h3>
        <h3>{{(doller * rupees)-discount}}</h3>
        <h1> With computed property</h1>
        <h2>{{getResult}}</h2>
        <h1>With methods property</h1>
        <h2>{{getData()}}</h2>
    </div>
</template>
<script>
export default {
    name:"ComputedPropes25",
    data() {
        return {
            doller:100,
            rupees:80,
            discount:10, 
        }
    },
    computed: {
        getResult(){
            return (this.doller * this.rupees)-this.discount
        }
    },
    methods: {
        getData(){
            return (this.doller * this.rupees)-this.discount
        }
    },
}
</script>