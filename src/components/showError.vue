<template>
  <h2 class="error">{{ errorMessage }}</h2>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["errorMessage"]),
  },
  methods: {
    ...mapActions(["hideError"]),
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch("hideError");
      //TODO check why function below doesn't work
      // hideError();
    }, 3000);
  },
};
</script>

<style>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  width: max-content;
  height: max-content;
  background: white;
  border: 1px solid #333;
  color: orangered;
}
</style>