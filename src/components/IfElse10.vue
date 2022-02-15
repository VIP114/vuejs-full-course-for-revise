<template>
    <div>
        <h1>12. (1:21:00) if-else condtions in Vue js </h1>
        <h1 v-if="show">if condition is ture</h1>
        <h1 v-else>you are in else condition</h1>
        <button v-on:click="show=!show">click me</button>
    </div>
</template>
<script>
export default {
    name:'IfElse10',
    data() {
        return {
            show:true
            // show:false
        }
    },
}
</script>