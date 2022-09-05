<template>
  <b-row>
    <Logo />
    <SearchBar />
  </b-row>
</template>
<script>
import Logo from "./parts/logo.vue";
import SearchBar from "./parts/searchBar.vue";

export default {
  components: {
    Logo,
    SearchBar,
  },
  data() {
    return {};
  },
};
</script>
          
<style lang="scss">
</style>