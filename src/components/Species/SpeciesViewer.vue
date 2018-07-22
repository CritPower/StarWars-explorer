<template>
    <article>
        <header>
            Species
        </header>
        <main>
            <species v-for="item in species" :species="item" :key="item.id"> </species>
        </main>
        <footer>
            <span class="more" @click="getMore" v-if="next">SHOW MORE</span>
        </footer>
    </article>
</template>

<script>
import Species from "@/components/Species/Species.vue";
export default {
  name: "SpeciesViewer",
  components: { Species },
  data: function() {
    return {
      species: [],
      next: ""
    };
  },
  methods: {
    getMore: function() {
      if (this.next) {
        fetch(this.next)
          .then(response => response.json())
          .then(data => {
            this.starships = this.species.concat(data.results);
            this.next = data.next;
          });
      }
    }
  },
  mounted: function() {
    if (this.$route.name === "species") {
      fetch("https://swapi.co/api/species/")
        .then(response => response.json())
        .then(data => {
          this.species = data.results;
          this.next = data.next;
        });
    } else if (this.$route.name === "filmSpecies") {
      fetch(`https://swapi.co/api/films/?search=${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => data.results[0].species)
        .then(speciesUrls => Promise.all(speciesUrls.map(url => fetch(url))))
        .then(responses =>
          Promise.all(responses.map(response => response.json()))
        )
        .then(data => {
          this.species = data;
        });
    }
  }
};
</script>

<style>
</style>
