<template>
  <div class="address">
    <b-row>
      <b-col lg="9" cols="9">
        <span>625 St Marks Ave</span>
      </b-col>
      <b-col lg="3" cols="3" class="edit">
        <a href="#">Edit</a>
      </b-col>
    </b-row>
    <b-row class="outer-clock">
      <b-col lg="3" cols="3">
        <div class="clock">
          <Clock class="clock-icon" />
        </div>
      </b-col>
      <b-col lg="4" cols="4" class="minutes">
        <span>35 min</span>
      </b-col>
      <b-col lg="5" cols="5" class="choose-time">
        <a href="#">Choose time</a>
      </b-col>
    </b-row>
  </div>
</template>
  <script>
import Clock from "../../images/clock.vue";

export default {
  components: {
    Clock,
  },
  data() {
    return {};
  },
};
</script>
    
<style lang="scss">
.body {
  .address {
    background-color: #503e9d;
    color: white;
    border-radius: 20px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 23px;
    padding-bottom: 23px;
    font-size: 10px;
    font-weight: 100;
    .edit {
      text-align: right;
      a {
        color: #fcd661;
        text-decoration: none;
        font-weight: 400;
        font-weight: 500;
      }
    }

    .outer-clock {
      margin-top: 15px;
      .clock {
        background-color: #614c97;
        border-radius: 20px;
        width: 30px;
        height: 30px;
        text-align: center;
        padding-bottom: 7px;
        padding-top: 6px;
        .clock-icon {
          width: 12px;
          stroke: #fcd661;
          fill: #fcd661;
        }
      }
      .minutes {
        padding-top: 7px;
        padding-left: 5px;
      }
      .choose-time {
        padding-top: 10px;
        text-align: right;
        a {
          color: #fcd661;
          text-decoration: none;
          font-weight: 500;
        }
      }
    }
  }
}
</style>