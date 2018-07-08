<template>
    <div class="planet-block">
        <div>
            <span>{{planet.id}}</span>
        </div>
        <div class="img-container">
        <img class="planet-img" src="http://cdn.24.co.za/files/Cms/General/d/6693/89abdea4c6da44918dc52a0887e14648.jpg">
        </div>
        <div>
            <span>{{planet.name}}</span>
        </div>
        <div>
            <span>Size: {{planetSize}}</span>
        </div>
        <div>
            <span>{{planet.color}}</span>
        </div>
        <footer class="planet-footer">
        <span><a class="planet-details-link">Explore!</a></span>
        </footer>
    </div>
</template>

<script>
export default {
  name: "Planet",
  props: ["planet"],
  computed: {
    planetSize: function() {
      if (this.planet.diameter === "unknown" || this.planet.diameter == 0) {
        return "We don't know :C";
      } else if (this.planet.diameter > 12742) {
        return "Bigger then Eath!";
      } else if (this.planet.diameter < 12742) {
        return "Smaller then Eath!";
      } else {
        return "OMG same size!";
      }
    }
  }
};
</script>

<style>
.planet-block {
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

.planet-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
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
.planet-details-link {
  color: whitesmoke;
}
.planet-footer{
    background-color: black;
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