<template>
  <article>
    <header>
      Vehicles
    </header>
    <main>
      <vehicle v-for="vehicle in vehicles" :vehicle="vehicle" :key="vehicle.id"></vehicle>
    </main>
    <footer>
      <span class="more" @click="getMore" v-if="next">SHOW MORE</span>
    </footer>
  </article>
</template>

<script>
import Vehicle from "@/components/Vehicle.vue";
export default {
  name: "Vehicles",
  components: { Vehicle },
  data: function() {
    return {
      vehicles: [],
      next: ""
    };
  },
  methods: {
    getMore: function() {
      if (this.next) {
        fetch(this.next)
          .then(response => response.json())
          .then(data => {
            this.vehicles = this.vehicles.concat(data.results);
            this.next = data.next;
          });
      }
    }
  },
  mounted: function() {
    if (this.$route.name === "vehicles") {
      fetch("https://swapi.co/api/vehicles/")
        .then(response => response.json())
        .then(data => {
          this.vehicles = data.results;
          this.next = data.next;
        });
    } else if (this.$route.name === "filmVehicles") {
      fetch(`https://swapi.co/api/films/?search=${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => data.results[0].vehicles)
        .then(vehiclesUrls => Promise.all(vehiclesUrls.map(url => fetch(url))))
        .then(responses =>
          Promise.all(responses.map(response => response.json()))
        )
        .then(data => {
          this.vehicles = data;
        });
    }
  }
};
</script>

<style>
</style>
