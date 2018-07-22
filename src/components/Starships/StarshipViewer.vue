<template>
  <article>
    <header>
      Starships
    </header>
    <main>
      <starship v-for="starship in starships" :starship="starship" :key="starship.id"> </starship>
    </main>
    <footer>
      <span class="more" @click="getMore" v-if="next">SHOW MORE</span>
    </footer>
  </article>
</template>

<script>
import Starship from "@/components/Starships/Starship.vue";
export default {
  name: "StarshipViewer",
  components: { Starship },
  data: function() {
    return {
      starships: [],
      next: ""
    };
  },
  methods: {
    getMore: function() {
      if (this.next) {
        fetch(this.next)
          .then(response => response.json())
          .then(data => {
            this.starships = this.starships.concat(data.results);
            this.next = data.next;
          });
      }
    }
  },
  mounted: function() {
    if (this.$route.name === "starships") {
      fetch("https://swapi.co/api/starships/")
        .then(response => response.json())
        .then(data => {
          this.starships = data.results;
          this.next = data.next;
        });
    } else if (this.$route.name === "filmStarships") {
      fetch(`https://swapi.co/api/films/?search=${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => {
          return (this.starshipsUrls = data.results[0].starships);
        })
        .then(starshipsUrls =>
          Promise.all(starshipsUrls.map(url => fetch(url)))
        )
        .then(responses =>
          Promise.all(responses.map(response => response.json()))
        )
        .then(data => {
          return (this.starships = data);
        });
    }
  }
};
</script>

<style>
</style>
