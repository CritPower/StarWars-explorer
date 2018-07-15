<template>
        <article>
        <header>Planets</Header>
        <main>
            <planet v-for="planet in planets" v-bind:planet="planet" v-bind:key="planet.id"></planet>
        </main>
        <footer>
          <span class="more" @click="getMorePlanets" v-if="next">SHOW MORE</span>
        </footer>
        </article>
</template>

<script>
import Planet from "@/components/Planet.vue";
export default {
  components: { Planet },
  name: "PlanetGallery",
  data: function() {
    return {
      dataUrl: "",
      title: "",
      planets: [],
      next: "",
      planetUrls: []
    };
  },
  methods: {
    clickFunction: function(event) {
      alert(":)");
    },
    getMorePlanets: function() {
      if (this.next) {
        fetch(this.next)
          .then(response => response.json())
          .then(data => {
            this.planets = this.planets.concat(data.results);
            this.next = data.next;
          });
      }
    },
    myFunction: function() {
      this.message = this.message
        .split("")
        .reduce((acum, element, index, array) => {
          acum.unshift(element);
          return acum;
        }, [])
        .join("");
    },

    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  created: function() {
    console.log("Created. some data");
  },
  mounted() {
    if (!!this.$route.params.title) {
      fetch(`https://swapi.co/api/films/?search=${this.$route.params.title}`)
        .then(response => response.json())
        .then(data => {
          return (this.planetUrls = data.results[0].planets);
        })
        .then(planetUrls => Promise.all(planetUrls.map(url => fetch(url))))
        .then(responses =>
          Promise.all(responses.map(response => response.json()))
        )
        .then(data => {
          return (this.planets = data);
        });
    } else if (!!this.$route.params.id) {
      //change to details page
      fetch(`https://swapi.co/api/planets/${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => {
          this.planets.push(data);
          this.next = data.next;
        });
    } else {
      fetch("https://swapi.co/api/planets/")
        .then(response => response.json())
        .then(data => {
          this.planets = data.results;
          this.next = data.next;
        });
    }
  }
};
</script>

<style>
/* Refactor */
.more {
  padding: 5px;
  position: relative;
  user-select: none;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  min-width: 88px;
  line-height: 36px;
  border-radius: 2px;
  overflow: visible;
  transform: translate3d(0, 0, 0);
  border-radius: 2px;
  overflow: visible;
  -webkit-box-align: start;
  cursor: pointer;
  box-sizing: border-box;
  border-width: 2px;
  border-style: outset;
  border-color: whitesmoke;
  border-image: initial;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
}
</style>