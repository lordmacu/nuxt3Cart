<template>
  <b-col lg="9" class="outer-search">
    <div class="search-container">
      <Search class="search-icon" />
      <input type="text" placeholder="Search" />
    </div>
  </b-col>
</template>
  <script>
import Search from "../../images/search.vue";

export default {
  components: {
    Search,
  },
  data() {
    return {};
  },
};
</script>
      
  <style lang="scss">
.outer-search {
  padding-right: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  .search-container {
    background-color: #f8f8f8;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 30px;
    padding-right: 40px;
    border-radius: 20px;
    margin-left: 17px;

    .search-icon {
      width: 15px;
      margin-right: 20px;
      fill: #000;
    }
    input {
      border: none;
      background-color: #f8f8f8;
    }

    input:focus {
      outline: none;
    }

    ::placeholder {
      font-size: 14px;
      color: #a4a4a4;
      opacity: 1;
    }

    :-ms-input-placeholder {
      font-size: 14px;

      color: #a4a4a4;
    }

    ::-ms-input-placeholder {
      font-size: 14px;

      color: #a4a4a4;
    }
  }
}
</style>