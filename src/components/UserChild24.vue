<template>
    <div>
        <h1>24. (2:45:29) Non props data in Vue </h1>
        <h3>vishv</h3>
        <h3 v-bind="$attrs">dhruv</h3>
        <h3>shivam</h3>
        <h1>{{item}}</h1>
    </div>
</template>
<script>
export default {
    name:'UserChild24',
    inheritAttrs:false,   // to hide non-props element in inspect element
        props:{
        item:String,
    }
}
</script>