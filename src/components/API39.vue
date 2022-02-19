<template>
  <div>
    <h1>api page</h1>
    <p v-for="item in list" :key="item">
        {{ item }}
    </p>
    
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