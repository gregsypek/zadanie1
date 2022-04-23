<template>
  <div class="home">
    <main>
      <!-- search input -->
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." />
      </div>
      <!-- serach results -->
      <div class="weather-wrap">
        <div class="location-box">
          <div class="location">Mielec, PL</div>
          <div class="date">23.04.2022</div>
        </div>
        <div class="weather-box">
          <div class="tem">13°C</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
