<template>
  <div class="counter-cart d-flex align-items-center justify-content-center">
    3
  </div>
</template>
<script>
import Avatar from "../../images/avatar.vue";

export default {
  components: { Avatar },
  data() {
    return {};
  },
};
</script>
              
<style lang="scss">
.counter-cart {
  background-color: #fcd661;
  width: 38px;
  height: 38px;
  border-radius: 15px;
  font-weight: 900;
  font-size: 12px;
}
.avatar-icon {
  width: 15px;
}
</style>