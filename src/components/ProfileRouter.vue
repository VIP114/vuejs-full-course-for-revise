<template>
    <div>
        <h2>{{profile}}Profile router page</h2>
    </div>
</template> 
<script>
import {useRoute} from 'vue-router'
export default {
    name:"ProfileRouter",
    data() {
        return {
            profile:'',
        }
    },
    mounted() {
        const route = useRoute()
        console.warn("route",route.params.name);
        this.profile=route.params.name
    },
}
</script>