<template>
    <div class="home-page">
        <a-drawer :visible='!collapsed' @close='closeDrawer' width='208' 
            placement='left' 
            class="drawer"
            :closable='false'
            getContainer='.home-page'
            v-if="this.$store.state.App.device === 'mobile'"
        >
            <div class="logo">
                <img src="https://preview.pro.loacg.com/assets/logo.f3103225.svg" alt="">
                <h3>Vue demo</h3>
            </div>
            <SiderMenu :collapsed='false' @onMenuItem='onMenuItem'/>
        </a-drawer>
        <a-layout>
            <a-layout-sider class="sider" :collapsed='collapsed' v-if="this.$store.state.App.device !== 'mobile'">
                <div class="logo">
                    <img src="https://preview.pro.loacg.com/assets/logo.f3103225.svg" alt="">
                    <h3 v-show="!collapsed">Vue demo</h3>
                </div>
                <SiderMenu :collapsed='collapsed' @onMenuItem='onMenuItem'/>
            </a-layout-sider>
            <a-layout class="container">
                <a-layout-header class="header">
                    <span class="left" @click="collapsed = !collapsed">
                        <a-icon :type="!collapsed ? 'menu-fold': 'menu-unfold'" style="fontSize: 20px;color:#108ee9;"/>
                    </span>
                    <a-dropdown>
                        <p>
                            <a-avatar :src="userInfo && userInfo.avatar || ''"
                                style="marginRight: 8px;"
                            />
                            <span>{{userInfo && userInfo.name || ''}}</span>
                        </p>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <router-link to='/account/center'>
                                    <a-icon type='user' style="marginRight:10px;"/><span class="sp">个人中心</span>
                                </router-link>
                            </a-menu-item>
                            <a-menu-item>
                                <router-link to='/account/setting'>
                                    <a-icon type='setting' style="marginRight:10px;"/><span class="sp">个人设置</span>
                                </router-link>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item>
                                <router-link to='/user'>
                                    <a-icon type='logout' style="marginRight:10px;color: red;"/><span class="sp">退出登录</span>
                                </router-link>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </a-layout-header>
                <a-layout-content class="content">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer class="footer">
                    <p>
                        <span>帮助</span>
                        <span>隐私</span>
                        <span>条款</span>
                    </p>
                    <p>Copyright © 2019 武汉网融信息技术有限公司</p>
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import SiderMenu from '../components/SiderMenu';
export default {
    components: {
        SiderMenu
    },
    data(){
        return{
            collapsed: false,
            userInfo: null
        }
    },
    computed: {
        getDevice(){
            console.log(this.$store.state.App);
        }
    },
    mounted(){
        const { User, App } = this.$store.state;
        this.userInfo = User;
    },
    methods:{
        // 关闭菜单抽屉
        closeDrawer(){
            this.collapsed = true
        },
        onMenuItem(){
            if(this.$store.state.App.device === 'mobile'){
                this.collapsed = true
            }
        }
    }
}
</script>

<style lang="less">
    .home-page{
        .ant-drawer-body{
            padding: 0 !important;
            height: 100vh;
            background-color: #002140;
        }
        .logo{
            background-color: #002140;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 10px;
            img{
                width: 34px;
                height: auto;
            }
            h3{
                color: #fff;
                margin-bottom: 0;
                margin-left: 10px;
                font-size: 20px;
                white-space: nowrap;
                transform: scaleX(1);
                transition: all 2;
            }
        }
        .drawer{
            padding: 0;
            height: 100vh;
        }
        .sider{
            min-height: 100vh;
            .logo{
                background-color: #002140;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px 10px;
                margin-bottom: 15px;
                img{
                    width: 34px;
                    height: auto;
                }
                h3{
                    color: #fff;
                    margin-bottom: 0;
                    margin-left: 10px;
                    font-size: 20px;
                    white-space: nowrap;
                    transform: scaleX(1);
                    transition: all 2;
                }
            }
        }
        .container{
            // min-height: 100vh;
        }
        .header{
            background-color: #fff;
            padding-left: 0;
            padding-right: 10px;
            display: flex;
            justify-content: space-between;
            p{
                margin-bottom: 0;
                cursor: pointer;
                padding: 0 10px;
                
            }
            p:hover{
                background-color: rgba(240, 240, 240, .5);
            }
            .left{
                line-height: 64px;
                height: 64px;
                display: inline-block;
                padding: 0 10px;
                cursor: pointer;
            }
        }
        .footer{
            padding: 15px 10px 10px;
            box-shadow: 0 -2px 2px rgba(0, 0, 0, .1);
            p{
                margin-bottom: 5px;
                text-align: center;
                color: #999;
                span{
                    margin: 0 15px;
                }
            }
        }
    }
</style>