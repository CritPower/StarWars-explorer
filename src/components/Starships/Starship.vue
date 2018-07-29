<template>
    <article class="starship-block">
        <header>
            <div>
                <span>{{this.starship.id}}</span>
            </div>
            <div class="img-container">
                <img class="starship-img" src="../../assets/starship.svg">
            </div>
        </header>
        <main>
            <div>
                <header>{{this.starship.name}}</header>
            </div>
            <div>
                <div>Cost: {{this.starship.cost_in_credits}}</div>
            </div>
        </main>
        <footer class="starship-footer">
            <span>
                <router-link :to="starshipUrl" class="starship-details-link">SHOW</router-link>
            </span>
        </footer>
    </article>
</template>

<script>
export default {
  name: "Starship",
  props: ["starship"],
  computed: {
    starshipUrl: function() {
      return `/starships/${this.starship.name}`;
    }
  }
};
</script>

<style>
.starship-block {
  width: 200px;
  height: 300px;
  display: inline-block;
  padding: 15px;
  margin: 5px;
  border: 1px solid grey;
  border-radius: 2%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  position: relative;
}

.starship-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0.5px solid grey;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.img-container::after {
  display: block;
  content: "";
  height: 1px;
  width: 100%;
  border: 0.5px solid grey;
  border-radius: 50%;
  background-color: grey;
}
.starship-details-link {
  color: whitesmoke;
}
.starship-footer {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.836);
  border-radius: 5px;
  position: absolute;
  bottom: 25px;
  left: 5%;
  right: 5%;
  height: 25px;
  text-align: center;
  vertical-align: middle;
  line-height: 25px;
}
</style>
