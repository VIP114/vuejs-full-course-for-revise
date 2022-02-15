<template>
    <div>
    <h1>9. (1:01:30) Vue js two way binding</h1>    
    <input type="text" v-model="data">
    <h2>{{data}}</h2>
    </div>
</template>
<script>
export default {
    name:'TwoWayBinding9',
    data() {
        return {
            data: ''
        }
    },
    
}
</script>