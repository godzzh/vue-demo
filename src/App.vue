<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" />
        <TodoList :list='this.$store.state.todoList' @getValue='getValue' @toggle='toggle'/> -->
        <router-view></router-view>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/TodoList.vue";
import axios from './utils/axios';
export default {
    name: "app",
    components: {
        HelloWorld,
        TodoList
    },
    data(){
        return{

        }
    },
    mounted(){
        // this.onLogin()
    },
    methods:{
        async onLogin(){
            let data = {
                id: 1
            }
            let res = await axios("/api/login", 'post', data);
            console.log(res)
        },
        getValue(e){
            this.$store.commit("ADD_ITEM", e)
        },
        toggle(i){
            this.$store.commit("TOGGLE_ITEM", i)
        }
    }
};
</script>

