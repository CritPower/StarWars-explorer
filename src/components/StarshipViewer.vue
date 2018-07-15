<template>
    <article>
    <header>
    Starships
    </header>
    <main>
        <starship v-for="starship in starships" :starship="starship" :key="starship.id"> </starship>
    </main>
    </article>
</template>

<script>
import Starship from "@/components/Starship.vue";
export default {
  name: "StarshipViewer",
  components: { Starship },
  data: function() {
    return {
      starships: [],
      next: ""
    };
  },
  mounted: function() {
    fetch("https://swapi.co/api/starships/")
      .then(response => response.json())
      .then(data => {
        this.starships = data.results;
        this.next = data.next;
      });
  }
};
</script>

<style>
</style>
