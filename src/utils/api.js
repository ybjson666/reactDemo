import {$post,$get} from './request';

/*获取验证码*/
export const getVerifyCode=(phone)=>{
    return $get(`/customer/api/passbacksms?phone=${phone}&tenantid=default&stag=A`)
}
export const login=()=>{
    return $post(`/api/customer/api/login`)
}