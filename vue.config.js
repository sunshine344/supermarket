/** 
 * @author ms.wu
 * @create 2022-01-04 4:39 PM
 * @description webpack配置文件
 */

module.exports = {
    lintOnSave:false,
    pages:{
        index:{
            template:'./public/index.html',
            entry:'./src/main.js'
        }
    },
    devServer:{
        open:true,
        port:9898,
        proxy:{
            '/apis':{
                target:'http://www.shuiyue.info:12600',
                pathRewrite:{'/apis':''}
            }
        }
    }
}