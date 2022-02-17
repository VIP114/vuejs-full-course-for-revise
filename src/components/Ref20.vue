<template>
    <div>
        <h1>20. (2:19:06) Ref in Vue js </h1>
        <input type="text" ref="input"/>
        <button v-on:click="getData"> Click me</button>
        <br/>
        <br/>
        <input type="text" ref="input1"/>
        <button v-on:click="getData1"> Enter</button>
    </div>
</template>
<script>
// import { warn } from '@vue/runtime-core'
export default {
    name:'Ref20',
    data() {
        return {
            
        }
    },
    methods: {
        getData(){
            this.$refs.input.focus()
            this.$refs.input.value="amazing  "
            this.$refs.input.style.color="red"
        },
        getData1(){
            console.warn(this.$refs.input1.value);
            alert(this.$refs.input1.value)

        }
    },
}
</script>