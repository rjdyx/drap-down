/**
 * 全局变量对象
 */
let GlobalVariable = {
    // 全局y坐标
    globalYPosition: 0,
    // 全局时间戳
    timeStamp: 0,
    // 定时对象
    timer: null,
    // 是否触发回滚
    flag: true,
    // 静止元素对象
    staticElement: null,
    // 下拉元素对象
    dropDown: null,
    // 下拉元素父对象
    parentOrigin: null,
    // 下拉元素扩展样式对象
    cssParams: null,
    // 下拉元素的滚动条距离
    scrollTop: 0,
    // 表示正在触碰
    touching: false
}

export { GlobalVariable }
