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
                { path: '/form/step', components: require('../components/StepForm.vue') },
                { path: '/form/advanced', components: require('../components/AdvancedForm.vue') },
                { path: '/list/table', components: require('../components/TableList.vue') },
                { path: '/list/basic', components: require('../components/BasicList.vue') },
                { path: '/list/card', components: require('../components/CardList.vue') },
                { path: '/profile/basic', components: require('../components/BasicProfile.vue') },
                { path: '/profile/advanced', components: require('../components/AdvancedProfile.vue') },
                { path: '/dashboard/analysis', components: require('../components/AnalysisDashboard.vue') },
                { path: '/dashboard/workplace', components: require('../components/WorkplaceDashboard.vue') },
                { path: '/account/center', components: require('../components/CenterAccount.vue') },
                { path: '/account/setting', components: require('../components/SettingAccount.vue') },
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