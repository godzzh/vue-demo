import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
        todoList: []
    },
    mutations: {
        ADD_COUNT(state){
            state.count += 1;
        },
        ADD_ITEM(state, data){
            state.todoList = [{ complete: false, value: data }, ... state.todoList ]
        },
        TOGGLE_ITEM(state, i){
            state.todoList.filter((todo, index)=> index === i ? todo.complete = !todo.complete : todo )
        }
    }
})

export default store;