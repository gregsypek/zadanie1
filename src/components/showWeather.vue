<template>
  <!-- serach results -->
  <div class="weather-wrap" v-if="displayWeather">
    <div class="location-box">
      <div class="location">{{ displayWeather.name }}</div>
      <div class="date">{{ dateBuilder }}</div>
    </div>
    <div class="weather-box">
      <div class="des">{{ displayWeather.weather[0].description }}</div>
      <div class="tem">
        {{ Math.round(displayWeather.main.temp) }}<span>&#8451;</span>
      </div>
      <p>
        wschód słońca:
        <!-- time returned from API is in seconds, not miliseconds as we wont here - so * 1000 -->
        {{
          new Date(displayWeather.sys.sunrise * 1000).toLocaleTimeString(
            "pl-PL"
          )
        }}
      </p>
      <p>
        zachód słońca:
        {{
          new Date(displayWeather.sys.sunset * 1000).toLocaleTimeString("pl-PL")
        }}
      </p>
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
.weather-box .des {
  font-size: 48px;
  text-transform: uppercase;
  margin-top: 1rem;
}
.weather-box .weather {
  text-align: center;
  color: #ddd;
  font-size: 40px;
  font-weight: bold;
}
</style>