
import Ajax from './Ajax'

// 用户部门接口
export function userDeptApi() {
    return Ajax({
        url: '/user/dept/info'
    })
}

export function userRoleApi() {
    return Ajax({
        url: '/role'
    })
}

// 保存接口
export function userSaveApi(data) {
    return Ajax({
        url: '/user/save',
        method: 'POST',
        data
    })
}

// 获取用户列表
export function userListApi(params) {
    return Ajax({
        url: '/user/info/list',
        params
    })
}

// 删除用户信息 /user/:id
export function userDeleteApi(id) {
    return Ajax({
        url: '/user/'+id,
        method: 'DELETE',
        params:{id}
    })
}