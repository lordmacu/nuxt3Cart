<template>
  <b-col lg="3" class="outer-logo">
    <b-row>
      <b-col lg="3" cols="2"> <Hamburger class="hamburger" /> </b-col>
      <b-col lg="9" cols="6" class="logo"> Chukwudi </b-col>
      <b-col cols="4" class="conter-mobile" @click="toggleCart()">
        <CartCounter />
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
import { useCartStore } from "@/client/store/cart";
import { useIndexStore } from "@/client/store/index";

import Hamburger from "../../images/hamburger.vue";
import CartCounter from "../../cart/parts/cartCounter.vue";
export default {
  components: {
    Hamburger,
    CartCounter,
  },
  data() {
    return {};
  },
  setup() {
    const storeCart = useCartStore();
    const storeIndex = useIndexStore();

    return { storeCart, storeIndex };
  },
  methods: {
    toggleCart() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        console.log("asdssssssssssss");
        if (this.storeCart.isCart) {
          this.storeCart.forceCart(false);
          this.storeCart.forceContent(true);
        } else {
          this.storeCart.forceCart(true);
          this.storeCart.forceContent(false);
        }
      }
    },
  },
};
</script>
        
<style lang="scss">
.outer-logo {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0;
  .hamburger {
    margin-top: 3px;
    width: 22px;
  }

  .logo {
    font-size: 23px;
    font-weight: 700;
    padding-left: 5px;
    line-height: 33px;
  }

  .conter-mobile {
    text-align: right;
    .counter-cart {
      float: right;
    }
  }
}
</style>