<template>
  <b-row class="product-item">
    <b-col lg="4" cols="4">
      <img class="image" :src="product.p1_image" />
    </b-col>
    <b-col lg="5"  cols="6" class="description  justify-content-center align-self-center">
      <b-row class="">
        <b-col
          lg="4"
          cols="3"
          class="counter justify-content-center align-self-center"
        >
          <span class="quantity">1</span>
          <span class="multiplier">x</span></b-col
        >
        <b-col lg="8" cols="9" class="name"><span>{{product.p1_name}}</span></b-col>
      </b-row>
    </b-col>
    <b-col lg="3"  cols="2" class="justify-content-center align-self-center price">
      <span>${{product.p1_price}}</span>
    </b-col>
  </b-row>
</template>
<script>
export default {
  components: {},
  props: {
    product: {
      default: {},
      type: Object,
    },
    
  },
  data() {
    return {};
  },
   
};
</script>
          
  <style lang="scss">
.product-item {
    margin-bottom: 30px;
   .image {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    object-fit: cover;
   
  }

  .description {
    .multiplier {
      margin-left: 6px;
      font-weight: 800;
    }
    .quantity {
      margin-left: 5px;
      font-weight: 800;
    }

    .counter {
      padding: 0px;
      font-weight: 700;
      margin-right: -3px;
    }
    .name {
      padding: 0px;
      line-height: 12px;
      font-weight: 800;
    }
  }
  .price {
    text-align: right;
    span {
      color: #9d9d9c;
      font-weight: 600;
    }
  }
}
</style>