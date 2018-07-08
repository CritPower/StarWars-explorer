<template>
    <article class="film">
    <header>
        <h3>{{this.film.title}}</h3>
        
    </header>
    <main>
        <div>{{this.film.opening_crawl}}</div>
    </main>
    <footer>
        <img class="film-img" src="https://d32xvgr96w2oxp.cloudfront.net/2018/02/death-star-pet-cave.jpg">
        <div>
            Planets / Starships / Vehicles / Species
        </div>
    </footer>
    </article>
</template>

<script>
export default {
  name: "Film",
  props: ["film"]
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

.film-img{
    width: 100%;
    height: 250px;
    padding-bottom: 2px; 
}
</style>
