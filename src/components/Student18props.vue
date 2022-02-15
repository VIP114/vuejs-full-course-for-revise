<template>
    <div>
        <h1>student component </h1>
        <h2>student name is {{name}}</h2>
    </div>
</template>
<script>
export default {
    name:'Student18props',
    props:{
        name:String,
    }
}
</script>