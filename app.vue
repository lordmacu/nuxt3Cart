<template>
  <div class="container-xxl">
    <b-row>
      <b-col lg="9" class="content" v-if="storeCart.isContent" >
        <Menu />   
        <Home/>
      </b-col>
      <Cart v-if="storeCart.isCart" />
      <Loading v-if="storeIndex.isLoading"/>
    </b-row>
  </div>
</template>

<script>
 
import Cart from "./client/components/cart/cart.vue";
import Menu from "./client/components/menu/menu.vue";
import Home from "./client/components/home/home.vue";
import Loading from "./client/components/helpers/loading.vue";
import { useCartStore } from '@/client/store/cart'
import { useIndexStore } from '@/client/store/index'

export default {
  components: {
    Menu,
    Cart,
    Home,
    Loading
  },
  setup(){
    const storeCart = useCartStore()
    const storeIndex = useIndexStore()
    return { storeCart,storeIndex }
  },
  mounted(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) { 
      this.storeCart.forceCart(false);
      this.storeCart.forceContent(true);

    }else{
      this.storeCart.forceCart(true);
      this.storeCart.forceContent(true);
    }
    
    this.storeCart.checkCart(isMobile);

  },
};
</script>


<style lang="scss">

.no-padding-right {
  padding-right: 0px;
}

.content {
  padding-left: 130px;
  padding-top: 35px;
  padding-right: 90px;
}
</style>
  