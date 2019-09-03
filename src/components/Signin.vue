<template>
    <div class="signin-page">
        <a-row type="flex" justify="center" align="top" class="form">
            <a-col :xxl="{span: 5}" :xl="{span: 6}" :lg="{span: 8}" :md="{span: 10}" :sm="{span: 14}" :xs="{span: 22}">
                <h4>注册</h4>
                <a-form :form="form" @submit="onSubmit">
                    <a-form-item>
                        <a-input placeholder='邮箱：123456@qq.com' size="large" 
                            v-decorator="[
                                'email',
                                {rules: [
                                    { required: true, message: '请输入邮箱' },
                                    { type: 'email', message: '请输入正确的邮箱地址' }
                                ]}
                            ]"
                        ></a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input placeholder='至少6位密码：123456' size="large" type="password"
                            v-decorator="[
                                'password',
                                {rules: [{ required: true, message: '请输入密码' }]}
                            ]"
                        ></a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input placeholder='确认密码' size="large" type="password"
                            v-decorator="[
                                'confirm',
                                {rules: [
                                    { required: true, message: '请输入密码' },
                                    { validator: compareToFirstPassword }
                                ]}
                            ]"
                        ></a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input-group compact size="large">
                            <a-select defaultValue="+86" size="large" style="width: 25%">
                                <a-select-option value="+86">+86</a-select-option>
                            <a-select-option value="+87">+87</a-select-option>
                            </a-select>
                            <a-input style="width: 75%" placeholder='手机号：13012345678' 
                                v-decorator="[
                                    'phone',
                                    {rules: [{ required: true, message: '请输入手机号' }]}
                                ]"
                            />
                        </a-input-group>
                    </a-form-item>
                    <a-form-item>
                        <a-row type='flex' justify='space-between'>
                            <a-col :span='14'>
                                <a-input placeholder='验证码：123456' size="large"
                                    v-decorator="[
                                        'code',
                                        {rules: [{ required: true, message: '请输入验证码' }]}
                                    ]"
                                />
                            </a-col>
                            <a-col :span='9'>
                                <a-button size="large" block @click="getCode" :disabled="sendCode">{{message}}</a-button>
                            </a-col>
                        </a-row>
                    </a-form-item>
                    <a-form-item>
                        <a-row type='flex' justify='space-between'>
                            <a-col :span='12'>
                                <a-button size="large" block type="primary" html-type="submit" :loading="signin">注册</a-button>
                            </a-col>
                            <a-col :span='10'>
                                <router-link to='/user/login'>
                                    <p style="text-align:right">使用已有账号登录</p>
                                </router-link>
                            </a-col>
                        </a-row>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import axios from '../utils/axios';
export default {
    data(){
        return{
            form: this.$form.createForm(this),
            message: '获取验证码',
            sendCode: false,
            signin: false
        }
    },
    methods: {
        // 提交注册
        onSubmit(e){
            e.preventDefault();
            const _that = this;
            this.form.validateFields(async (err, values) => {
                if(!err){
                    _that.signin = true;
                    let res = await axios("/api/signin", 'post', values);
                    if(res.data.status === 200){
                        _that.$message.success(res.data.message, 1, ()=>_that.$router.push({ path: '/' }));
                    }else{
                        _that.signin = false;
                        _that.$message.error(res.data.message);
                    }
                }
            });
        },
        // 确认密码
        compareToFirstPassword(rule, value, callback){
            const form = this.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('两次密码输入不一样');
            } else {
                callback();
            }
        },
        // 获取验证码
        getCode(){
            const _that = this;
            this.form.validateFields(['phone'], (err, values)=>{
                if(!err){
                    let seconds = 60;
                    let setInt = setInterval(()=>{
                        seconds -= 1;
                        _that.message = `${seconds}s`;
                        _that.sendCode = true;
                        if(seconds === 0){
                            _that.message = '获取验证码';
                            _that.sendCode = false;
                            clearInterval(setInt)
                        }
                    }, 1000)
                    console.log(values)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .signin-page{
        text-align: left;
        .form{
            text-align: left;
        }
    }
</style>