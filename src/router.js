import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import PlanetGallery from './components/PlanetGallery.vue';
import FilmViewer from './components/FilmViewer.vue';
import PersonViewer from './components/PersonViwer.vue';
import StarshipViewer from './components/StarshipViewer.vue';
import VihecleViewer from './components/VehicleViwer.vue';
import SpeciesViewer from './components/SpeciesViewer.vue';

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
      path: '/planets/:id',
      name: 'planet',
      component: PlanetGallery,
    },
    {
      path: '/films',
      name: 'films',
      component: FilmViewer,
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
    {
      path: '/starships',
      name: 'starships',
      component: StarshipViewer
    },
    {
      path: '/characters',
      name: 'characters',
      component: PersonViewer
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VihecleViewer
    },
    {
      path: '/species',
      name: 'species',
      component: SpeciesViewer
    }
  ],
});
