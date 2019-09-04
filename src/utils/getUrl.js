export default ()=>{
    let url = window.location.href;
    if(url.indexOf('/form/basic') > -1){
        return {
            openKeys: ['form'],
            selectedKeys: ['basic-form']
        }
    }else if(url.indexOf('/form/step') > -1){
        return {
            openKeys: ['form'],
            selectedKeys: ['step-form']
        }
    }else if(url.indexOf('/form/advanced') > -1){
        return {
            openKeys: ['form'],
            selectedKeys: ['advanced-form']
        }
    }else if(url.indexOf('/list/table') > -1){
        return {
            openKeys: ['list'],
            selectedKeys: ['table-list']
        }
    }else if(url.indexOf('/list/basic') > -1){
        return {
            openKeys: ['list'],
            selectedKeys: ['basic-list']
        }
    }else if(url.indexOf('/list/card') > -1){
        return {
            openKeys: ['list'],
            selectedKeys: ['card-list']
        }
    }else if(url.indexOf('/profile/basic') > -1){
        return {
            openKeys: ['profile'],
            selectedKeys: ['basic-profile']
        }
    }else if(url.indexOf('/profile/advanced') > -1){
        return {
            openKeys: ['profile'],
            selectedKeys: ['advanced-profile']
        }
    }else if(url.indexOf('/dashboard/analysis') > -1){
        return {
            openKeys: ['dashboard'],
            selectedKeys: ['analysis']
        }
    }else if(url.indexOf('/dashboard/workplace') > -1){
        return {
            openKeys: ['dashboard'],
            selectedKeys: ['workplace']
        }
    }else if(url.indexOf('/account/center') > -1){
        return {
            openKeys: ['account'],
            selectedKeys: ['center']
        }
    }else if(url.indexOf('/account/setting') > -1){
        return {
            openKeys: ['account'],
            selectedKeys: ['setting']
        }
    }
}