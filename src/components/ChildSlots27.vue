<template>
    <div>
        <!-- <h1>27. (3:04:35) Slots in Vue js 3</h1> -->
        <h3>{{name}}</h3>
        <!-- <slot><h1>Defalut value called</h1> </slot> -->
        <slot></slot>

    </div>
</template>
<script>
export default {
    name:"ChildSlots27",
    props:{
        name:String,
    }
}
</script>