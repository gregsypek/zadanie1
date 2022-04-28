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
      <showWeather :currentWeather="currentWeather" />
      <!-- check if params is send from history( was clicked in History page on any old weather record) -->
      <showWeather
        v-if="this.$route.params.name"
        :currentWeather="this.$route.params"
      />
    </main>
  </div>
</template>

<script>
import showWeather from "../components/showWeather.vue";
export default {
  name: "Home",
  components: { showWeather },

  data() {
    return {
      api_key: "a9e58a19d0374ddd9a5108b9b5cef1e0",
      url_base: "http://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      currentWeather: null,
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
            console.log("res", res);
            return res.json();
          })
          // .then(this.setResults)
          .then(this.setResultsIntoDb);
      }
    },
    dateBuilder() {
      let d = new Date().toLocaleString();
      return d;
    },

    setResultsIntoDb(results) {
      let newWeather = {
        name: results.name,
        date: this.dateBuilder(),
        degree: results.main.temp,
      };
      fetch("http://localhost:3000/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWeather),
      })
        .then((this.currentWeather = newWeather))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style >
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
</style>
