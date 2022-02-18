<template>
  <div>
    <h1>30. (3:29:24) TelePort components in vue js 3</h1>
  </div>
  <teleport to='#footer' >
  <Footer30 />
  <h2>yes </h2>
  </teleport>
</template>
<script>
import Footer30 from "./Footer30";
export default {
  name: "Main30",
  components: {
    Footer30,
  },
};
</script>