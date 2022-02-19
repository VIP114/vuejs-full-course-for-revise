<template>
    <div>
        <h1 ref="user">user componet</h1>
    </div>
</template>
<script>
export default {
    name:"Child35",
    beforeUnmount() {
        console.warn("beforeUnmount",   this.$refs['user ']);
    },
    unmounted() {
        console.warn("unmounted",this.$refs['user ']);
    },
}
</script>