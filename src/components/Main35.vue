<template>
    <div>
        <button v-on:click="show=!show">show</button>
    </div>
    <Child35 v-if="show" />
</template>
<script>
import Child35 from './Child35'
export default {
    name:"Main35",
    components:{
        Child35,
    },
    data() {
        return {
            show:true
        }
    },
}
</script>