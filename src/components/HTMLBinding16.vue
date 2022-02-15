<template>
    <div>
        <h1>16. (1:50:55)  Vue js HTML binding</h1>
        <h1>{{text}}</h1>
        <!-- <h1>{{tag}}</h1> -->
        <div v-html="tag + tag2 + tag3"></div>
        <!-- <div v-html="tag2"></div> -->
    </div>
</template>
<script>
export default {
    name:'HTMLBinding16',
    data() {
        return {
            text:'vishv patel',
            tag:'<h2> HTML TAG vishv patel</h2>',
            tag2:'<h2> HTML TAG2 vishv patel</h2>',
            tag3:'<h2> HTML TAG3 vishv patel</h2>',
        }
    },
}
</script>