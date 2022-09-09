<template>
  <div @click="getProductByCategory()" class="item-category"
    v-bind:class="{ selected: isSelected, 'no-selected': !isSelected }">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>
<script>


import { useApiStore } from '@/client/store/api'
import { useIndexStore } from '@/client/store/index'

export default {
  props: {
    isSelected: {
      default: "",
      type: Boolean,
    },
    title: {
      default: "",
      type: String,
    },
    id: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {};
  },
  setup() {
    const storeApi = useApiStore()
    const storeIndex = useIndexStore()

    return { storeApi, storeIndex }
  },
  methods: {
    async getProductByCategory() {

      console.log("este es esl all  ", this.id);


      this.storeIndex.setLoading(true);

      if (this.id === 1) {
        await this.storeApi.getProducts();
      } else {
        await this.storeApi.getProductsByCategory(this.id);
      }
      
      this.storeIndex.setLoading(false);

    }
  },
};
</script>
            
<style lang="scss" scoped>
.item-category {
  max-width: 70px;
  cursor: pointer;
  border-radius: 60px;
  -webkit-box-shadow: 1px 5px 23px 5px #e7e7e7;
  box-shadow: 1px 5px 23px 5px #e7e7e7;

  &.selected {
    background-color: #fbd560;
  }

  &.no-selected {}

  padding: 8px;

  .icon {
    background-color: white;
    border-radius: 100%;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;

    svg {
      width: 20px;
    }
  }

  .title {
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 23px;
  }
}
</style>