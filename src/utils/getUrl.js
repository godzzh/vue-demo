export default ()=>{
    let url = window.location.href;
    if(url.indexOf('/form/basic') > -1){
        return {
            openKeys: ['form'],
            selectedKeys: ['base-form']
        }
    }
}