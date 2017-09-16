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
    // 下拉元素的父级对象
    parentOrigin: null,
    // 下拉元素对象
    dropDown: null,
    // 下拉元素扩展样式对象
    cssParams: null,
    // 记录第一次触碰时的滚动条距离
    dropDownHeight: 0,
    // 窗口高度
    windowHeight: 0,
    // 记录上一次拖动的间距
    lastIntervel: 0
}

export { GlobalVariable }
