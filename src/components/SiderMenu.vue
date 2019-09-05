<template>
    <a-menu
        :defaultSelectedKeys="selectedKeys"
        :openKeys="openKeys"
        mode="inline"
        @openChange="onOpenChange"
        theme="dark"
        :inlineCollapsed="collapsed"
        @click='onMenuItem'
    >
        <a-sub-menu v-for='item in menuList' :key='item.key'>
            <span slot="title"><a-icon :type="item.iconType" /><span>{{item.title}}</span></span>
            <a-menu-item v-for='i in item.children' :key='i.key'>
                <router-link :to='i.link'>{{i.title}}</router-link>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>
<script>
import getUrl from '../utils/getUrl';
export default {
    name: 'SiderMenu',
    props: {
        collapsed: Boolean
    },
    data(){
        return{
            rootSubmenuKeys: ['form', 'list', 'profile', 'dashboard', 'account'],
            openKeys: ['form'],
            selectedKeys: ['basic-form'],
            menuList:[
                {
                    title: '表单页',
                    key: 'form',
                    iconType: 'edit',
                    children: [
                        { title: '基础表单', key: 'basic-form', link: '/form/basic' },
                        { title: '分步表单', key: 'step-form', link: '/form/step' },
                        { title: '高级表单', key: 'advanced-form', link: '/form/advanced' },
                    ]
                },
                {
                    title: '列表页',
                    key: 'list',
                    iconType: 'table',
                    children: [
                        { title: '查询表格', key: 'table-list', link: '/list/table' },
                        { title: '标准表格', key: 'basic-list', link: '/list/basic' },
                        { title: '卡片表格', key: 'card-list', link: '/list/card' },
                    ]
                },
                {
                    title: '详情页',
                    key: 'profile',
                    iconType: 'profile',
                    children: [
                        { title: '基础详情页', key: 'basic-profile', link: '/profile/basic' },
                        { title: '高级详情页', key: 'advanced-profile', link: '/profile/advanced' },
                    ]
                },
                {
                    title: '仪表盘',
                    key: 'dashboard',
                    iconType: 'dashboard',
                    children: [
                        { title: '分析页', key: 'analysis', link: '/dashboard/analysis' },
                        { title: '工作台', key: 'workplace', link: '/dashboard/workplace' },
                    ]
                },
                {
                    title: '个人页',
                    key: 'account',
                    iconType: 'user',
                    children: [
                        { title: '个人中心', key: 'center', link: '/account/center' },
                        { title: '个人设置', key: 'setting', link: '/account/setting' },
                    ]
                },
            ]
        }
    },
    beforeMount(){
        let menu = getUrl();
        this.openKeys = menu.openKeys;
        this.selectedKeys = menu.selectedKeys;
    },
    methods: {
        onOpenChange (openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        },
        onMenuItem(){
            this.$emit('onMenuItem')
        }
    },
}
</script>