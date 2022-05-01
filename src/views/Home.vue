<template>
  <div class="home">
    <main>
      <!-- search input -->
      <form @submit.prevent class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Enter city..."
          v-model="query"
          @keyup="addNewQuery(query)"
        />
        <button @click="fetchWeather">Search</button>
      </form>
      <!-- <showWeather :currentWeather="currentWeather" /> -->
      <!-- check if params is send from history( was clicked in History page on any old weather record) -->
      <!-- <showWeather
        v-if="this.$route.params.name && !showNew"
        :currentWeather="this.$route.params"
      /> -->
    </main>
    <!-- <p v-for="(city, index) in cities" :key="index">{{ city.name }}></p> -->
    <p>{{ newQuery }}</p>
    <p>{{ cities }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import showWeather from "../components/showWeather.vue";
export default {
  name: "Home",
  components: { showWeather },
  data() {
    return {
      query: "",
    };
  },
  // data() {
  //   return {
  //     api_key: "a9e58a19d0374ddd9a5108b9b5cef1e0",
  //     url_base: "http://api.openweathermap.org/data/2.5/",
  //     query: "",
  //     weather: {},
  //     currentWeather: null,
  //     // if false -  hide result from history list (if someone want search new one and old is printed on the screen - prevent double results)
  //     showNew: false,
  //   };
  // },
  computed: {
    ...mapState(["cities", "newQuery"]),
    // async fetchWeather(e) {
    //   if (e.key == "Enter") {
    //     // Example on how to make an API call using  API key is on Readme.md
    //     await fetch(
    //       `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
    //     )
    //       .then((res) => res.json())
    //       .then((json) => console.log(typeof json, json))
    //       .then((data) => {
    //         this.addToCities(data);
    //       });
    //     //     .then(this.setResultsIntoDb)
    //     //     // clean input field
    //     //     .then((this.query = ""))
    //     //     .then((this.showNew = true));
    //     // }
    //   }
    // },

    // setResultsIntoDb(results) {
    //   // create object who will be send into db.json file (an example object return from openweathermap is in README.md)
    //   let newWeather = {
    //     name: results.name,
    //     date: this.dateBuilder(),
    //     degree: results.main.temp,
    //   };
    //   fetch("http://localhost:3000/cities", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newWeather),
    //   })
    //     // currentWeather will be send as props into showWeathe component
    //     .then((this.currentWeather = newWeather))
    //     .catch((err) => console.error(err));
    // },
  },
  methods: {
    ...mapMutations(["addToCities", "addNewQuery"]),
    ...mapActions(["fetchWeather"]),
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
