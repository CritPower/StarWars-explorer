<template>
    <article>
        <header>Name: {{this.name}}</header>
        <main>
            <h3>Main characteristics</h3>
            <div>average_height: {{this.average_height}}</div>
            <div>average_lifespan: {{this.average_lifespan}}</div>
            <div>classification: {{this.classification}}</div>
            <div>designation: {{this.designation}}</div>
            <div>eye_colors: {{this.eye_colors}}</div>
            <div>hair_colors: {{this.hair_colors}}</div>
            <div>language: {{this.language}}</div>
            <div>skin_colors: {{this.skin_colors}}</div>
        </main>
        <footer>people / films </footer>
    </article>
</template>

<script>
export default {
  name: "SpeciesDetails",
  data: function() {
    return {
      average_height: "",
      average_lifespan: "",
      classification: "",
      designation: "",
      eye_colors: "",
      hair_colors: "",
      homeworld: "",
      language: "",
      name: "",
      people: [],
      films: [],
      skin_colors: "",
      url: ""
    };
  },
  mounted: function() {
    fetch(`https://swapi.co/api/species/?search=${this.$route.params.name}`)
      .then(response => response.json())
      .then(data => {
        this.average_height = data.results[0].average_height;
        this.average_lifespan = data.results[0].average_lifespan;
        this.classification = data.results[0].classification;
        this.designation = data.results[0].designationl;
        this.eye_colors = data.results[0].eye_colors;
        this.hair_colors = data.results[0].hair_colors;
        this.homeworld = data.results[0].homeworld;
        this.language = data.results[0].language;
        this.name = data.results[0].name;
        this.people = data.results[0].people;
        this.films = data.results[0].films;
        this.skin_colors = data.results[0].skin_colors;
        this.url = data.results[0].url;
      });
  }
};
</script>

<style>
</style>