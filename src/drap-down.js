import { GlobalVariable } from './global'
import { initCss } from './style'
import {
    init,
    touchstart,
    touchmove,
    touchend,
    staticTouchstart,
    staticTouchmove,
    staticTouchend
} from './fn'

/**
 * 插件初始化函数
 * @param  {string} staticElementId 静止元素的id
 * @param  {Object} cssParams       模块样式
 */
$.fn.initDropDown = function ({staticElementId, cssParams = {}}) {
    // 初始化全局变量
    init(GlobalVariable)

    // 因为JQuery的on事件绑定是事件冒泡，而本插件应该使用事件捕捉
    // 故获取DOM对象，然后使用addEventListener进行事件捕捉形式的事件绑定
    GlobalVariable.dropDown = this.get(0)

    // 获取静止元素的JQuery对象
    GlobalVariable.staticElement = $('#' + staticElementId)

    // 触发事件绑定
    GlobalVariable.dropDown.addEventListener('touchstart', touchstart)
    GlobalVariable.dropDown.addEventListener('touchmove', touchmove)
    GlobalVariable.dropDown.addEventListener('touchend', touchend)
    GlobalVariable.staticElement.on('touchstart', staticTouchstart)
    GlobalVariable.staticElement.on('touchmove', staticTouchmove)
    GlobalVariable.staticElement.on('touchend', staticTouchend)

    // 初始化样式
    GlobalVariable.cssParams = cssParams
    initCss(this, cssParams)
}

$(function () {
    GlobalVariable.dropDown.scrollTop = 300
    $(GlobalVariable.dropDown).scroll(() => {
        let scroll = GlobalVariable.dropDown.scrollTop
        if (scroll > 300 && !GlobalVariable.touching && !GlobalVariable.reset) {
            console.log('i')
            GlobalVariable.reset = true
            GlobalVariable.dropDown.scrollTop -= 300
            GlobalVariable.dropDown.style.paddingTop = '0px'
        }
        if (scroll === 0) {
            setTimeout(reset, 100)
        }
        if (scroll <= 100) {
            GlobalVariable.dropDown.scrollTop = 100
        }
    })
})

function reset () {
    GlobalVariable.dropDown.style.paddingTop = '300px'
    GlobalVariable.dropDown.scrollTop += 300
    GlobalVariable.reset = false
}
