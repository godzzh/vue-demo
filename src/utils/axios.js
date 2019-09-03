import Axios from 'axios';
import { notification } from 'ant-design-vue'

export default (url, method, data)=>{
    return new Promise((resolve, reject)=>{
        Axios({
            url,
            method,
            data
        })
        .then( res=>resolve(res))
        .catch( err=>{
            let error = JSON.parse(JSON.stringify(err));
            notification.error({
                message: error.message
            })
            reject(err)
        })
    })
}