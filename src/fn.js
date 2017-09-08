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
    console.log('start')
    GlobalVariable.firstScroll = GlobalVariable.dropDown.scrollTop
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
    console.log('moving')
    GlobalVariable.scrollTop = GlobalVariable.dropDown.scrollTop
    // 获取第一个触摸点
    let touch = event.targetTouches[0]
    // 获取本次触摸点与上次触摸点的y间距
    let letiable = touch.pageY - GlobalVariable.globalYPosition
    // 记录本次触摸点的y坐标
    GlobalVariable.globalYPosition = touch.pageY
    // 定义元素y坐标移动的间距变量
    let intervel = 0
    if (letiable > 0) {
        GlobalVariable.flag = true
        if (GlobalVariable.scrollTop === 300 || GlobalVariable.flag || GlobalVariable.upDownMoving) {
            if (GlobalVariable.upDownMoving) {
                GlobalVariable.upDownFlag = false
            }
            if (GlobalVariable.upDownFlag && GlobalVariable.firstScroll === 300) {
                // 阻止触摸时浏览器的缩放、滚动条滚动等
                event.preventDefault()
                intervel = rollbackSpeed(GlobalVariable.scrollTop, 70)
                GlobalVariable.dropDown.scrollTop -= intervel
            }
        }
    } else if (letiable < 0 && GlobalVariable.scrollTop < 300) {
        // 阻止触摸时浏览器的缩放、滚动条滚动等
        event.preventDefault()
        GlobalVariable.dropDown.scrollTop -= letiable
    } else if (letiable < 0 && GlobalVariable.scrollTop > 300) {
        GlobalVariable.upDownMoving = true
    }
    if (letiable > 0 && GlobalVariable.scrollTop <= 100) {
        GlobalVariable.dropDown.scrollTop = 100
    }
}

/**
 * 滚动元素的触摸结束函数
 * @param  {object} event 触摸事件对象
 */
function touchend (event) {
    console.log('end')
    let scrollTop = GlobalVariable.dropDown.scrollTop
    // 只有触摸并移动过，才能触动自动上升回滚功能
    if (GlobalVariable.flag && scrollTop < 300) {
        // 初始参数复原
        GlobalVariable.flag = false
        GlobalVariable.globalYPosition = 0
        GlobalVariable.dropDown.style.paddingTop = '300px'
        let top = 300 - GlobalVariable.scrollTop + 'px'
        rollback(top)
        setTimeout(checkRollback, 410)
    }
    if (scrollTop > 300) {
        console.log('end unbind')
        unbindTouchmove()
        unbindTouchend()
    }
}

function touching (event) {
    GlobalVariable.touching = true
    if (GlobalVariable.dropDown.scrollTop <= 300) {
        // GlobalVariable.upDownFlag = false
        bindTouchmove()
        bindTouchend()
    }
}

function touched (event) {
    GlobalVariable.touching = false
    GlobalVariable.upDownMoving = false
    GlobalVariable.upDownFlag = true
    GlobalVariable.reset = false
    GlobalVariable.count = 0
    GlobalVariable.lastIntervel = 0
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

/**
 * 回滚函数
 * @param  {String} top 回滚的初始位置
 */
function rollback (top) {
    if (document.styleSheets[0].cssRules[0]) document.styleSheets[0].cssRules[0].cssRules[0].style.cssText = `transform: translate3d(0px, ${top}, 0px); visibility: visible;`
    if (document.styleSheets[0].cssRules[1]) document.styleSheets[0].cssRules[1].cssRules[0].style.cssText = `transform: translate3d(0px, ${top}, 0px); visibility: visible;`
    $(GlobalVariable.dropDown).attr('class', 'slideInUp')
    GlobalVariable.dropDown.scrollTop = 300
}

/**
 * 第二遍检查回滚
 */
function checkRollback () {
    let scrollTop = GlobalVariable.dropDown.scrollTop
    if (scrollTop !== 300) {
        rollback(scrollTop + 'px')
    }
}

/**
 * 绑定touchstart事件
 */
function bindTouchstart () {
    GlobalVariable.dropDown.addEventListener('touchstart', touchstart)
}

/**
 * 解绑touchstart事件
 */
function unbindTouchstart () {
    GlobalVariable.dropDown.removeEventListener('touchstart', touchstart)
}

/**
 * 绑定touchmove事件
 */
function bindTouchmove () {
    GlobalVariable.dropDown.addEventListener('touchmove', touchmove)
}

/**
 * 解绑touchmove事件
 */
function unbindTouchmove () {
    GlobalVariable.dropDown.removeEventListener('touchmove', touchmove)
}

/**
 * 绑定touchmove事件
 */
function bindTouchend () {
    GlobalVariable.dropDown.addEventListener('touchend', touchend)
}

/**
 * 解绑touchmove事件
 */
function unbindTouchend () {
    GlobalVariable.dropDown.removeEventListener('touchend', touchend)
}

/**
 * 回滚速度
 * @param  {Integer} scrollTop 滚动条距离
 * @param  {Integer} speed 速度倍数，默认50
 * @return {double}  速率
 */
function rollbackSpeed (scrollTop, speed = 50) {
    let intervel = 0
    if (!GlobalVariable.lastIntervel) {
        GlobalVariable.lastIntervel = Math.log(301 - scrollTop) - 0.1
    }
    if (301 - scrollTop === 1) {
        intervel = 0.1
    } else {
        intervel = Math.log(301 - scrollTop) - GlobalVariable.lastIntervel
        GlobalVariable.lastIntervel = Math.log(301 - scrollTop)
    }
    // 将其他情况的归零
    if (!intervel) {
        intervel = 0
    }
    // 防止数字过大
    if (intervel > 0.1) {
        intervel = 0.01
    }
    intervel = Math.abs(intervel) * speed
    if (intervel > 5) {
        intervel = 5
    }
    return intervel
}

export {
    init,
    touchstart,
    touchmove,
    touchend,
    touching,
    touched,
    bindTouchstart,
    bindTouchmove,
    bindTouchend,
    unbindTouchstart,
    unbindTouchmove,
    unbindTouchend,
    staticTouchstart,
    staticTouchmove,
    staticTouchend,
    rollbackSpeed
}
