<template>
  <b-row class="shopping-list">
    <b-col>
      <Productitem v-for="(item, index) in items" :key="index" />
    </b-col>
  </b-row>
</template>
    <script>
import Productitem from "./productItem.vue";

export default {
  components: {
    Productitem,
  },
  data() {
    return {
        items:[1,2,3,4]
    };
  },
};
</script>
        
<style lang="scss">
.shopping-list {
  font-size: 10px;
  margin-top: 55px;
 
 
}
</style>