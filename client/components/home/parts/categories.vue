<template>
  <b-row>
    <b-col  >
      <b-row class="categories">
        <b-col   class="no-padding" v-for="(item, index) in categories" :key="index">
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
 

export default {
  components: {
    ItemCategory,
    ArrowRight,
    Bell
  },

  data() {
    return {
      isSelected: 0,
      categories: [
        {
          id: 1,
          name: "All",
          icon: "https://image.flaticon.com/icons/svg/701/701965.svg",
        },
        {
          id: 2,
          name: "Pizza",
          icon: "https://image.flaticon.com/icons/svg/599/599995.svg",
        },
        {
          id: 3,
          name: "Asian",
          icon: "https://image.flaticon.com/icons/svg/1895/1895684.svg",
        },
        {
          id: 4,
          name: "Burgers",
          icon: "https://image.flaticon.com/icons/svg/883/883806.svg",
        },
        {
          id: 5,
          name: "Barbecue",
          icon: "https://image.flaticon.com/icons/svg/933/933310.svg",
        },
        {
          id: 6,
          name: "Dessers",
          icon: "https://image.flaticon.com/icons/svg/174/174394.svg",
        },
        {
          id: 7,
          name: "Thai",
          icon: "https://image.flaticon.com/icons/svg/135/135367.svg",
        },
        {
          id: 8,
          name: "Sushi",
          icon: "https://image.flaticon.com/icons/svg/1900/1900683.svg",
        },
      ],
    };
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