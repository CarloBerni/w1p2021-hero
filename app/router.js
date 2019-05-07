import Vue from 'vue';
import Router from 'vue-router';

import home from './components/Home.vue';
import page from './components/Page.vue';
import page2 from './components/Page2.vue';
import characters from './components/Characters.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/page',
      name: 'page',
      component: page,
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2,
    },
    {
      path: '/characters',
      name: 'characters',
      component: characters,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
