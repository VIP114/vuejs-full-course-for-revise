<template>
    <div>
        <h1>Parents components</h1>        
    </div>
    <Child14 :name='name' :Data ='user'  :getdata = 'getData'/>

</template>
<script>
import Child14 from './Child14'
export default {
    name:'Parents14',
    components:{
        Child14
    },
    data() {
        return {
            name : 'shivam',
            user:{
                name:'dhruv',
                email:'dhruv@gmail.com',
                }
        }
    },
    methods: {
        getData(){
            alert("function called ")
        }
    },
}
</script>