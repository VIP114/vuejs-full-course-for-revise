<template>
    <div>
        <UserChild19 :getUser=getUserName />        
        User name :{{name}}
    </div>
</template>
<script>
import UserChild19 from './UserChild19'
export default {
    name:'Main19',
    components:{
        UserChild19,
    },
    data() {
        return {
            name:''
        }
    },
    methods: {
        getUserName(name){
            alert(name)
            this.name=name 

        }
    },
}
</script>