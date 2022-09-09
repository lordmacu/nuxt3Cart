<template>
  <b-row class="shopping-list">
    <b-col>
      <Productitem v-for="(item, index) in storeCart.products" :key="index" :product="item" />
    </b-col>
  </b-row>
</template>
<script>
import Productitem from "./productItem.vue";
import { useCartStore } from '@/client/store/cart'

export default {
  components: {
    Productitem,
  },
  setup() {
    const storeCart = useCartStore()

    return { storeCart }
  },
  data() {
    return {

    };
  },
};
</script>
        
<style lang="scss">
.shopping-list {
  font-size: 10px;
  margin-top: 55px;
  max-height: 260px;
  overflow-y: auto;


}
</style>