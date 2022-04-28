<template>
  <div class="history">
    <h1>Historia lokalizacji</h1>
    <div>
      <ul class="history-list">
        <li v-for="city in data.cities" :key="city.id">
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
import data from "../../data/db.json";
export default {
  data() {
    return {
      history: [],
      data: data,
    };
  },
};
</script>

<style>
.history h1 {
  color: #fff;
  font-weight: bold;
}
.history-list {
  margin-top: 20px;
  background: #fff;
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
}
.history-list a:hover {
  color: #47c58a;
  cursor: pointer;
}
</style>
