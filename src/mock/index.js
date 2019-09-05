import Mock from 'mockjs';

Mock.mock('/api/login', 'post', data=>{
    let req = JSON.parse(data.body);
    if((req.username === 'admin' && req.password === 'admin') || (req.phone === '13012345678' && req.code === '123456')){
        return {
            status: 200,
            message: '登录成功'
        }
    }else{
        return {
            status: 201,
            message: '账号或密码错误'
        }
    }
})

Mock.mock('/api/signin', 'post', data=>{
    let req = JSON.parse(data.body);
    if(req.email === '123456@qq.com' && req.password === '123456' && req.phone === '13012345678' && req.code === '123456'){
        return {
            status: 200,
            message: '注册成功'
        }
    }else{
        return {
            status: 201,
            message: '注册信息输入有误'
        }
    }
})

Mock.mock('/api/basic-form', 'post', data=>{
    return {
        status: 200,
        message: '提交成功'
    }
})