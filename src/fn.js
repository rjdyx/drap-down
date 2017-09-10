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
    // console.log('start')
    event.preventDefault()
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
    // console.log('moving')
    // 阻止触摸时浏览器的缩放、滚动条滚动等
    event.preventDefault()
    // 获取滚动条距离
    GlobalVariable.scrollTop = GlobalVariable.dropDown.scrollTop
    // 获取第一个触摸点
    let touch = event.targetTouches[0]
    // 获取本次触摸点与上次触摸点的y间距
    let letiable = touch.pageY - GlobalVariable.globalYPosition
    if (letiable > 15) {
        letiable = 15
    }
    if (letiable < -15) {
        letiable = -15
    }
    console.log(letiable)
    // 记录本次触摸点的y坐标
    GlobalVariable.globalYPosition = touch.pageY
    // 获取拖动元素的当前的top值
    let tmp = GlobalVariable.dropDown.style.top
    let now = tmp === 'inherit' ? tmp : (tmp).substring(0, tmp.length - 2)
    let intervel = 0
    // console.log('GlobalVariable.scrollTop: ' + GlobalVariable.scrollTop)
    // 下拉操作
    if (letiable > 0) {
        // console.log('下拉')
        // flag为true，则触摸结束时触发回滚且表示触摸滑动操作一直在继续
        GlobalVariable.flag = true
        // scrollTop小于300则触发减速下滑操作
        // console.log(GlobalVariable.scrollTop)
        // console.log(now)
        if (GlobalVariable.scrollTop <= 300 && now === 'inherit') {
            // console.log(2)
            intervel = rollbackSpeed(GlobalVariable.scrollTop, 70)
            // console.log('intervel: ' + intervel)
            GlobalVariable.dropDown.scrollTop -= intervel
        } else {
            // console.log(3)
            GlobalVariable.dropDown.style.top = now * 1.0 + letiable + 'px'
            // 使用top操控上滑过并且现在top的值大于等于0，则停止top操控
            if ((now * 1.0 + letiable) >= 0) {
                GlobalVariable.dropDown.style.top = 'inherit'
            }
            // 调整scrollTop
            // 在上下滑动的过程中偶尔会出现scrollTop无法完全滚动到300的偏差，故在此做调整
            if (GlobalVariable.scrollTop !== 300) {
                GlobalVariable.dropDown.scrollTop = 300
            }
        }
    } else if (letiable < 0) { // 上滑操作
        // console.log('上滑')
        // 下拉出现背景后的上滑操作
        if (GlobalVariable.scrollTop < 300) {
            // console.log(4)
            GlobalVariable.dropDown.scrollTop -= letiable
        } else { // 其他情况的上滑操作
            // console.log(5)
            // 使用top控制滑动，故将top从inherit转换成pix
            if (now === 'inherit') {
                GlobalVariable.dropDown.style.top = '0px'
                now = 0
            }
            GlobalVariable.dropDown.style.top = now * 1.0 + letiable + 'px'
            // 组织拖动模块上滑过度
            if (now < -300) {
                GlobalVariable.dropDown.style.top = '-300px'
            }
        }
    }
    // 当下拉距离到达200时，停止下拉
    if (letiable > 0 && GlobalVariable.scrollTop <= 100) {
        GlobalVariable.dropDown.scrollTop = 100
    }
}

/**
 * 滚动元素的触摸结束函数
 * @param  {object} event 触摸事件对象
 */
function touchend (event) {
    // console.log('end')
    let scrollTop = GlobalVariable.dropDown.scrollTop
    // 只有触摸并移动过，才能触动自动上升回滚功能
    if (GlobalVariable.flag && scrollTop < 300) {
        // 初始参数复原
        GlobalVariable.flag = false
        GlobalVariable.globalYPosition = 0
        GlobalVariable.dropDown.style.paddingTop = '300px'
        let top = 300 - GlobalVariable.scrollTop + 'px'
        GlobalVariable.dropDown.style.top = 'inherit'
        rollback(top)
        setTimeout(checkRollback, 410)
    }
}

function touching (event) {
    GlobalVariable.touching = true
}

function touched (event) {
    GlobalVariable.touching = false
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
