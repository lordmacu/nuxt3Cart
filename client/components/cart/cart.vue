<template>
  <b-col lg="3" class="order-container">
    <HeaderCart />
    <div class="body">
      <Address />
      <ShoppingList />
    </div>
    <div class="footer">
      <Price />
      <b-row class="checkout-actions">
        <b-col lg="5" cols="5" class="counter justify-content-center align-self-center">
          <p>Persons</p>

          <div class="d-flex actions">
            <button><Minus class="minus" /></button>
            <span class="quantity">0</span>
            <button><Plus class="plus" /></button>
          </div>
        </b-col>
        <b-col lg="7" cols="7" class="checkout-outer">
          <button class="d-flex checkout">Checkout <ArrowRight /></button>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>
<script>
import Address from "./parts/address.vue";
import ShoppingList from "./parts/shoppingList/shoppingList.vue";
import HeaderCart from "./parts/headerCart.vue";
import Price from "./parts/price.vue";
import ArrowRight from "../images/arrowRight.vue";
import Minus from "../images/minus.vue";
import Plus from "../images/plus.vue";
 
export default {
  components: {
    Address,
    ShoppingList,
    HeaderCart,
    Price,
    ArrowRight,
    Minus,
    Plus,
  },
  data() {
    return {
        
    };
  }
 
};
</script>
    
<style lang="scss">
.order-container {
  background-color: #fafbf8;
  border-left: 1px solid #f3f3f3;
  height: 100vh;
  padding-left: 45px;
  position: fixed;
  right: 0px;

  .avatar {
    padding-right: 0px;
  }

 

  .body {
    margin-right: 30px;
    padding-top: 30px;
    height: 53vh;
  }
  .footer {
    height: 23vh;
  }
}

.checkout-actions {
  margin-top: 30px;
  .checkout-outer {
    padding-right: 0px;
    padding-left: 20px;

    .checkout {
      width: 100%;
      background-color: #fcd661;
      border: 0;
      border-radius: 20px 0px 0px 20px;
      padding-bottom: 25px;
      padding-top: 25px;
      padding-left: 30px;
      font-size: 11px;
      font-weight: 700;
      line-height: 2;
      svg {
        width: 10px;
        position: relative;
        left: 17px;
         
      }
    }
  }

  .counter {
    p {
      font-size: 11px;
      margin-bottom: 10px;
      font-weight: 700;
    }
    button {
      border: 0;
      width: 30px;
      background-color: white;
      border-radius: 20px;
      
    }

    .actions {
      width: 90px;
      border-radius: 20px;
      background-color: white;
      border: 1px solid #e3e3e1;
      span {
        width: 30px;
        text-align: center;
        font-size: 30px;
        line-height: 21px;
      }

      .quantity {
        font-size: 17px;
        font-weight: 600;
        line-height: 29px;
      }
      .minus {
        width: 10px;
        height: 10px;
        position: relative;
        top: -2px;
      }
      .plus {
        width: 10px;
        height: 10px;
        position: relative;
        top: -2px;
      }
    }
  }
}
</style>