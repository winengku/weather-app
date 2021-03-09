<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";

export default {
  components: {
    Weather,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
