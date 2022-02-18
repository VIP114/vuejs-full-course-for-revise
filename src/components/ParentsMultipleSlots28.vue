<template>
  <div>
    <h1>28. (3:11:50) Multiple slots with name in Vue js 3</h1>
  </div>
  <ChildMultipleSlots28>
    <template v-slot:header>
      <h1>vishv</h1>
    </template>
    <template v-slot:main>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci?</p>
    </template>
    <template v-slot:footer>
      <button>buy</button>
    </template>
  </ChildMultipleSlots28>
    
  <ChildMultipleSlots28>
    <template v-slot:header>
      <h1>vishv</h1>
    </template>
    <template v-slot:main>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci?</p>
    </template>
    <template v-slot:footer>
      <button>buy</button>
    </template>
  </ChildMultipleSlots28>
</template>
<script>
import ChildMultipleSlots28 from "./ChildMultipleSlots28";
export default {
  name: "ParentsMultipleSlots28",
  components: {
    ChildMultipleSlots28,
  },
};
</script>