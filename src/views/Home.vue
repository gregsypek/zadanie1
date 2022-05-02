<template>
  <div class="home">
    <main>
      <!-- search input -->
      <form @submit.prevent="fetchWeather" class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Enter city..."
          v-model="query"
          @keyup="addNewQuery(query)"
          required
        />
        <button>Search</button>
      </form>
      <!-- show only last one from array  -->
      <showWeather :displayWeather="cities[cities.length - 1]" />
    </main>

    <p v-if="currentWeather">current: {{ currentWeather }}</p>
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
  computed: {
    ...mapState(["cities", "newQuery", "currentWeather"]),
  },
  methods: {
    ...mapMutations(["addToCities", "addNewQuery"]),
    ...mapActions(["fetchWeather"]),
  },
};
</script>

<style >
.search-box {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
}
.search-box .search-bar {
  width: 100%;
  max-width: 200px;
  padding: 15px;
  color: inherit;
  font-size: 20px;
  border: 2px solid #808080;
  outline: none;
  border-radius: 5px;
}
.search-box .search-bar:focus {
  background-color: #fff;
  border: 2px solid #333;
}
.search-box button {
  padding: 0.5em 1.5em;
  font-size: 18px;
  background-color: darkgrey;
  color: #333;
  margin-left: 1rem;
  border-radius: 5px;
}
.search-box button:hover,
.search-box button:focus {
  background-color: #9d9d9d;
}
</style>
