<template>
    <div>
        <a-form :form="form" @submit="onSubmit">
            <a-input v-model="value"></a-input>
        </a-form>
        <p v-for="(item, index) in list" @click="onToggle(index)" :style="item.complete ? 'text-decoration:line-through': ''">{{item.value}}</p>
    </div>
</template>
<script>
    export default {
        name: 'TodoList',
        props: {
            list: Array
        },
        data(){
            return{
                value: '',
                form: this.$form.createForm(this)
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault();
                this.$emit('getValue', this.value);
                this.value = ''
            },
            onToggle(index){
                this.$emit('toggle', index)
            }
        }
    }
</script>
<style scoped>
    p{
        line-height: 20px;
    }
</style>