<template>
    <article>
        Vehicles
    </article>
</template>

<script>
export default {
  name: "Vehicles",
  data: function() {
    return {
      vehicles: [],
      next: ""
    };
  },
  mounted: function() {
      fetch("https://swapi.co/api/vehicles/")
        .then(response => response.json())
        .then(data => {
          this.vehicles = data.results;
          this.next = data.next;
        });
  }
};
</script>

<style>
</style>
