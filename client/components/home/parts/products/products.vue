<template>
  <b-row class="products">
 
    <b-col v-for="(item, index) in storeCart.products" :key="index"> <Product :product="item" /> </b-col>
  
  </b-row>
</template>
<script>
import Product from "./product.vue";
import { useApiStore } from '@/client/store/api'

export default {
  components: {
    Product,
  },
 
  data() {
    return {
      products: [],
    };
  },
  setup(){
    const storeCart = useApiStore()
   
    return { storeCart }
  },
  methods:{
    async getData(){
       await this.storeCart.getProducts();
      
    }
  },
  created(){
    this.getData();
  },
};
</script>
                
<style lang="scss" scoped>
.products {
  margin-top: 75px;
}
</style>