import Axios from 'axios'
import store from '../store'

const Ajax = Axios.create({
    timeout:5000,
    baseURL:'/apis'
})

Ajax.interceptors.request.use(function(congig){
    let token = store.getters['common/token']
    if(congig.url !== '/user/login'){
        if(!!token) {
            congig.headers.token = token
            return congig
        }else{
            return Promise.reject({code:403,message:'token数据已丢失或已失效，请重新登录'})
        }
    }else{
        return congig
    }
})

export default function(req){
    if(!req || req.constructor !== Object) throw new Error('调用异步请求方法，请求参数必须为一个对象')
    if(!req.url) throw new Error('调用异步请求方法，url地址必传')
    
    return new Promise(resolve => {
        Ajax.request({
            url:req.url,
            method:req.method || 'GET',
            data:req.data || {},
            params:req.params || {}
        }).then(function({data}){
            resolve(data)
        }).catch(function(err){
            resolve(err)
        })
    })
}