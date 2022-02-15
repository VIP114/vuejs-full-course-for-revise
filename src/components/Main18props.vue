<template>
    <div>
        <h1>18. (2:05:19) Props in Vue js </h1>        
    </div>
    <Student18props :name='name'/>
    <!-- <Student18props name='vishv'/> -->
    <Teacher18propes name='palaksir'/>
</template>
<script>
import Student18props from './Student18props'
import Teacher18propes from './Teacher18propes'
export default {
    name:'Main18props',
    data() {
        return {
            name:'dhruv',
        }
    },
    components:{
        Student18props,
        Teacher18propes,
    }

}
</script>