<template>
  <div class="history">
    <nav class="main-nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'History' }">History</router-link>
    </nav>
    <router-view />
    <div class="history" v-if="historyResults">
      <h1>Lista wyszukanych lokalizacji</h1>
      <div v-if="historyResults">
        <ul v-for="city in historyResults" :key="city" class="history-list">
          <li>{{ city }}</li>
        </ul>
      </div>
      <!-- <ul class="history-list">
        <li>Mielec</li>
        <li>Rzeszów</li>
        <li>Kraków</li>
      </ul> -->
    </div>
    <p>{{ historyResults }}</p>
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
