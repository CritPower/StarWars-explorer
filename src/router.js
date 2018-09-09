import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import PlanetGallery from './components/Planets/PlanetGallery.vue';
import FilmViewer from './components/Films/FilmViewer.vue';
import PersonViewer from './components/Person/PersonViwer.vue';
import PersonDetails from './components/Person/PersonDetails.vue';
import StarshipViewer from './components/Starships/StarshipViewer.vue';
import StarshipDetails from './components/Starships/StarshipDetails.vue';
import VihecleViewer from './components/Vehicles/VehicleViwer.vue';
import VehicleDetails from './components/Vehicles/VehicleDetails.vue';
import SpeciesViewer from './components/Species/SpeciesViewer.vue';
import SpeciesDetails from './components/Species/SpeciesDetails.vue';
import PlanetDetails from './components/Planets/PlanetDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/planets',
      name: 'planets',
      component: PlanetGallery,
    },
    {
      path: '/planets/:title',
      name: 'planetDetails',
      component: PlanetDetails,
    },
    {
      path: '/person/:name',
      name: 'personDetails',
      component: PersonDetails,
    },
    {
      path: '/starships/:name',
      name: 'starshipDetails',
      component: StarshipDetails,
    },
    {
      path: '/films',
      name: 'films',
      component: FilmViewer,
    },
    {
      path: '/starships',
      name: 'starships',
      component: StarshipViewer,
    },
    {
      path: '/characters',
      name: 'characters',
      component: PersonViewer,
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VihecleViewer,
    },
    {
      path: '/vehicles/:name',
      name: 'VehicleDetails',
      component: VehicleDetails,
    },
    {
      path: '/species',
      name: 'species',
      component: SpeciesViewer,
    },
    {
      path: '/species/:name',
      name: 'speciesDetails',
      component: SpeciesDetails,
    },
    {
      path: '/films/:title/planets',
      name: 'filmPlanets',
      component: PlanetGallery,
    },
    {
      path: '/films/:title/characters',
      name: 'filmCharacters',
      component: PersonViewer,
    },
    {
      path: '/films/:title/starships',
      name: 'filmStarships',
      component: StarshipViewer,
    },
    {
      path: '/films/:title/vehicles',
      name: 'filmVehicles',
      component: VihecleViewer,
    },
    {
      path: '/films/:title/species',
      name: 'filmSpecies',
      component: SpeciesViewer,
    },
  ],
});
