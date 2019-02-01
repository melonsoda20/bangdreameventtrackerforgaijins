import Vue from 'vue';
import Router from 'vue-router';
import bandoriEvent from './components/app-content/Event/EventContent.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/event',
            component: bandoriEvent
        }
    ]
});

export default router;