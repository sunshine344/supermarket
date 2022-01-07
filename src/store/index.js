/** 
 * @author ms.wu
 * @create 2022-01-04 5:19 PM
 * @description 定义store对象
 */
import Vue from 'vue'
import Vuex from 'vuex'
import storePlgin from 'vuex-persistedstate'

import common from './common.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 注入插件
    plugins:[
        storePlgin({
            // 设置存储位置
            storage:window.sessionStorage
        })
    ],
    // 模块化
    modules:{
        common
    }
})

export default store
