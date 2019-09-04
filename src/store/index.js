import Vue from 'vue';
import Vuex from 'vuex';

import User from './user';
import App from './app';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        User,
        App
    },
    state: {
       
    },
    mutations: {

    }
})

export default store;