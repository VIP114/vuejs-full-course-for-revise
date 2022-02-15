<template>
    <div>
        <h1>Parent user page</h1>
        <ul>
            <li v-for="item in users" :key="item">
    <childUser15 :data='item' :getData='getData'/>
                <!-- {{item}} -->
            </li>
        </ul>
    </div>
</template>
<script>
import  childUser15 from './childUser15'
export default {
    name:'ParentsUser15',
    components:{
        childUser15,
    },
    data() {
        return {
            users:[
                {
                    name:'vishv',
                    moblie:'95548523654',
                },
                {
                    name:'vishv2',
                    moblie:'95548523654',
                },
                {
                    name:'vishv3',
                    moblie:'95548523654',
                },
                {
                    name:'vishv4',
                    moblie:'95548523654',
                },
            ]
        }
    },
    methods: {
        getData(name){
            alert(name )
        }
    },
    
}
</script>
