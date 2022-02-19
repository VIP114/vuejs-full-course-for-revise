<template>
  <div>
    <h1>api page</h1>
    <!-- <p v-for="item in list" :key="item">
        {{ item }}
    </p> -->
    <div>
      <ul class="item" v-for="item in list" :key="item">
        <li>{{ item.id }}</li>
        <li>{{ item.userId }}</li>
        <li>{{ item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "API39",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.warn(result.data);
    this.list = result.data;
  },
};
</script>
<style scoped>
.item li{
    display: inline-block;
    border: 2px solid red;
    width: 400px;
    pad: 10px;
    display: flex;

}
</style>