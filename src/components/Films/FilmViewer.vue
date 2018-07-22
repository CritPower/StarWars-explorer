<template>
<div>
    <div>Films</div>
    <div>
        <film v-for="film in films" v-bind:film="film" v-bind:key="film.id"></film>
    </div>
    
    
    </div>
</template>

<script>
import Film from "@/components/Films/Film.vue";
export default {
  name: "FilmViewer",
  components: { Film },
  data: function() {
    return {
      films: [],
      next: []
    };
  },
  mounted() {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(data => {
        this.films = data.results;
        this.next = data.next;
      });
  }
};
</script>

<style>
</style>

