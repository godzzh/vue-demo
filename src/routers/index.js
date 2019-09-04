import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', components: require('../pages/Home.vue'),
            redirect: '/form/basic',
            children: [
                { path: '/form/basic', components: require('../components/BasicForm.vue') },
            ]
        },
        { path: '/user', components: require('../pages/User.vue'), 
            redirect: '/user/login',
            children: [
                { path: 'login', components: require('../components/Login.vue')},
                { path: 'signin', components: require('../components/Signin.vue')}
            ]
        }
    ]
})

export default router