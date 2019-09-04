<template>
    <a-row type="flex" justify="center" align="top" class="login">
        <a-col :xxl="{span: 5}" :xl="{span: 6}" :lg="{span: 8}" :md="{span: 10}" :sm="{span: 14}" :xs="{span: 22}">
            <a-form :form="form" @submit="onSubmit">
                <a-tabs :defaultActiveKey="current" @change="changeCurrent">
                    <a-tab-pane tab="账号密码登录" key="1">
                        <a-form-item class="form-item">
                            <a-input placeholder='账户：admin' size="large"
                                v-decorator="[
                                    'username',
                                    {rules: [{ required: true, message: '请输入用户名' }]}
                                ]"
                            >
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item>
                        <a-form-item class="form-item">
                            <a-input placeholder='密码：admin' type="password" size="large"
                                v-decorator="[
                                    'password',
                                    {rules: [{ required: true, message: '请输入密码' }]}
                                ]"
                            >
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        </a-form-item>
                    </a-tab-pane>
                    <a-tab-pane tab="手机号登录" key="2" forceRender>
                        <a-form-item class="form-item">
                            <a-input placeholder='手机号：13012345678' size="large"
                                v-decorator="[
                                    'phone',
                                    {rules: [{ required: true, message: '请输入手机号' }]}
                                ]"
                            >
                                <a-icon slot="prefix" type="mobile" />
                            </a-input>
                        </a-form-item>
                        <a-form-item class="form-item">
                            <a-row type='flex' justify='space-between'>
                                <a-col :span='14'>
                                    <a-input placeholder='验证码：123456' size="large"
                                        v-decorator="[
                                            'code',
                                            {rules: [{ required: true, message: '请输入验证码' }]}
                                        ]"
                                    >
                                        <a-icon slot="prefix" type="mail" />
                                    </a-input>
                                </a-col>
                                <a-col :span='9'>
                                    <a-button size="large" block @click="getCode" :disabled="sendCode">{{message}}</a-button>
                                </a-col>
                            </a-row>
                        </a-form-item>
                    </a-tab-pane>
                </a-tabs>
                <div class="content001">
                    <a-checkbox>自动登录</a-checkbox>
                    <a href="#">忘记密码</a>
                </div>
                <a-button block type="primary" size="large" html-type="submit" :loading="submit">登录</a-button>
            </a-form>
            <div class="content002">
                <p>其他方式登录</p>
                <router-link to='/user/signin'>注册用户</router-link>
            </div>
        </a-col>
    </a-row>
</template>

<script>
import axios from '../utils/axios';
export default {
    data () {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this),
            current: "1",
            message: '获取验证码',
            sendCode: false,
            submit: false
        };
    },
    methods:{
        // 登录按钮
        onSubmit(e){
            e.preventDefault();
            const _that = this;
            if(this.current === '1'){
                this.form.validateFields(['username', 'password'], async (err, values) => {
                    if (!err){
                        let _data = values;
                        let res = await axios('/api/login', 'post', _data);
                        _that.submit = true;
                        if(res.data.status === 200){
                            _that.$message.success(res.data.message, 1, ()=> _that.$router.replace({ path: '/' }))
                        }else{
                            _that.submit = false;
                            _that.$message.error(res.data.message)
                        }
                    }
                });
            }else if(this.current === '2'){
                this.form.validateFields(['phone', 'code'], async (err, values) => {
                    if (!err) {
                        let _data = values;
                        let res = await axios('/api/login', 'post', _data);
                        _that.submit = true;
                        if(res.data.status === 200){
                            _that.$message.success(res.data.message, 1, ()=> _that.$router.replace({ path: '/' }))
                        }else{
                            _that.submit = false;
                            _that.$message.error(res.data.message)
                        }
                    }
                });
            }
        },
        // 切换tabs
        changeCurrent(e){
            this.current = e
        },
        // 获取验证码
        getCode(){
            const _that = this;
            this.form.validateFields(['phone'], async (err, value)=>{
                if(!err){
                    let second = 60;
                    _that.$message.success('发送验证成功')
                    let setInt = setInterval(()=>{
                        second -= 1;
                        _that.message = `${second}s`;
                         _that.sendCode = true;
                        if(second === 0){
                            _that.message = '获取验证码';
                            _that.sendCode = false;
                            clearInterval(setInt)
                        }
                    }, 1000)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .login{
        .form-item{
            text-align: left;
            margin-bottom: 10px;
        }
        .content001{
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .content002{
            margin-top: 25px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>