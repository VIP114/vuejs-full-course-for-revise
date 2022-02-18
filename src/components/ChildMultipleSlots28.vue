<template>
    <div class="cart">
        <slot name="header"><h1>Header defalut data</h1></slot>
        <slot name="main"><h1>main defalut data</h1></slot>
        <slot name="footer"><h1>footer defalut data</h1></slot>
    </div>
</template>
<script>
export default {
    name:"ChildMultipleSlots28",
}
</script>
<style scoped>
.cart{
    width: 130px;
    border: 1px solid blue;
    padding: 20px;
    margin: 20px;
    text-align: center;
    background-color: rgb(204, 176, 231);
}
</style>