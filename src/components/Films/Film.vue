<template>
    <article class="film">
    <header>
        <h3>{{this.film.title}}</h3>
    </header>
    <main>
        <div>{{this.film.opening_crawl}}</div>
    </main>
    <footer>
        <img class="film-img" src="../../assets/film.svg">
        <div>
            <router-link :to="planetsUrl"> Planets /</router-link>
            <router-link :to="sharacterstUrl"> Characters /</router-link>
            <router-link :to="starshipsUrl"> Starships /</router-link>
            <router-link :to="vehiclesUrl"> Vehicles /</router-link>
            <router-link :to="speciesUrl"> Species /</router-link>
        </div>
    </footer>
    </article>
</template>

<script>
export default {
  name: "Film",
  props: ["film"],
  computed: {
    planetsUrl: function(){
        return `/films/${this.film.title}/planets`;
    },
    sharacterstUrl: function(){
        return `/films/${this.film.title}/characters`;
    },
    starshipsUrl: function(){
        return `/films/${this.film.title}/starships`;
    },
    vehiclesUrl: function(){
        return `/films/${this.film.title}/vehicles`;
    },
    speciesUrl: function(){
        return `/films/${this.film.title}/species`;
    }
  }
};
</script>

<style>
.film {
  margin: 5px;

  border-radius: 5px;
  background-color: rgb(27, 32, 36);
  color: whitesmoke;

  width: 500px;
  display: inline-block;
}

.film main {
  padding: 10px;
  color: rgb(237, 236, 81);
  text-align: justify;
}

.film h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.film-img {
  width: 100%;
  height: 250px;
  padding-bottom: 2px;
}

/* Fix it! */
a:-webkit-any-link {
    color: white ;
}

</style>
