<template>
    <a-menu
        :defaultSelectedKeys="selectedKeys"
        :openKeys="openKeys"
        mode="inline"
        @openChange="onOpenChange"
        theme="dark"
        :inlineCollapsed="collapsed"
    >
        <a-sub-menu key="form">
            <span slot="title"><a-icon type="edit" /><span>表单页</span></span>
            <a-menu-item key="base-form">基础表单</a-menu-item>
            <a-menu-item key="step-form">分布表单</a-menu-item>
            <a-menu-item key="advanced-form">高级表单</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="list">
            <span slot="title"><a-icon type="table" /><span>列表页</span></span>
            <a-menu-item key="table-list">查询表格</a-menu-item>
            <a-menu-item key="basic-list">标准表格</a-menu-item>
            <a-menu-item key="card-list">卡片表格</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="profile">
            <span slot="title"><a-icon type="profile" /><span>详情页</span></span>
            <a-menu-item key="basic-profile">基础详情页</a-menu-item>
            <a-menu-item key="advanced-profile">高级详情页</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="dashboard">
            <span slot="title"><a-icon type="dashboard" /><span>仪表盘</span></span>
            <a-menu-item key="analysis">分析页</a-menu-item>
            <a-menu-item key="workplace">工作台</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="account">
            <span slot="title"><a-icon type="user" /><span>个人页</span></span>
            <a-menu-item key="center">个人中心</a-menu-item>
            <a-menu-item key="setting">个人设置</a-menu-item>
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
            selectedKeys: ['base-form']
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
    },
}
</script>