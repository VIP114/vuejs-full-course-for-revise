<template>
    <div>
        <h1>34. (3:55:14) Before Update and Updated in vue js 3</h1>
        <h2 ref="count">{{counter}}</h2>
        <button v-on:click="counter= counter +1">update</button>
    </div>
</template>
<script>
export default {
    name:"Update34",
    data() {
        return {
            counter:0,
        }
    },
    beforeUpdate() {
        console.log("beforeUpdate",this.counter);
        console.log("before Update",this.$refs['count'].textContent);
    },
    updated() {
        console.log("updated",this.counter);
        console.log("Updated dafd",this.$refs['count'].textContent);

    },
}
</script>