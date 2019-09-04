<template>
    <div class="basic-form">
        <TopBreadcrumb menu='表单页' item='基础表单'/>
        <a-button @click="getDevice">dianwo</a-button>
    </div>
</template>
<script>
import TopBreadcrumb from './TopBreadcrumb';
export default {
    name: 'BasicForm',
    components: {
        TopBreadcrumb
    },
    methods:{
        getDevice(){
            console.log(this.$store.state.App.device)
        }
    }
}
</script>
<style lang="less" scoped>
    .basic-form{
        .top{
            padding: 20px 30px;
            background: #fff;
            box-shadow: 0 -2px 2px #eee;
        }
    }
</style>