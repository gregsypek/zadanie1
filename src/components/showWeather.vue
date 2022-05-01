<template>
  <!-- serach results -->
  <div class="weather-wrap" v-if="displayWeather">
    <div class="location-box">
      <div class="location">{{ displayWeather.name }}</div>
      <div class="date">{{ dateBuilder }}</div>
    </div>
    <div class="weather-box">
      <div class="tem">{{ Math.round(displayWeather.main.temp) }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["displayWeather"],
  computed: {
    ...mapGetters(["dateBuilder"]),
  },
};
</script>

<style>
/* styling results */
.location-box .location {
  color: #333;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
.location-box .date {
  text-align: center;
  color: #333;
  font-size: 20px;
  font-weight: normal;
  font-size: italic;
  /* text-align: center; */
}
.weather-box .tem {
  text-align: center;
  padding-inline: 20px;
  color: #333;
  font-size: 100px;
  font-weight: bold;
  /* background-color: rgba(255, 255, 255, 0.3); */
  border-radius: 10px;
  margin-block: 30px;
}
.weather-box .weather {
  text-align: center;
  color: #ddd;
  font-size: 40px;
  font-weight: bold;
}
</style>