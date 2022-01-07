import Ajax from "./Ajax"

// 登录接口
export function userLoginApi(data){
    return Ajax({
        url:'/user/login',
        method:'POST',
        data
    })
}