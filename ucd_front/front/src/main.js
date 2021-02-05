import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/page/Login.vue'
import Home from './components/page/Home.vue'
import forgot from './components/page/forgot.vue'
import Register from './components/page/Register.vue'
import rest from './components/page/rest.vue'

import './axios'
import store from './vuex'

Vue.use(VueRouter);

const routes = [{

        path: '/',
        component: Home,

    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/forgot',
        component: forgot
    },
    {
        path: '/rest/:token',
        component: rest
    },

];

const router = new VueRouter({
    mode: 'history',
    routes,
})

Vue.config.productionTip = false


new Vue({

    router,
    store,
    render: h => h(App),
}).$mount('#app')