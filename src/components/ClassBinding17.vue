<template>
    <div>
        <h1>17. (1:56:04) Class Binding in Vue js </h1>        
        <h2 class="staticClass" :class="adjustStyple">  Class Binding components</h2>
        <button v-on:click='colorfull=!colorfull'>Apply Style</button>
    </div>
</template>
<script>
export default {
    name:'ClassBinding17',
    data() {
        return {
            // colorfull:true
            colorfull:false
        }
    },
    computed: {
        adjustStyple(){
            return{
                green:this.colorfull ,
                err:true,
                other:true
            }
        }
    },

}
</script>
<style scoped>
.green{
    background-color: green;
    width: 370px;
    padding: 10px;
    color: white ;
}
.staticClass{
    color:blue;
}
.err{
    color: red;
}
.other{
    font-size: 70px;
}
</style>