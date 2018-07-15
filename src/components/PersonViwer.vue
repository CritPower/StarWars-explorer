<template>
  <article>
    <header>Characters</Header>
    <main>
      <person v-for="person in characters" v-bind:person="person" v-bind:key="person.id"></person>
    </main>
    <footer>
      <span class="more" @click="getMore" v-if="next">SHOW MORE</span>
    </footer>
  </article>
</template>

<script>
import Person from "@/components/Person.vue";
export default {
  name: "PersonViewer",
  components: { Person },
  data: function() {
    return {
      SomeInfo: "",
      characters: [],
      next: ""
    };
  },
  methods: {
    getMore: function() {
      if (this.next) {
        fetch(this.next)
          .then(response => response.json())
          .then(data => {
            this.characters = this.characters.concat(data.results);
            this.next = data.next;
          });
      }
    }
  },
  mounted() {
    if (this.$route.name === "characters") {
      fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then(data => {
          this.characters = data.results;
          this.next = data.next;
        });
    } else if (this.$route.name === "filmCharacters") {
      fetch(`https://swapi.co/api/films/?search=${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => {
          return (this.planetUrls = data.results[0].characters);
        })
        .then(charactersUrls =>
          Promise.all(charactersUrls.map(url => fetch(url)))
        )
        .then(responses =>
          Promise.all(responses.map(response => response.json()))
        )
        .then(data => {
          return (this.characters = data);
        });
    }
  }
};
</script>

<style>
</style>
