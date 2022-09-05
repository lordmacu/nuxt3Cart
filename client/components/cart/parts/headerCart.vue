<template>
  <div class="header-cart">
    <b-row align-h="end" class="inner">
      <b-col
        cols="2"
        class="d-flex align-items-center justify-content-center avatar"
      >
        <Avatar class="avatar-icon" />
      </b-col>
      <b-col cols="3" class="no-padding d-flex justify-content-end">
        <CartCounter @click="toggleCart" />
      </b-col>
    </b-row>

    <div class="title">
      <img class="glasses" src="/client/assets/emoticon-glasses.png" />
      <h3>My Order</h3>
    </div>
  </div>
</template>
<script>
import { useCartStore } from "@/client/store/cart";
import { useIndexStore } from "@/client/store/index";

import CartCounter from "./cartCounter.vue";
import Avatar from "../../images/avatar.vue";

export default {
  components: { CartCounter, Avatar },
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
.header-cart {
  height: 23vh;
  padding-top: 30px;

  .inner {
    margin-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  .title {
    width: 80px;
    position: relative;
    h3 {
      margin-top: 35px;
      font-size: 25px;
      font-weight: 700;
    }
    .glasses {
      position: absolute;
      width: 25px;
      right: 10px;
    }
  }
}
</style>