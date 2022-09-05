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

export default {
  components: {
    Banner,
    Categories,
    Filter,
    Products,
  },
  data() {
    return {};
  },
};
</script>
            
<style lang="scss">

</style>