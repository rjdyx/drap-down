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
        console.log(1)
        if (GlobalVariable.scrollTop === 300 || GlobalVariable.flag || GlobalVariable.upDownMoving) {
            console.log('in')
            // 阻止触摸时浏览器的缩放、滚动条滚动等
            event.preventDefault()
            GlobalVariable.flag = true
            console.log(GlobalVariable.scrollTop)
            // 元素匀速下滑100px，之后则减速下滑
            if (GlobalVariable.scrollTop > 200) {
                intervel = letiable
            } else {
                intervel = Math.log(GlobalVariable.scrollTop) - Math.log(GlobalVariable.scrollTop - 90)
            }
            // 防止下滑跨度过大
            if (intervel > 15) intervel = 15
            // 改变元素的y坐标，即改变元素的位置
            console.log(intervel)
            GlobalVariable.dropDown.scrollTop -= intervel
        }
    } else if (GlobalVariable.scrollTop < 300) {
        console.log(3)
        // 阻止触摸时浏览器的缩放、滚动条滚动等
        event.preventDefault()
        // 元素y坐标递减过程中很难保证减到刚好为0，
        // 故判断其减到少于1.5px时，则让元素y坐标为0
        if (GlobalVariable.scrollTop < 1.5) {
            GlobalVariable.dropDown.scrollTop = 300
        } else {
            // 让元素加速上升
            intervel = Math.log(GlobalVariable.scrollTop)
            GlobalVariable.dropDown.scrollTop += intervel
        }
    } else if (letiable < 0 && GlobalVariable.scrollTop > 300) {
        console.log(4)
        GlobalVariable.upDownMoving = true
    }
    if (GlobalVariable.scrollTop <= 160) {
        console.log(0)
        event.preventDefault()
        GlobalVariable.dropDown.scrollTop = 160
    }
    console.log(GlobalVariable.flag)
}

/**
 * 滚动元素的触摸结束函数
 * @param  {object} event 触摸事件对象
 */
function touchend (event) {
    GlobalVariable.touching = false
    GlobalVariable.upDownMoving = false
    if (GlobalVariable.dropDown.scrollTop > 300 && !GlobalVariable.reset) {
        console.log('i2')
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
