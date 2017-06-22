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
}

/**
 * 滚动元素的触摸移动过程函数
 * @param  {object} event 触摸事件对象
 */
function touchmove (event) {
    // 获取第一个触摸点
    let touch = event.targetTouches[0]
    // 获取本次触摸点与上次触摸点的y间距
    let letiable = touch.pageY - GlobalVariable.globalYPosition
    // 记录本次触摸点的y坐标
    GlobalVariable.globalYPosition = touch.pageY
    // 获取元素当前的y坐标
    let tmp = GlobalVariable.dropDown.style.top
    let now = (tmp).substring(0, tmp.length - 2)
    // 定义元素y坐标移动的间距变量
    let intervel = 0
    if (letiable > 0) {
        // 元素y坐标与可视化区域的顶部的间距大于零或则等于零，则可下滑；
        // 判断元素y坐标与可视化区域的顶部的间距等于零，
        // 是考虑到屏幕滚动到下方，此时下拉不应该触发模块下滑效果；
        // 也需要判断元素y坐标与可视化区域的顶部的间距大于零，
        // 不这样做的话，则无法下拉模块
        if (GlobalVariable.dropDown.scrollTop === 0) {
            // 阻止触摸时浏览器的缩放、滚动条滚动等
            event.preventDefault()
            GlobalVariable.flag = true
            // 元素匀速下滑100px，之后则减速下滑
            if (now < 100) {
                intervel = letiable
            } else {
                intervel = Math.log(now) - Math.log(now - 90)
            }
            // 防止下滑跨度过大
            if (intervel > 15) intervel = 15
            // 改变元素的y坐标，即改变元素的位置
            GlobalVariable.dropDown.style.top = now * 1.0 + intervel + 'px'
            GlobalVariable.parentOrigin.style.top = now * 1.0 + intervel + 'px'
        }
    } else if (GlobalVariable.parentOrigin.style.top.substring(0, tmp.length - 2) > 0) {
        // 阻止触摸时浏览器的缩放、滚动条滚动等
        event.preventDefault()
        // 元素y坐标递减过程中很难保证减到刚好为0，
        // 故判断其减到少于1.5px时，则让元素y坐标为0
        if (now < 1.5) {
            GlobalVariable.dropDown.style.top = '0px'
            GlobalVariable.parentOrigin.style.top = '0px'
        } else {
            // 让元素加速上升
            intervel = Math.log(now)
            GlobalVariable.dropDown.style.top = now * 1.0 - intervel + 'px'
            GlobalVariable.parentOrigin.style.top = now * 1.0 - intervel + 'px'
        }
    }
}

/**
 * 滚动元素的触摸结束函数
 * @param  {object} event 触摸事件对象
 */
function touchend (event) {
    // 只有触摸并移动过，才能触动自动上升回滚功能
    if (GlobalVariable.flag) {
        // 初始参数复原
        GlobalVariable.flag = false
        GlobalVariable.globalYPosition = 0
        let top = GlobalVariable.dropDown.style.top
        if (document.styleSheets[0].cssRules[0]) document.styleSheets[0].cssRules[0].cssRules[0].style.cssText = `transform: translate3d(0px, ${top}, 0px); visibility: visible;`
        if (document.styleSheets[0].cssRules[1]) document.styleSheets[0].cssRules[1].cssRules[0].style.cssText = `transform: translate3d(0px, ${top}, 0px); visibility: visible;`
        $(GlobalVariable.dropDown).attr('class', 'slideInUp')
        GlobalVariable.dropDown.style.top = '0px'
        GlobalVariable.parentOrigin.style.top = '0px'
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
