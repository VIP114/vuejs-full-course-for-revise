<template>
    <div>
    <h1>33. (3:52:36) Before mount and mounted in vue js 3</h1>    
    <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {
    name:"BeforeMount33",
    data() {
        return {
            name:'anil',
        }
    },
    beforeMount() {
        console.warn("beforeMount",this.$el);
    },
    mounted() {
        console.warn("mouted",this.$el);
    },
}
</script>