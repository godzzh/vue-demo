<template>
    <div class="hello">
        <a-button type="primary" @click="Toggle">点我</a-button>
        <a-input v-model="value"></a-input>
        <p>{{msg}}</p>
        <transition name="fade">
            <p v-if="show">{{value}}</p>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data(){
        return{
            show: true,
            value: ''
        }
    },
    methods: {
        Toggle(){
            this.show = !this.show
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        width: 500px;
        margin: 0 auto;
    }
    p{
        font-size: 24px;
        font-family: '微软雅黑';
    }
    .fade-enter-active, .fade-leave-active {
        transition: transform .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: scale(0)
    }
</style>
