<template>
  <!-- serach results -->
  <div class="weather-wrap" v-if="currentWeather">
    <div class="location-box">
      {{ currentWeather }}
      <div class="location">{{ currentWeather.name }}</div>
      <div class="date">{{ currentWeather.date }}</div>
    </div>
    <div class="weather-box">
      <div class="tem">{{ Math.round(currentWeather.degree) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentWeather"],
};
</script>

<style>
/* styling results */
.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
.location-box .date {
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
  font-size: italic;
  /* text-align: center; */
}
.weather-box .tem {
  text-align: center;
  padding-inline: 20px;
  color: #fff;
  font-size: 100px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.3);
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