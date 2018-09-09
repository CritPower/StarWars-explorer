<template>
    <article>
        <header>Name: {{this.name}}</header>
        <main>
            <h3>Main characteristics</h3>
            <div>cargo_capacity: {{this.cargo_capacity}}</div>
            <div>consumables: {{this.consumables}}</div>
            <div>cost_in_credits: {{this.cost_in_credits}}</div>
            <div>crew: {{this.crew}}</div>
            <div>length: {{this.length}}</div>
            <div>manufacturer: {{this.manufacturer}}</div>
            <div>max_atmosphering_speed: {{this.max_atmosphering_speed}}</div>
            <div>model: {{this.model}}</div>
            <div>passengers: {{this.passengers}}</div>
        </main>
        <footer>people / films </footer>
    </article>
</template>

<script>
export default {
  name: "VehicleDetails",
  data: function() {
    return {
      cargo_capacity: "",
      consumables: "",
      cost_in_credits: "",
      crew: "",
      length: "",
      manufacturer: "",
      max_atmosphering_speed: "",
      model: "",
      name: "",
      passengers: "",
      pilots: [],
      films: [],
      url: "",
      vehicle_class: ""
    };
  },
  mounted: function() {
    fetch(`https://swapi.co/api/vehicles/?search=${this.$route.params.name}`)
      .then(response => response.json())
      .then(data => {
        this.cargo_capacity = data.results[0].cargo_capacity;
        this.consumables = data.results[0].consumables;
        this.cost_in_credits = data.results[0].cost_in_credits;
        this.crew = data.results[0].crew;
        this.length = data.results[0].length;
        this.manufacturer = data.results[0].manufacturer;
        this.max_atmosphering_speed = data.results[0].max_atmosphering_speed;
        this.model = data.results[0].model;
        this.name = data.results[0].name;
        this.passengers = data.results[0].passengers;
        this.pilots = data.results[0].pilots;
        this.films = data.results[0].films;
        this.vehicle_class = data.results[0].vehicle_class;
      });
  }
};
</script>

<style>
</style>
