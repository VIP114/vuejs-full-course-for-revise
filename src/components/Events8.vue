<template>
    <div>
        <button v-on:click='getData()'>click</button>
        <br/>
        <button v-on:dblclick='getData1("click1 is clicked")'>Dbl click</button>
        <h2 v-on:mousemove='getConsole()'>mouse over</h2>
        <h2>{{count}}</h2>
        <button v-on:click='increaseCount()'>Increase Count</button>
        <button v-on:click='decreseCount()'>Decrease Count</button>
    </div>
</template>
<script>
export default {
    name:'Events8',
    data() {
        return {
            count:0 
        }
    },
    methods: {
        getData(){
            alert("function called")
        },
        getData1(data){
            alert(data)
        },
        getConsole(){
            console.log('Event is fired');
        },
        increaseCount(){
            this.count = this.count + 1
        },
        decreseCount(){
            this.count = this.count - 1
        },
    },
    
}
</script>
<style scoped>
button{
    margin-bottom: 5px;
}
</style>