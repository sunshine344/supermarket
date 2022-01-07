# haha_shop haha超市管理系统

### 项目依赖
```
1、NodeJS v.12.x +
2、vue2.6.x
```

### 运行
```
1、安装依赖：cnpm install/npm install/yarn install
2、运行：npm start/yarn start
3、发布打包：npm run build
```

### 架构
```
|—— haha_shop
    |—— package.json
    |—— README.md
    |—— public
        |—— index.html
        |—— favicon.ico
    |—— src
        |—— main.js                   // 项目的实例入口 new Vue().$mount(domNode)
        |—— pages                     // 项目页面组件模块
            |—— index.vue             // 项目的路由管理文件 router-view
            |—— home                  // 功能模块
            ...
        |—— router                    // 全局路由管理模块
            |—— index.js              // 实现路由注册以及路由对象导出，要实现组件动态引入
        |—— store                     // 全局状态数据管理模块
            |—— index.js              // 实现状态数据管理对象定义以及导出
            |—— xxx.js                // 对应的模块的状态数据
        |—— style                     // 样式管理
            |—— common.less           // 通用变量、方法
            |—— index.less            // 通用样式
        |—— images                    // 项目的图片模块
        |—— apis                      // 项目的数据交互接口
            |—— Ajax.js               // 实现项目的异步请求库封装
            |—— xxxApi.js             // 项目功能的api接口定义
        |—— components                // 实现项目的自定义全局组件、过滤器、指令等
            |—— index.js              // 实现一个Vue的插件(函数、对象插件)
```