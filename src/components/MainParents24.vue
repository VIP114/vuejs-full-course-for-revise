<template>
    <div>
        <h1>Non props data</h1>
    </div>
    <UserChild24 item="some items" name="raj" />
</template>
<script>
import UserChild24 from './UserChild24'
export default {
    name:"MainParents24",
    components:{
        UserChild24,
    }
}
</script>