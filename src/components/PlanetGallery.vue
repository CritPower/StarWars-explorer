<template>
        <div>
        <div v-if="isVisible">
            <input v-model="message">
        </div>
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
      superUrl: "https://google.com",
      number: 1,
      ok: true,
      reversedMessage: "Test",
      testId: "superId",
      isButtonDisabled: false,
      someHtml: '<span style="color:red">Text in span</span>',
      message: "data.message test",
      message2: "data.message2 test " + new Date().toLocaleString(),
      messageB: "data.messageB test " + new Date().toLocaleString(),
      title: "data.title test" + new Date().toLocaleString(),
      isVisible: true,
      planets: [],
      next: ""
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
    console.log("Created. some data = " + this.message);
  },
  mounted() {
    fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .then(data => {
        this.planets = data.results;
        this.next = data.next;
      });
  }
};
</script>