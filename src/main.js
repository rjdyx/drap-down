// 引入css文件
require('css/keyframes.css')
require('css/animation.css')
if (process.env.NODE_ENV === 'development') {
    require('../example/css/reset.css')
    require('../example/css/index.css')
}
// 引入下拉插件
require('./drap-down')
require('./index')
