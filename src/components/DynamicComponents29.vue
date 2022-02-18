<template>
    <div>
        <h2>29. (3:21:26) Dynamic components in vue js 3</h2>
    </div>
    <button @click="tab='Php29'">Php load</button>
    <button @click="tab='Java29'" >java load</button>
    <button @click="tab='Node29'" >Node load</button>
    <!-- <Php29/>
    <Java29/>
    <Node29/> -->
    <component :is="tab" />
</template>
<script>
import Php29 from './Php29'
import Java29 from './Java29'
import Node29 from './Node29'
export default {
    name:"DynamicComponents29",
    components:{
        Php29,
        Java29,
        Node29,
    },
    data() {
        return {
            tab:'Java29' 
        }
    },
}
</script>