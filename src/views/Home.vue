<template>
  <div class="home">
    <main>
      <!-- search input -->
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>

      <!-- EXAMPLE RESULTS FROM OPENWEATHER API:
      {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
      base: "stations"
      clouds: {all: 99}
      cod: 200
      coord: {lon: -0.1257, lat: 51.5085}
      dt: 1650451394
      id: 2643743
      main: {temp: 16.75, feels_like: 15.73, temp_min: 14.3, temp_max: 17.93, pressure: 1016, …}
      name: "London"
      sys: {type: 2, id: 268730, country: 'GB', sunrise: 1650430457, sunset: 1650481452}
      timezone: 3600
      visibility: 10000
      weather: Array(1)
      0: {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}
      length: 1
      [[Prototype]]: Array(0)
      wind: {speed: 6.17, deg: 80}
      [[Prototype]]: Object -->

      <!-- serach results -->
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <!-- shows results only if fetching object is not undefined -->
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="tem">{{ Math.round(weather.main.temp) }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data() {
    return {
      api_key: "a9e58a19d0374ddd9a5108b9b5cef1e0",
      url_base: "http://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        // Example on how to make an API call using your API key API call
        // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      console.log(results);
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date().toLocaleString();
      return d;
    },
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #333;
}
#app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
main {
  padding: 25px;
}
.search-box {
  width: 100%;
  margin-bottom: 30px;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.search-box .search-bar:focus {
  background-color: #eee;
}
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
