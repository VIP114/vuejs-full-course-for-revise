<template>
    <div>
        <H1>13. (1:25:11) For Loop in Vue js 3</H1>
        <ul>
            <li v-for="item in technology" :key="item">
                {{item}}
            </li>
        </ul>
        <br/>
        <br/>
        <ul>
            <li v-for="item in users" :key="item">
                {{item.name}} 
                <br/>
                {{item.email}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'ForLoop13',
    data() {
        return {
            technology:[
                'java',
                'python',
                'php',
                'reactjs',
                'vue js',
                'java script',
            ],
            users:[{
                name:'vishv',
                email:'patelvishv233@gmail.com'
            },
            {
                name:'vishv',
                email:'patelvishv233@gmail.com'
            },{
                name:'vishv',
                email:'patelvishv233@gmail.com'
            }
            ]
        }
    },
}
</script>