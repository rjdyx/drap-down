/**
 * 全局变量对象
 */
let GlobalVariable = {
    // 全局y坐标
    globalYPosition: 0,
    // 是否触发回滚
    flag: true,
    // 静止元素对象
    staticElement: null,
    // 下拉元素对象
    dropDown: null,
    parentOrigin: null,
    // 下拉元素扩展样式对象
    cssParams: null,
    // 下拉元素的滚动条距离
    scrollTop: 0,
    // 表示正在触碰
    touching: false,
    //
    reset: false,
    //
    upDownMoving: false,
    //
    count: 0,
    //
    upDownFlag: true,
    lastIntervel: 0,
    scrollIntervel: 0,
    firstScroll: 0
}

export { GlobalVariable }
