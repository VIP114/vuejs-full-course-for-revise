<template>
    <div>
        <h1>26. (2:58:25) Watchers data in vue js 3</h1>        
        <h2>{{count}}</h2>
        <button v-on:click="count= count+1">+</button>
        <br/>
        <br/>
        <button v-on:click="count= count-1">-</button>
    </div>
</template>
<script>
export default {
    name:"Watchers26",
    data() {
        return {
            count:0
        }
    },
    watch: {
        count(val,previous){
            if (val > 5 && val>previous) {
                alert("stop")
                this.count = 0
            }
        },
    },
}
</script>