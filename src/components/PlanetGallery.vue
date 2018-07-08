<template>
        <div>
        <span>planets</span>
        <div>
            <planet v-for="planet in planets" v-bind:planet="planet" v-bind:key="planet.id"></planet>
        </div>
        <button @click="getMorePlanets" v-if="next">Show more!</button>
        </div>
</template>

<script>
import Planet from "@/components/Planet.vue";
export default {
  components: { Planet },
  name: "PlanetGallery",
  computed: {
    reversedMessage2: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
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
      } else {
        alert("sore planeti zakonchilis :C");
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