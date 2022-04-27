<template>
  <div class="history">
    <nav class="main-nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'History' }">History</router-link>
    </nav>
    <router-view />
    <div class="history" v-if="historyResults">
      <h1>Lista wyszukanych lokalizacji</h1>
      <div>
        <ul v-if="historyResults.length" class="history-list">
  
          <li v-for="city in historyResults" :key="city">
            {{ city }}
          </li>
        </ul>
        <ul v-else class="history-list">
          <li v-for="(item, index) in history" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <p style="color: white">{{ historyResults }}</p>
  </div>
</template>

<script>
export default {
  props: ["historyResults"],
  data() {
    return {
      history: [],
    };
  },
  // methods: {
  //   addNew(arr) {
  //     this.history = [this.history, ...arr];
  //     console.log("he", this.history);
  //   },
  // },
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
.history-list li:hover {
  border-bottom: 2px solid #50f6ab;
  cursor: pointer;
}
</style>
