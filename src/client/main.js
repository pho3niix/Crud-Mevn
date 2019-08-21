import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

new Vue(
    {
        router,
        render: h => h(App),
    }
).$mount('#app')

/**Code trsh */
// import App from './App.vue';
// import router from './router';
// import App from './views/Home.vue';


// Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title;
//     next();
//   });
