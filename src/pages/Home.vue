<template>
    <a-layout class="home-page">
        <a-layout-sider class="sider" :collapsed='collapsed' v-if="this.$store.state.App.device !== 'mobile'">
            <div class="logo">
                <img src="https://preview.pro.loacg.com/assets/logo.f3103225.svg" alt="">
                <h3 v-show="!collapsed">Vue demo</h3>
            </div>
            <SiderMenu :collapsed='collapsed' />
        </a-layout-sider>
        <a-layout>
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
                            <router-link to='/'>
                                <a-icon type='user' style="marginRight:10px;"/><span class="sp">个人中心</span>
                            </router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <router-link to='/'>
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
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </a-layout>
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
        console.log(App);
    }
}
</script>

<style lang="less" scoped>
    .home-page{
        .sider{
            height: 100vh;
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
    }
</style>