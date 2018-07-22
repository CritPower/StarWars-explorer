<template>
    <article class="vehicle-block">
        <header>
            <div>
                <span>{{this.vehicle.id}}</span>
            </div>
            <div class="img-container">
                <img class="vehicle-img" src="../assets/vehicle.svg">
            </div>
        </header>
        <main>
            <div>
                <header>{{this.vehicle.name}}</header>
            </div>
            <div>
                <div>Model: {{this.vehicle.model}}</div>
            </div>
        </main>
        <footer class="vehicle-footer">
            <span>
                <a class="vehicle-details-link">SHOW</a>
            </span>
        </footer>
    </article>
</template>

<script>
export default {
  name: "Vehicle",
  props: ["vehicle"]
};
</script>

<style>
.vehicle-block {
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

.vehicle-img {
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
.vehicle-details-link {
  color: whitesmoke;
}
.vehicle-footer {
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
