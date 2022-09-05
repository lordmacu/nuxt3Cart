<template>
  <b-row class="filter">
    <b-col class="title-outer">
      <h3 class="title d-flex">
        Restaurants <HamburberIcon class="hamburger-icon" />
      </h3>
    </b-col>
    <b-col class="title-outer">
      <button class="button">Delivery now <ArrowDown /></button>
    </b-col>
  </b-row>
</template>
    <script>
import HamburberIcon from "../../images/hamburgerIcon.vue";
import ArrowDown from "../../images/arrowDown.vue";

export default {
  components: {
    HamburberIcon,
    ArrowDown,
  },

  data() {
    return {};
  },
};
</script>
              
    <style lang="scss" scoped>
.filter {
  margin-top: 60px;
  .title-outer {
    padding-left: 0px;
    text-align: right;
    padding-right: 0px;
    .button {
      border: 0px;
      background-color: #fb6d3b;
      color: white;
      font-size: 11px;
      border-radius: 20px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 7px;
      padding-top: 7px;
      svg {
        fill: white;
        stroke: white;
        width: 6px;
        margin-left: 10px;
        path {
          fill: white;
          stroke: white;
        }
      }
    }

    .title {
      font-size: 30px;
      font-weight: 700;
      .hamburger-icon {
        width: 25px;
        position: relative;
        margin-left: 20px;
      }
    }
  }
}
</style>