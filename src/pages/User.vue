<template>
    <div class="user-page">
        <div class="content001">
            <img src="https://preview.pro.loacg.com/assets/logo.f3103225.svg" alt="">
            <h1>Vue Demo</h1>
        </div>
        <div class="content002">zzh用ant-design-vue写的一个小demo</div>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="footer">
            <div class="cnt1">
                <span>帮助</span>
                <span>隐私</span>
                <span>条款</span>
            </div>
            <div class="cnt2">Copyright © 2019 武汉网融信息技术有限公司</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user'
}
</script>

<style lang="less" scoped>
    .user-page{
        background-image: url('https://preview.pro.loacg.com/assets/background.5825f033.svg');
        background-position: center center;
        background-size: 100% 100%;
        padding: 8% 20px 10%;
        text-align: center;
        // height: 100%;
        min-height: 100vh;
        background-color: #f0f2f5;
        position: relative;
        .content001{
            display: flex;
            justify-content: center;
            align-items: center;
            h1{
                margin-bottom: 0;
                font-size: 34px;
                font-weight: bold;
            }
            img{
                width: 45px;
                height: auto;
                margin-right: 15px;
            }
        }
        .content002{
            // line-height: 45px;
            margin-top: 15px;
            color: #888;
            margin-bottom: 20px;
        }
        .container{
            margin-bottom: 20px;
        }
        .footer{
            position: absolute;
            text-align: center;
            bottom: 20px;
            width: 100%;
            left: 0;
            .cnt1, .cnt2{
                text-align: center;
                color: #888;
                line-height: 24px;
                span{
                    margin: 0 10px;
                }
            }
        }
    }
</style>