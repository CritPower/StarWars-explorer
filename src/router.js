import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import PlanetGallery from './components/PlanetGallery.vue';
import FilmViewer from './components/FilmViewer.vue';



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
      component: PlanetGallery
    },
    {
      path: '/films',
      name: 'films',
      component: FilmViewer
    },
    {
      path: '/films/:title/planets',
      name: 'filmPlanets',
      component: PlanetGallery
    }
  ],
});