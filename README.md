# vue-prerender

> If you want to use vue to develop websites and also need to improve the few pages of SEO, you can use prerendering, prerendering can improve SEO just as well as SSR, with significantly less setup.

## 1、Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 2、prerender-spa-plugin插件的使用
``` js
// webpack.prod.conf.js
var Path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  // ...
  plugins: [
    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      Path.join(__dirname, '../dist'),
      // List of routes to prerender
      [ '/', '/me' ]
    )
  ]
}
```
参考地址：[`prerender-spa-plugin`](https://github.com/chrisvfritz/prerender-spa-plugin)
## 3、sass 安装和使用
```
//安装如下(如mac安装遇到权限问题需加 sudo gem install sass)
gem install sass
gem install compass

//更新sass
gem update sass

//查看sass版本
sass -v

//单文件转换命令
sass input.scss output.css

//单文件监听命令
sass --watch input.scss:output.css

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
```
参考地址：[`sass`](https://www.sass.hk/install/)