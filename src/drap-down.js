import { GlobalVariable } from './global'
import { initCss } from './style'
import {
    init,
    touchend,
    touching,
    touched,
    bindTouchstart,
    bindTouchmove,
    bindTouchend,
    unbindTouchmove,
    unbindTouchend,
    staticTouchstart,
    staticTouchmove,
    staticTouchend,
    rollbackSpeed
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
    bindTouchstart()
    bindTouchmove()
    bindTouchend()
    GlobalVariable.dropDown.addEventListener('touchmove', touching)
    GlobalVariable.dropDown.addEventListener('touchend', touched)
    GlobalVariable.staticElement.on('touchstart', staticTouchstart)
    GlobalVariable.staticElement.on('touchmove', staticTouchmove)
    GlobalVariable.staticElement.on('touchend', staticTouchend)

    // 初始化样式
    GlobalVariable.cssParams = cssParams
    initCss(this, cssParams)
}

$(function () {
    GlobalVariable.dropDown.scrollTop = 300
    $(GlobalVariable.dropDown).scroll((event) => {
        let scrollTop = GlobalVariable.dropDown.scrollTop
        if (!GlobalVariable.scrollIntervel) {
            GlobalVariable.scrollIntervel = scrollTop
        }
        let letiable = scrollTop - GlobalVariable.scrollIntervel
        GlobalVariable.scrollIntervel = scrollTop
        if (scrollTop === 0 && GlobalVariable.dropDown.style.paddingTop === '0px') {
            setTimeout(reset, 100)
        }
        if (scrollTop <= 300 && GlobalVariable.dropDown.style.paddingTop !== '0px') {
            if (!GlobalVariable.upDownFlag) {
                console.log('scroll down')
                let intervel = 0
                intervel = rollbackSpeed(scrollTop, 100)
                GlobalVariable.dropDown.scrollTop += intervel
            }
        }
        if (scrollTop <= 100 && GlobalVariable.dropDown.style.paddingTop !== '0px') {
            GlobalVariable.dropDown.scrollTop = 100
        }
        // if (letiable < 0 && letiable !== -300 && GlobalVariable.dropDown.style.paddingTop === '0px') {
        //     console.log('ddd')
        //     GlobalVariable.dropDown.style.paddingTop = '300px'
        //     GlobalVariable.dropDown.scrollTop += 300
        // }
        if (letiable < 0 && scrollTop > 300 && !GlobalVariable.touching && !GlobalVariable.reset) {
            $('#header p').html('delete padding')
            console.log('delete padding')
            GlobalVariable.reset = true
            GlobalVariable.dropDown.scrollTop -= 300
            GlobalVariable.dropDown.style.paddingTop = '0px'
        }
    })
})

function reset () {
    $('#header p').html('reset')
    GlobalVariable.dropDown.style.paddingTop = '300px'
    GlobalVariable.dropDown.scrollTop += 300
    GlobalVariable.reset = false
    bindTouchmove()
    bindTouchend()
}
