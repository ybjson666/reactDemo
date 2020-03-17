import axios from 'axios';

const service=axios.create();

service.interceptors.request.use((config)=>{
    
    config.data=Object.assign({},config.data,{
        access_token:localStorage.getItem('appToken')||"",
        uid:localStorage.getItem('uid')||"",
        tenantid:'default',
        stag:'A'
    })
    return config
})
service.interceptors.response.use((res)=>{
    return res.data;
})
export const $post=(url,data)=>{
     return service({
         method:'post',
         url,
         data,
         transformRequest:[function (data) {//将默认提交方式改为formData形式
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '='+ encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
}

export const $get=(url)=>{
    return service({method:'get',url,headers:{
        access_token:localStorage.getItem('appToken')||"",
        uid:localStorage.getItem('uid')||"",
        tenantid:'default',
        stag:'A'
    }})
}