<template>
  <b-row>
    <b-col>
      <Banner />
      <Filter />
      <Categories />
      <Products />
    </b-col>
  </b-row>
</template>
  <script>
import Banner from "./parts/banner.vue";
import Categories from "./parts/categories.vue";
import Filter from "./parts/filter.vue";
import Products from "./parts/products/products.vue";
import { useCartStore } from '@/client/store/cart'
import { useIndexStore } from '@/client/store/index'

export default {
  components: {
    Banner,
    Categories,
    Filter,
    Products,
  },
  setup(){
    const storeCart = useCartStore()
    const storeIndex = useIndexStore()
     
    return { storeCart, storeIndex }
  },
  methods:{ 
    async getDataCart(){
      const token_cart=await this.storeCart.getCartId();

      this.storeIndex.setLoading(true);

      await this.storeCart.getCart(token_cart);

      this.storeIndex.setLoading(false);

    }
  },
  created(){
    this.getDataCart();
  }
};
</script>
            
<style lang="scss">

</style>