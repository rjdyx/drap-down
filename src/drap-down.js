import { GlobalVariable } from './global'
import { initCss } from './style'
import {
    init,
    touchend,
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
    // 将选中元素包裹起来，使用外层元素实现拖动效果
    let wrapElement = 'fontground-' + new Date().getTime()
    this.wrap('<div id="' + wrapElement + '"></div>')
    let parent = $('#' + wrapElement)
    // 因为JQuery的on事件绑定是事件冒泡，而本插件应该使用事件捕捉
    // 故获取DOM对象，然后使用addEventListener进行事件捕捉形式的事件绑定
    GlobalVariable.dropDown = this.get(0)
    GlobalVariable.parentOrigin = parent.get(0)

    // 获取静止元素的JQuery对象
    GlobalVariable.staticElement = $('#' + staticElementId)

    // 触发事件绑定
    bindTouchstart()
    bindTouchmove()
    bindTouchend()
    GlobalVariable.staticElement.on('touchmove', staticTouchmove)

    // 初始化样式
    GlobalVariable.cssParams = cssParams
    initCss(this, cssParams)
}

$(() => {
    GlobalVariable.dropDown.addEventListener('DOMSubtreeModified', () => {
        GlobalVariable.dropDownHeight = $(GlobalVariable.dropDown).height()
    })
})
