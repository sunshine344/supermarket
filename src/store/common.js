/** 
 * @author ms.wu
 * @create 2022-01-04 5:26 PM
 * @description 通用模块的状态数据定义
 */

export default {
    // 开启命名空间
    namespaced:true,
    state:{
        token:''
    },
    getters:{
        token:state => state.token
    },
    actions:{
        tokenAct({commit},token){
            commit('mutationToken',token)
        }
    },
    mutations:{
        mutationToken(state,token){
            state.token = token
        }
    }

}