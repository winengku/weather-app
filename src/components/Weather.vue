<template>
  <div class="container">
    <div class="title">
      <div class="col-12 mx-0 px-0 text-center my-4">
        <h1>Yoga VueJS Weather App</h1>
      </div>
    </div>
    <div class="content">
      <div class="search row mx-0 px-0 text-center justify-content-center">
        <form>
          <div class="col-12 mb-1">
            <span>Enter Location : </span>
          </div>
          <div class="col-12">
            <input type="text" v-model="inpLocation" required />
          </div>
          <div class="col-12 my-2">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="search"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div
        id="card-box"
        class="row mx-0 mt-2 px-0 text-center justify-content-center p-4"
      >
        <div class="col-12 mt-4 mb-3">Icon</div>
        <div class="col-12">
          <h2>{{ weather.temp }}&deg; C</h2>
        </div>
        <div class="col-12">
          <div>
            <span class="font-weight-bold">{{ weather.name }}</span>
          </div>
        </div>
        <div class="row mx-0 px-0 col-12 mt-4">
          <div class="col-6">
            <div class="col-12 font-weight-bold">
              {{ weather.minTemp }}&deg; C
            </div>
            <div class="col-12 font-weight-bold">
              {{ weather.maxTemp }}&deg; C
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">{{ weather.desc }}</div>
            <div class="col-12">{{ weather.country }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      inpLocation: "",
      weather: {
        temp: 0,
        name: "-",
        minTemp: "-",
        maxTemp: "-",
        desc: "-",
        country: "-",
      },
    };
  },
  computed: {
    ...mapState({
      curWeather: (state) => state.weather.curWeather,
    }),
  },
  methods: {
    ...mapActions({
      fetchWeather: "weather/fetchWeather",
    }),
    async search() {
      await this.fetchWeather(this.inpLocation);
      this.weather.temp = this.curWeather.main.temp;
      this.weather.name = this.curWeather.name;
      this.weather.minTemp = this.curWeather.main.temp_min;
      this.weather.maxTemp = this.curWeather.main.temp_max;
      this.weather.desc = this.curWeather.weather[0].main;
      this.weather.country = this.curWeather.sys.country;
    },
  },
};
</script>

<style>
</style>
