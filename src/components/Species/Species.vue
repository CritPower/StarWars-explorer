<template>
    <div class="species-block">
        <div>
            <span>{{species.id}}</span>
        </div>
        <div class="img-container">
            <img class="species-img" src="../../assets/species.svg">
        </div>
        <div>
            <span>{{species.name}}</span>
        </div>
        <div>
            <span>Average lifespan: {{species.average_lifespan}}</span>
        </div>
        <div>
            <span>Eye colors: {{species.eye_colors}}</span>
        </div>
        <footer class="species-footer">
            <span>
                <router-link :to="speciesUrl" class="species-details-link">SHOW</router-link>
            </span>
        </footer>
    </div>
</template>

<script>
export default {
  name: "species",
  props: ["species"],
  computed: {
    speciesUrl: function() {
      return `/species/${this.species.name}`;
    }
  }
};
</script>

<style>
.species-block {
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

.species-img {
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
.species-details-link {
  color: whitesmoke;
}
.species-footer {
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
