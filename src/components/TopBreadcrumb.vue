<template>
    <div class="breadcrumbtop">
        <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>{{menu}}</a-breadcrumb-item>
            <a-breadcrumb-item>{{item}}</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>
<script>
export default {
    name: 'TopBreadcrumb',
    props: {
        menu: String,
        item: String
    }
}
</script>
<style lang="less">
    .breadcrumbtop{
        padding: 20px 30px;
        background: #fff;
        box-shadow: 0 -2px 2px #eee;
    }
</style>