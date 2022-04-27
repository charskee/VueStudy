# 笔记

## 脚手架文件分析:
    |-- node_modules 
    |-- .gitignore
    |-- README.md
    |-- babel.config.js  babel的配置文件
    |-- jsconfig.json 
    |-- output.js 通过 vue inspect > output.js 命令生成的 查看vue脚手架默认配置信息
    |-- package-lock.json 包版本控制文件 锁版本防止版本更新内容不适配
    |-- package.json 应用包配置文件
    |-- vue.config.js Vue开放的个性定制脚手架配置文件
    |-- public
    |   |-- favicon.ico 页签图标
    |   |-- index.html 主页面
    |-- src
        |-- App.vue 汇总组件
        |-- main.js 入口文件
        |-- assets  存放静态资源
        |   |-- logo.png
        |-- components  存放组件
            |-- MySchool.vue
            |-- MyStudent.vue
            |-- Mytest.vue

## 关于不同版本的Vue:
- vue.js与vue.runtime.xxx.js的区别:
    (1) vue.js是完整版的Vue，包含：核心功能+模板解析器
    (2) vue.runtime.xxx.js 是运行版本的Vue 只包含核心功能 没有模板解析器
- 因为vue.runtime.xxx.js没有模板解析器 所以不能使用template配置项，
  需要使用render函数接收到的createElement函数去指定具体内容


## vue.config.js配置文件
- 使用vue inspect > output.js 可以查看到Vue脚手架的默认配置
- 使用vue.config.js可以对脚手架进行个性化定制 详情见: https://cli.vuejs.org/zh/config/

## ref属性
- 1.被用来给元素或者子组件注册引用信息（id的替代者）
- 2.应用在html标签上获取的是真实DOM元素 应用在组件标签上是组件实例对象(vc)
- 3.使用方式：
    打标识： <h1 ref='xxx'>...</h1> 或 <School ref='xxx'> </School>
    获取: this.$refs.xxx
