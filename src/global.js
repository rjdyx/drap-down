/**
 * 全局变量对象
 */
let GlobalVariable = {
    // 全局y坐标
    globalYPosition: 0,
    // 定时对象
    timer: null,
    // 是否触发回滚
    flag: false,
    // 静止元素对象
    staticElement: null,
    // 下拉元素对象
    dropDown: null,
    // 下拉元素父对象
    parentOrigin: null
}

export { GlobalVariable }
