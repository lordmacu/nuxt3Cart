<template>
  <div class="product">
    <div class="head">
      <img class="image" src="/client/assets/images/product1.jpeg" />
      <div class="time">25-30 <span class="min">min.</span></div>
    </div>
    <div class="body">
      <div class="title">
        <span> Bagel Story </span>
      </div>

      <div class="properties d-flex">
        <div class="rating d-flex"><Star class="star" /><span>4.7</span></div>
        <div>Cafes</div>
        <div>Creperies</div>
        <div>$</div>
      </div>
    </div>
  </div>
</template>
<script>
import Star from "../../../images/star.vue";

export default {
  components: {
    Star,
  },

  data() {
    return {};
  },
};
</script>
                  
<style lang="scss" scoped>
.product {
  margin-bottom: 45px;
  border-radius: 20px;

 
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