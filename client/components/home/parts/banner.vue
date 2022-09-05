<template>
  <b-row >
   <b-col>
      <div class="banner">
        <b-row >
          <b-col lg="4">
            <img class="image" src="/client/assets/images/headerimage.png" />
          </b-col>
          <b-col lg="6" cols="12" class="hero">
            <h1 class="title">$0 delivery for 30 days!</h1>
            <h2 class="subtitle">$0 delivery free for orders over $10 for 30 days</h2>
          </b-col>
          <b-col lg="2" cols="12">
            <a href="#" class="learn-more">Learn more <ArrowRight /></a>
          </b-col>
        </b-row>
      </div>
   </b-col>
  </b-row>
</template>
    <script>
import ArrowRight from "../../images/arrowRight.vue";

export default {
  components: {
    ArrowRight,
  },
  data() {
    return {};
  },
};
</script>
              
<style lang="scss">
.banner {
  background-color: #fef7ec;
  position: relative;
  border-radius: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 50px;
  .image {
    width: 222px;
    position: absolute;
    left: 20px;
    bottom: 0;
  }
  .hero {
    padding-left: 40px;
    p {
      margin-bottom: 0px;
    }
  }

  .title {
    color: #fd6e3c;
    font-size: 24px;
    font-weight: 700;
  }
  .subtitle {
    font-size: 12px;
    color: #9a928d;
  }
  .learn-more {
    font-size: 11px;
    color: #fd6e3c;
    text-decoration: none;
    font-weight: 700;
    position: absolute;
    bottom: 30px;

    svg {
      width: 10px;
      stroke: #dd6c45;
      position: relative;
      right: -10px;
      path {
        width: 12px;
        fill: #dd6c45 !important;
      }
    }
  }
}
</style>