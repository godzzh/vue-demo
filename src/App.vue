<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" />
        <TodoList :list='this.$store.state.todoList' @getValue='getValue' @toggle='toggle'/> -->
        <router-view></router-view>
    </div>
</template>

<script>
import axios from './utils/axios';
import { AppDeviceEnquire } from '@/utils/mixin';
export default {
    name: "app",
    mixins: [AppDeviceEnquire],
    data(){
        return{

        }
    },
    mounted(){
        // this.onLogin()
    },
};
</script>

