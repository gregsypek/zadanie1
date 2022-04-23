<template>
  <div class="history">
    <h1>Lista wyszukanych lokalizacji</h1>
    <ul class="history-list">
      <li>Mielec</li>
      <li>Rzeszów</li>
      <li>Kraków</li>
    </ul>
  </div>
</template>

<script>
export default {};
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
