<template>
    <div class="basic-form">
        <TopBreadcrumb menu='表单页' item='基础表单'/>
        <a-row type="flex" justify="center" class="container">
            <a-col :xxl="10" :xl="12" :lg="14" :md='20' :sm='24' :xs="24">
                <a-form :form='form' @submit="onSubmit">
                    <a-form-item label="标题" :label-col="labelCol" :wrapper-col="wrapperCol" required>
                        <a-input placeholder='给目标起个名字'
                            v-decorator="[
                                'title',
                                {rules: [{ required: true, message: '请输入标题' }]}
                            ]"
                        ></a-input>
                    </a-form-item>
                    <a-form-item label="起止日期" :label-col="labelCol" :wrapper-col="wrapperCol" required>
                        <a-range-picker style="width:100%" :placeholder="['开始日期','结束日期']"
                            v-decorator="[
                                'dates',
                                {rules: [{ required: true, message: '请选择起止日期' }]}
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="目标描述" :label-col="labelCol" :wrapper-col="wrapperCol" required>
                        <a-textarea style="width:100%" placeholder="请输入目标描述"
                            :autosize="{ minRows: 3, maxRows: 6 }"
                            v-decorator="[
                                'description',
                                {rules: [{ required: true, message: '请输入目标描述' }]}
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="衡量标准" :label-col="labelCol" :wrapper-col="wrapperCol" required>
                        <a-textarea style="width:100%" placeholder="请输入衡量标准"
                            :autosize="{ minRows: 3, maxRows: 6 }"
                            v-decorator="[
                                'measure',
                                {rules: [{ required: true, message: '请输入衡量标准' }]}
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="客户" :label-col="labelCol" :wrapper-col="wrapperCol" required>
                        <a-select mode="multiple"
                            style="width: 100%"
                            placeholder="请选择客户"
                            v-decorator="[
                                'client',
                                {rules: [{ required: true, message: '请选择客户' }]}
                            ]"
                        >
                            <a-select-option v-for="item in nameList" :key="item">{{item}}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="邀评人" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-select mode="multiple"
                            style="width: 100%"
                            placeholder="请选择邀评人"
                            v-decorator="['invite']"
                        >
                            <a-select-option v-for="item in nameList" :key="item">{{item}}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="权重" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-input-number :min='1' :max='100' v-decorator="['weight']" style="width:80px;"/> %
                    </a-form-item>
                    <a-form-item label="权重" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-radio-group :options="options" :value="radioValue" @change="onRadioChange"/>
                        <a-select mode="multiple"
                            v-if="radioValue==='部分公开'"
                            style="width: 100%"
                            placeholder="请选择邀评人"
                            v-decorator="['coworker']"
                        >
                            <a-select-option v-for="item in nameList" :key="item">{{item}}</a-select-option>
                        </a-select>
                        <p style="marginBottom: 0;">客户、邀评人默认被分享</p>
                    </a-form-item>
                    <a-form-item style="textAlign:center;" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-button html-type="submit" type="primary" style="margin:0 10px;" :loading="submitLoding">提交</a-button>
                        <a-button html-type="reset" type="danger" style="margin:0 10px;" :disabled="submitLoding">重置</a-button>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import TopBreadcrumb from './TopBreadcrumb';
import axios from '@/utils/axios';
export default {
    name: 'BasicForm',
    components: {
        TopBreadcrumb
    },
    data(){
        return{
            nameList: ['张无忌', '杨过', '郭靖', '令狐冲'],
            options: [ 
                { label: '公开', value: '公开' },
                { label: '部分公开', value: '部分公开' },
                { label: '不公开', value: '不公开' }
            ],
            radioValue: '公开',
            form: this.$form.createForm(this),
            labelCol: {xs:{span: 0}, sm:5, md:4, lg: 4, xl: 4, xxl: 3},
            wrapperCol: {xs:{span: 24}, sm:19, md:20, lg: 20, xl: 16, xxl: 15},
            // labelCol: { span: 0 },
            // wrapperCol: { span: 4 },
            submitLoding: false,
        }
    },
    methods:{
        // 提交表单
        onSubmit(e){
            e.preventDefault();
            const _that = this;
            this.form.validateFields( async(err, values) => {
                if (!err) {
                    _that.submitLoding = true;
                    let res = await axios('/api/basic-form', 'post', values);
                    if(res.data.status === 200){
                        _that.$message.success(res.data.message, 1, ()=>{
                            _that.submitLoding = false;
                            _that.form.resetFields();
                        });
                    }
                }
            });
        },
        // 单选框改变
        onRadioChange(e){
            this.radioValue = e.target.value;
        }
    }
}
</script>
<style lang="less">
   .basic-form{
       .container{
           padding: 0 20px;
           margin-top: 30px;
       }
   }
</style>