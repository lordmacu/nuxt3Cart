<template>
  <div class="product" @click="addToCart">
    <div class="head">
      <img class="image" :src="product.image" />
      <div class="time">{{product.time}}</div>
    </div>
    <div class="body">
      <div class="title">
        <span> {{product.name}} </span>
        
      </div>

      <div class="properties d-flex">
        <div class="rating d-flex"><Star class="star" /><span>{{product.qualification}} </span></div>
        <div>{{product.category.name}} </div>
        <div>$ {{product.price}} </div>
      </div>
    </div>
  </div>
</template>
<script>
import Star from "../../../images/star.vue";
import { useCartStore } from '@/client/store/cart'
import { useIndexStore } from '@/client/store/index'

export default {
  components: {
    Star,
  },
  props: {
    product: {
      default: {},
      type: Object,
    },
    
  },
  data() {
    return {
      item:{}
    };
  },
  setup(){
    const storeCart = useCartStore()
    const storeIndex = useIndexStore()

    return { storeCart, storeIndex }
  },
  methods:{
    async addToCart(){
      this.storeIndex.setLoading(true);
      
      await this.storeCart.addCart(this.product.id);
      await this.storeCart.getCart();
      this.storeIndex.setLoading(false);

    }
  }
 
};
</script>
                  
<style lang="scss" scoped>
.product {
  margin-bottom: 45px;
  border-radius: 20px;
  cursor: pointer;

 
  .head {
    position: relative;
    .image {
      width: 100%;
      border-radius: 20px;
      height: 120px;
      object-fit: cover;
    }
    .time {
      background-color: #f8f8f8;
      font-size: 11px;
      font-weight: 800;
      position: absolute;
      bottom: 0;
      border-radius: 0px 10px 0px 10px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 7px;
      padding-bottom: 7px;
      .min {
        font-size: 11px;
        font-weight: 700;
      }
    }
  }
  .body {
    margin-top: 20px;

    .title {
      font-weight: 600;
    }

    .properties {
      margin-top: 5px;
      font-size: 12px;
      color: #979797;
      div {
        margin-right: 15px;
      }
      .rating {
        .star {
          width: 10px;
          margin-right: 5px;
        }
        span {
          font-weight: 800;
        }
      }
    }
  }
}
</style>