<template>
  <b-row>
    <b-col  >
      <b-row class="categories">
        
        <b-col   class="no-padding" v-for="(item, index) in storeCart.categories" :key="index">
          <ItemCategory
            :isSelected="isSelected == index"
            :title="item.name"
            @click="isSelected = index"
          >
            <Bell />
          </ItemCategory>
        </b-col>
        <b-col
          class="no-padding justify-content-center align-self-center button-next"
        >
          <button>
            <ArrowRight />
          </button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
    <script>
import ItemCategory from "./itemCategory.vue";

import ArrowRight from "../../images/arrowRight.vue";
import Bell from "../../images/categories/bell.vue";
import { useApiStore } from '@/client/store/api'


export default {
  components: {
    ItemCategory,
    ArrowRight,
    Bell
  },
  data() {
    return {
      isSelected: 0,
    };
  },
  setup(){
    const storeCart = useApiStore()
   
    return { storeCart }
  },
  methods:{
    async getData(){
       await this.storeCart.getCategories();
      
    }
  },
  created(){
    this.getData();
  },
 
};
</script>
              
<style lang="scss" scoped>
.categories {
  margin-top: 43px;

  .button-next {
    text-align: right;
    button {
      background-color: #f8f8f8;
      border: 0;
      border-radius: 10px;
      padding: 5px;
      text-align: center;
      width: 40px;
      height: 40px;
      svg {
        width: 15px;
        position: relative;
        top: 0px;
      }
    }
  }
}
</style>