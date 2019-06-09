import Vue from 'vue';
import Router from 'vue-router';
import VMain from './components/VMain.vue';
import VStart from './components/VStart.vue';
import VGame from './components/VGame.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: VMain,
      children: [
        {
          path: '',
          name: 'start',
          component: VStart,
        },
        {
          path: 'game',
          name: 'game',
          component: VGame,
        },
      ],
    },
  ],
});
