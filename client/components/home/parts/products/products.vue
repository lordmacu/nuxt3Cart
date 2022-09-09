<template>
  <b-row class="products">

    <b-col v-for="(item, index) in storeApi.products" :key="index">
      <Product :product="item" />
    </b-col>
    <p class="no-products" v-if="storeApi.products.length === 0">😔 No hay productos en esta categoria... pero puedes probar en otra</p>

  </b-row>
</template>
<script>
import Product from "./product.vue";
import { useApiStore } from '@/client/store/api'
import { useIndexStore } from '@/client/store/index'

export default {
  components: {
    Product,
  },

  data() {
    return {
      products: [],
    };
  },
  setup() {
    const storeApi = useApiStore()
    const storeIndex = useIndexStore()

    return { storeApi, storeIndex }
  },
  methods: {
    async getData() {
      this.storeIndex.setLoading(true);

      await this.storeApi.getProducts();

      this.storeIndex.setLoading(false);

    }
  },
  created() {
    this.getData();

  },
};
</script>
                
<style lang="scss" scoped>
.products {
  margin-top: 75px;
}
</style>