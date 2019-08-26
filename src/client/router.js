import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import notf from './components/notFound.vue';
// import About from './views/About.vue';
import Insert from './views/NewMario.vue';
import World from './views/World.vue';
// import modal from './components/editModal.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'insert',
            component: Insert,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/world',
            name: 'world',
            component: World,
            meta: {
                title: 'World'
            }
        },
        {
            path: '/NotFound',
            component: notf,
            meta: {
                title: '404 Not Found Error'
            }
        },
        {
            path: '*',
            redirect: '/NotFound'
        }
    ]
});