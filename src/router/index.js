/** 
 * @author ms.wu
 * @create 2022-01-04 4:57 PM
 * @description 路由定义
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// 注册
Vue.use(Router)

// 后端提供数据
let routeData = [
    {path:'/login',notLogin: true},
    {path:'/home'},
    {path:'/user'},
    {path:'/useredit'},
]

let routes=[]

// 遍历数据，将数组每条数据放入routes中
for (let route of routeData) {
    let component = () => import(`../pages${route.path}`)
    routes.push({
        path:route.path,
        meta:{notLogin:route.notLogin},
        component
    })
}

const router = new Router({
    routes:[
        {path:'/', redirect:'/login'},
        ...routes
    ]
})

// 页面跳转拦截
router.beforeEach(function(to,from,next){
    // 判断跳转是否要权限拦截
    // 如果不需要拦截
    if(to.meta.notLogin){
        next()
    }else{
        // 读取token数据，判断是否有token
        let token = store.getters['common/token']
        if(!!token){
            next()
        }else{
            next('/login')
        }
    }
})

export default router

