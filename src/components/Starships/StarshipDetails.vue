<template>
    <article>
        <header>Name: {{this.name}}</header>
        <main>
            <h3>Main characteristics</h3>
            <div>model: {{this.model}}</div>
            <div>manufacturer: {{this.manufacturer}}</div>
            <div>cost_in_credits: {{this.cost_in_credits}}</div>
            <div>length: {{this.length}}</div>
            <div>max_atmosphering_speed: {{this.max_atmosphering_speed}}</div>
            <div>crew: {{this.crew}}</div>
            <div>passengers: {{this.passengers}}</div>
            <div>cargo_capacity: {{this.cargo_capacity}}</div>
            <div>consumables: {{this.consumables}}</div>
            <div>hyperdrive_rating: {{this.hyperdrive_rating}}</div>
            <div>MGLT: {{this.MGLT}}</div>
            <div>starship_class: {{this.starship_class}}</div>
        </main>
        <footer>pilots / films</footer>
    </article>
</template>

<script>
export default {
  name: "starshipDetails",
  data: function() {
    return {
      name: "",
      model: "",
      manufacturer: "",
      cost_in_credits: "",
      length: "",
      max_atmosphering_speed: "",
      crew: "",
      passengers: "",
      cargo_capacity: "",
      consumables: "",
      hyperdrive_rating: "",
      MGLT: "",
      starship_class: ""
    };
  },
  mounted: function() {
    fetch(`https://swapi.dev/api/starships/?search=${this.$route.params.name}`)
      .then(response => response.json())
      .then(data => {
        this.name = data.results[0].name;
        this.model = data.results[0].model;
        this.manufacturer = data.results[0].manufacturer;
        this.cost_in_credits = data.results[0].cost_in_credits;
        this.length = data.results[0].length;
        this.max_atmosphering_speed = data.results[0].max_atmosphering_speed;
        this.crew = data.results[0].crew;
        this.passengers = data.results[0].passengers;
        this.cargo_capacity = data.results[0].cargo_capacity;
        this.consumables = data.results[0].consumables;
        this.hyperdrive_rating = data.results[0].hyperdrive_rating;
        this.MGLT = data.results[0].MGLT;
        this.starship_class = data.results[0].starship_class;
      });
  }
};
</script>

<style>
</style>
