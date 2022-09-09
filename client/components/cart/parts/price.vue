<template>
  <b-row class="total-price">
    <b-col class="justify-content-center align-self-center">
      <span class="total">Total:</span>
    </b-col>
    <b-col class="justify-content-center align-self-center outer-price">
      <span class="price">${{storeCart.total}}</span>
     
    </b-col>
  </b-row>
</template>
<script>
import { useCartStore } from '@/client/store/cart'

export default {
  components: {},
  data() {
    return {
      total: 0
    };
  },
  setup() {
    const storeCart = useCartStore()



    watch(
      () => storeCart.products,
      (newValue, oldValue) => {


        const total= newValue.reduce((n, product) => {

          return n + parseFloat(product.p1_price);
        }, 0)

        storeCart.setTotal(total.toFixed(2))

      },
      { deep: true }
    )

    return { storeCart }
  },
};
</script>
            
<style lang="scss">
.total-price {
  position: relative;

  &::after {
    content: " ";
    height: 1px;
    width: 100%;
    background-color: #d7d8d6;
    margin-top: 20px;
    margin-left: 12px;
  }

  .total {
    font-size: 18px;
    font-weight: 600;
  }

  .price {
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
  }
}
</style>