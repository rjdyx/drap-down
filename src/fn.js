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
    GlobalVariable.timeStamp = event.timeStamp
}

/**
 * 滚动元素的触摸移动过程函数
 * @param  {object} event 触摸事件对象
 */
function touchmove (event) {
    GlobalVariable.touching = true
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
        if (GlobalVariable.scrollTop === 300 || GlobalVariable.flag || GlobalVariable.upDownMoving) {
            GlobalVariable.flag = true
            if (GlobalVariable.upDownMoving && GlobalVariable.count < 5 && GlobalVariable.scrollTop > 300 && GlobalVariable.scrollTop <= 310) {
                console.log('updown')
                console.log(GlobalVariable.dropDown.scrollTop)
                if (GlobalVariable.scrollTop > 300 && GlobalVariable.scrollTop <= 310) {
                    GlobalVariable.dropDown.scrollTop = 300
                }
                GlobalVariable.dropDown.style.overflow = 'hidden'
                GlobalVariable.count++
                GlobalVariable.upDownFlag = false
            }
            if (GlobalVariable.upDownFlag || GlobalVariable.count >= 5) {
                console.log('down')
                if (GlobalVariable.dropDown.style.overflow === 'hidden') {
                    console.log('down hidden')
                    GlobalVariable.dropDown.style.overflow = 'auto'
                    // GlobalVariable.dropDown.scrollTop = 300
                }
                // 阻止触摸时浏览器的缩放、滚动条滚动等
                event.preventDefault()
                if (!GlobalVariable.lastIntervel) {
                    GlobalVariable.lastIntervel = Math.log(301 - GlobalVariable.scrollTop) - 0.1
                }
                if (301 - GlobalVariable.scrollTop === 1) {
                    intervel = 0.1
                } else {
                    intervel = Math.log(301 - GlobalVariable.scrollTop) - GlobalVariable.lastIntervel
                    GlobalVariable.lastIntervel = Math.log(301 - GlobalVariable.scrollTop)
                }
                // 将其他情况的归零
                if (!intervel) {
                    intervel = 0
                }
                // 防止数字过大
                if (intervel > 0.1) {
                    intervel = 0.01
                }
                intervel = Math.abs(intervel) * 50
                if (intervel > 5) {
                    intervel = 5
                }
                GlobalVariable.dropDown.scrollTop -= intervel
            }
        }
    } else if (letiable < 0 && GlobalVariable.scrollTop < 300) {
        // 阻止触摸时浏览器的缩放、滚动条滚动等
        event.preventDefault()
        // 让元素加速上升
        console.log('up: ' + GlobalVariable.upDownFlag)
        console.log(GlobalVariable.scrollTop)
        if (!GlobalVariable.upDownFlag && GlobalVariable.scrollTop >= 299) {
            console.log('cancel')
            // unbindTouchmove()
            GlobalVariable.dropDown.style.top -= letiable + 'px'
            console.log(GlobalVariable.dropDown.style.top)
        }
        GlobalVariable.dropDown.scrollTop -= letiable
        // console.log(GlobalVariable.dropDown.scrollTop)
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
    GlobalVariable.touching = false
    GlobalVariable.upDownMoving = false
    if (!GlobalVariable.upDownFlag) {
        // bindTouchmove()
        GlobalVariable.upDownFlag = true
    }
    GlobalVariable.count = 0
    GlobalVariable.lastIntervel = 0
    if (GlobalVariable.dropDown.scrollTop > 300 && !GlobalVariable.reset) {
        GlobalVariable.dropDown.scrollTop += 300
        GlobalVariable.dropDown.style.paddingTop = '0px'
    }
    // 只有触摸并移动过，才能触动自动上升回滚功能
    if (GlobalVariable.flag || GlobalVariable.dropDown.scrollTop < 300) {
        // 初始参数复原
        GlobalVariable.flag = false
        GlobalVariable.touching = false
        GlobalVariable.globalYPosition = 0
        GlobalVariable.dropDown.style.paddingTop = '300px'
        let top = 300 - GlobalVariable.scrollTop + 'px'
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

function bindTouchmove () {
    GlobalVariable.dropDown.addEventListener('touchmove', touchmove)
}

function unbindTouchmove () {
    GlobalVariable.dropDown.removeEventListener('touchmove', touchmove)
}

export {
    init,
    touchstart,
    touchmove,
    touchend,
    staticTouchstart,
    staticTouchmove,
    staticTouchend
}
