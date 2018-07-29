<template>
    <article>
        <header>Name: {{this.name}}</header>
        <main>
            <h3>Main characteristics</h3>
            <div>height: {{this.height}}</div>
            <div>mass: {{this.mass}}</div>
            <div>hair_color: {{this.hair_color}}</div>
            <div>skin_color: {{this.skin_color}}</div>
            <div>eye_color: {{this.eye_color}}</div>
            <div>birth_year: {{this.birth_year}}</div>
            <div>gender: {{this.gender}}</div>
            <div>Population: {{this.population}}</div>
        </main>
        <footer>homeworld / starships / films / vehicles / species</footer>
    </article>
</template>

<script>
export default {
  name: "personDetails",
  data: function() {
    return {
      name: "",
      height: "",
      mass: "",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      birth_year: "",
      gender: "",

      homeworld: "",
      starships: [],
      films: [],
      vehicles: [],
      species: []
    };
  },
  mounted: function() {
    fetch(`https://swapi.co/api/people/?search=${this.$route.params.name}`)
      .then(response => response.json())
      .then(data => {
        this.name = data.results[0].name;
        this.height = data.results[0].height;
        this.mass = data.results[0].mass;
        this.hair_color = data.results[0].hair_color;
        this.skin_color = data.results[0].skin_color;
        this.eye_color = data.results[0].eye_color;
        this.birth_year = data.results[0].birth_year;
        this.gender = data.results[0].gender;

        this.homeworld = data.results[0].homeworld;
        this.starships = data.results[0].starships;
        this.films = data.results[0].films;
        this.vehicles = data.results[0].vehicles;
        this.species = data.results[0].species;
      });
  }
};
</script>

<style>
</style>
