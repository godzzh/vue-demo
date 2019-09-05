<template>
    <div class="step-form">
        <TopBreadcrumb menu='表单页' item='分步表单'/>
        <div class="container">
            <a-row type="flex" justify="center" style="marginBottom: 30px;">
                <a-col :xs="22" :sm="22" :md="18" :lg="16" :xl="12" :xxl="10">
                    <a-steps :current="current">
                        <a-step title="填写转账信息"></a-step>
                        <a-step title="确认转账信息"></a-step>
                        <a-step title="完成"></a-step>
                    </a-steps>
                </a-col>
            </a-row>
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="16" :lg="14" :xl="10" :xxl="8">
                    <a-form :form="form1" @submit="onForm1Submit" v-show="current === 0">
                        <a-form-item label="付款账户" required :label-col='labelCol' :wrapper-col="wrapperCol">
                            <a-select placeholder='选择付款账户'
                                v-decorator="[
                                    'account1',
                                    {rules: [{ required: true, message: '请选择付款账户' }]}
                                ]"
                            >
                                <a-select-option value="1">853471229@qq.com</a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="收款账户" required :label-col='labelCol' :wrapper-col="wrapperCol">
                            <a-input-group compact>
                                <a-select defaultValue="支付宝" style="width: 35%">
                                    <a-select-option value="支付宝">支付宝</a-select-option>
                                    <a-select-option value="微信">微信</a-select-option>
                                </a-select>
                                <a-input style="width: 65%" placeholder='请输入收款账户' 
                                    v-decorator="[
                                        'account2',
                                        {rules: [{ required: true, message: '请选择收款账户' }]}
                                    ]"
                                />
                            </a-input-group>
                        </a-form-item>
                        <a-form-item label="收款人姓名" required :label-col='labelCol' :wrapper-col="wrapperCol">
                            <a-input placeholder='请输入收款人姓名'
                                v-decorator="[
                                    'name',
                                    {rules: [{ required: true, message: '请输入收款人姓名' }]}
                                ]"
                            />
                        </a-form-item>
                        <a-form-item label="转账金额" required :label-col='labelCol' :wrapper-col="wrapperCol">
                            <a-input placeholder='请输入转账金额'
                                v-decorator="[
                                    'money',
                                    {rules: [{ required: true, message: '请输入转账金额' }]}
                                ]"
                            />
                        </a-form-item>
                        <a-form-item style="textAlign:center;">
                            <a-button type="primary" html-type='submit'>下一步</a-button>
                        </a-form-item>
                    </a-form>
                    <a-form :form="form2" v-show="current === 1" @submit="onForm2Submit">
                        <a-alert message="确认转账后，资金将直接打入对方账户，无法退回。" type="info" closable/>
                        <a-row type='flex' justify="space-between" style="marginTop: 30px;">
                            <a-col :span='6' style="textAlign:right;">付款账户:</a-col>
                            <a-col :span='17'>853471229@qq.com</a-col>
                        </a-row>
                        <a-row type='flex' justify="space-between" style="marginTop: 30px;">
                            <a-col :span='6' style="textAlign:right;">收款账户:</a-col>
                            <a-col :span='17'>853471229@qq.com</a-col>
                        </a-row>
                        <a-row type='flex' justify="space-between" style="marginTop: 30px;">
                            <a-col :span='6' style="textAlign:right;">收款人姓名:</a-col>
                            <a-col :span='17'>zzh</a-col>
                        </a-row>
                        <a-row type='flex' justify="space-between" style="marginTop: 30px;">
                            <a-col :span='6' style="textAlign:right;">转账金额:</a-col>
                            <a-col :span='17'>￥ 5000</a-col>
                        </a-row>
                        <a-divider />
                        <a-form-item label="支付密码" :label-col="labelCol" :wrapper-col="wrapperCol" required>
                            <a-input style="width: 80%;" type="password"
                                v-decorator="[
                                    'password',
                                    {rules: [{ required: true, message: '请输入支付密码' }]}
                                ]"
                            ></a-input>
                        </a-form-item>
                        <a-form-item style="textAlign:center;">
                            <a-button type="primary" style="margin:0 10px;" html-type='submit'>提交</a-button>
                            <a-button style="margin:0 10px;" @click="current = 0">上一步</a-button>
                        </a-form-item>
                    </a-form>
                    <div class="current3" v-show="current === 2">
                        <p><a-icon type="check-circle" style="fontSize: 60px;color:#52C41A;"/></p>
                        <h2>操作成功</h2>
                        <h4>预计两小时到账</h4>
                        <div class="content">
                            <a-row type="flex" justify="space-between" style="lineHeight: 34px;">
                                <a-col :span='6' style="textAlign:right;">付款账户:</a-col>
                                <a-col :span='14' style="textAlign:left;">853471229@qq.com</a-col>
                            </a-row>
                            <a-row type="flex" justify="space-between" style="lineHeight: 34px;">
                                <a-col :span='6' style="textAlign:right;">收款账户:</a-col>
                                <a-col :span='14' style="textAlign:left;">853471229@qq.com</a-col>
                            </a-row>
                            <a-row type="flex" justify="space-between" style="lineHeight: 34px;">
                                <a-col :span='6' style="textAlign:right;">收款人姓名:</a-col>
                                <a-col :span='14' style="textAlign:left;">zzh</a-col>
                            </a-row>
                            <a-row type="flex" justify="space-between" style="lineHeight: 34px;">
                                <a-col :span='6' style="textAlign:right;">转账金额:</a-col>
                                <a-col :span='14' style="textAlign:left;">500元</a-col>
                            </a-row>
                        </div>
                        <a-button type="primary" style="margin:0 10px;" @click="current=0">再转一笔</a-button>
                        <a-button style="margin:0 10px;" @click="current=0">查看账单</a-button>
                    </div>
                </a-col>
            </a-row>
            <a-divider />
            <a-row type="flex" justify="center">
                <a-col :span="20">
                    <div class="remark">
                        <h3>说明</h3>
                        <p>转账到支付宝账户</p>
                        <h4>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h4>
                        <p>转账到银行卡</p>
                        <h4>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</h4>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import TopBreadcrumb from './TopBreadcrumb';
export default {
    name: 'BasicForm',
    components: {
        TopBreadcrumb
    },
    data(){
        return{
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
            form1: this.$form.createForm(this),
            form2: this.$form.createForm(this),
            current: 0
        }
    },
    mounted(){
        this.form2.setFieldsValue({
            password: 123456
        })
    },
    methods:{
        onForm1Submit(e){
            e.preventDefault();
            const _that = this;
            this.form1.validateFields((err, values)=>{
                if(!err){
                    _that.current = 1;
                }
            })
        },
        onForm2Submit(e){
            e.preventDefault();
            const _that = this;
            this.form2.validateFields((err, values)=>{
                if(!err){
                    _that.current = 2;
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .step-form{
        .container{
            margin: 30px 20px;
            padding: 50px 20px;
            box-shadow: 0 0 8px #ddd;
            background-color: #fff;
            .remark{
                h3,p,h4{
                    color: #888;
                }
                p{
                    margin-bottom: 0;
                }
            }
            .current3{
                text-align: center;
                margin: 20px;
                .content{
                    margin: 20px 0; 
                    background-color: rgba(230, 230, 230, .3);
                    padding: 20px;
                    border-radius: 4px;
                }
            }
        }
    }
</style>