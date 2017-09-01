import { initCss } from './style'

let GlobalVariable = null

function init (GlobalVariableParams) {
    GlobalVariable = GlobalVariableParams
}

/**
 * 滚动元素的触摸开始函数
 * @param  {object} event 触摸事件对象
 */
function touchstart (event) {
    // 获取第一个触摸点
    let touch = event.targetTouches[0]
    // 记录第一个触摸点的y坐标
    GlobalVariable.globalYPosition = touch.pageY
    // 清除class
    $(GlobalVariable.dropDown).removeClass('slideInUp')
    if (GlobalVariable.dropDown.style.paddingTop === '0px' && GlobalVariable.dropDown.scrollTop <= 300) {
        console.log('inini')
        GlobalVariable.dropDown.style.paddingTop = '300px'
        GlobalVariable.dropDown.scrollTop = 300
    }
}

/**
 * 滚动元素的触摸移动过程函数
 * @param  {object} event 触摸事件对象
 */
function touchmove (event) {
    GlobalVariable.touching = true
    // 获取第一个触摸点
    let touch = event.targetTouches[0]
    // 获取本次触摸点与上次触摸点的y间距
    let letiable = touch.pageY - GlobalVariable.globalYPosition
    // 记录本次触摸点的y坐标
    GlobalVariable.globalYPosition = touch.pageY
    // 获取元素当前的y坐标
    let tmp = GlobalVariable.dropDown.style.top
    let now = (tmp).substring(0, tmp.length - 2)
    GlobalVariable.scrollTop = GlobalVariable.dropDown.scrollTop
    console.log(GlobalVariable.scrollTop)
    // if (GlobalVariable.dropDown.scrollTop < 30) {
    //     console.log('in')
    //     event.preventDefault()
    //     GlobalVariable.dropDown.scrollTop = 30
    // }
    if (letiable < 0 || GlobalVariable.scrollTop > 300) {
        GlobalVariable.flag = false
    } else {
        GlobalVariable.flag = true
    }
    console.log(GlobalVariable.flag)
}

/**
 * 滚动元素的触摸结束函数
 * @param  {object} event 触摸事件对象
 */
function touchend (event) {
    // 只有触摸并移动过，才能触动自动上升回滚功能
    if (GlobalVariable.flag || GlobalVariable.dropDown.scrollTop < 300) {
        // 初始参数复原
        GlobalVariable.flag = false
        GlobalVariable.touching = false
        GlobalVariable.globalYPosition = 0
        GlobalVariable.dropDown.style.paddingTop = '300px'
        let top = 300 - GlobalVariable.scrollTop + 'px'
        console.log('top:' + top)
        if (document.styleSheets[0].cssRules[0]) document.styleSheets[0].cssRules[0].cssRules[0].style.cssText = `transform: translate3d(0px, ${top}, 0px); visibility: visible;`
        if (document.styleSheets[0].cssRules[1]) document.styleSheets[0].cssRules[1].cssRules[0].style.cssText = `transform: translate3d(0px, ${top}, 0px); visibility: visible;`
        $(GlobalVariable.dropDown).attr('class', 'slideInUp')
        GlobalVariable.dropDown.style.top = 'inherit'
        GlobalVariable.dropDown.scrollTop = 300
    }
}

/**
 * 静止元素的触摸开始函数
 * @param  {object} event 触摸事件对象
 */
function staticTouchstart (event) {
    // 阻止触摸时浏览器的缩放、滚动条滚动等
    event.preventDefault()
}

/**
 * 静止元素的触摸移动过程函数
 * @param  {object} event 触摸事件对象
 */
function staticTouchmove (event) {
    // 阻止触摸时浏览器的缩放、滚动条滚动等
    event.preventDefault()
}

/**
 * 静止元素的触摸结束函数
 * @param  {object} event 触摸事件对象
 */
function staticTouchend (event) {}

export {
    init,
    touchstart,
    touchmove,
    touchend,
    staticTouchstart,
    staticTouchmove,
    staticTouchend
}
