<template>
    <article>
        <header>Name: {{this.name}}</header>
        <main>
            <h3>Main characteristics</h3>
            <div>Rotation period: {{this.rotation_period}}</div>
            <div>Orbital_period: {{this.orbital_period}}</div>
            <div>Diameter: {{this.diameter}}</div>
            <div>Climate: {{this.climate}}</div>
            <div>Gravity: {{this.gravity}}</div>
            <div>Terrain: {{this.terrain}}</div>
            <div>Surface water: {{this.surface_water}}</div>
            <div>Population: {{this.population}}</div>
        </main>
        <footer>residents / films</footer>
    </article>
</template>

<script>
export default {
      name: "planetDetails",
      data: function(){
          return {
              name: '',
              rotation_period: '',
              orbital_period: '',
              diameter: '',
              climate: '',
              gravity: '',
              terrain: '',
              surface_water: '',
              population: '',
              residents: [],
              films: []
          };
      },
      mounted: function() {

      fetch(`https://swapi.co/api/planets/?search=${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => {
          this.name = data.results[0].name;
          this.rotation_period = data.results[0].rotation_period;
          this.orbital_period = data.results[0].orbital_period;
          this.diameter = data.results[0].diameter;
          this.climate = data.results[0].climate;
          this.gravity = data.results[0].gravity;
          this.terrain = data.results[0].terrain;
          this.surface_water = data.results[0].surface_water;
          this.population = data.results[0].population;
          this.residents = data.results[0].residents;
          this.films = data.results[0].films;
        });
      }
}
</script>

<style>

</style>
