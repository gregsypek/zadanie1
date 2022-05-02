<template>
  <div class="history">
    <h1>Historia lokalizacji</h1>
    <div>
      <ul class="history-list">
        <li v-for="(city, index) in cities" :key="index">
          <router-link
            :to="{
              name: 'Home',
              params: {
                name: city.name,
                date: city.date,
                degree: city.degree,
              },
            }"
          >
            {{ city.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// import data from "../../data/db.json";
export default {
  data() {
    return {
      history: [],
      // data: data,
    };
  },
  computed: {
    ...mapState(["cities"]),
  },
};
</script>

<style>
.history h1 {
  color: #333;
  font-weight: bold;
}
.history-list {
  margin-top: 20px;
  /* background: #fff; */
  /* font-weight: bold; */
  padding: 2em;
  font-size: 18px;
  border-radius: 5px;
  list-style: none;
  text-align: left;
}
.history-list li {
  padding: 0.5em 1em;
  border-bottom: 2px solid transparent;
  text-align: center;
}
.history-list a {
  color: inherit;
  border: none;
}
.history-list a:hover {
  color: black;
  font-weight: 400;
  cursor: pointer;
}
</style>
