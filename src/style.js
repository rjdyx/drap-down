// 自定义下拉模块的样式
// parent属性对应下拉模块的父元素，其中position，top，left三个属性无法修改
// dropDown属性对应自定义的前景下拉模块，其中overflow属性无法修改
const initCss = (parent, dropDown, cssParams) => {
    // 默认样式
    let parantCss = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 19920219
    }
    let dropDownCss = {
        width: '100%',
        height: '100%',
        overflow: 'auto'
    }
    // 不能被覆盖的属性
    let filterParentPro = ['position', 'top', 'left']
    let filterDropDownPro = ['overflow']
    if (!cssParams.parent) cssParams.parent = {}
    if (!cssParams.dropDown) cssParams.dropDown = {}
    // 删除不能覆盖的属性
    for (let pro in cssParams.parent) {
        if (filterParentPro.indexOf(pro) !== -1) delete cssParams.parent[pro]
    }
    for (let pro in cssParams.dropDown) {
        if (filterDropDownPro.indexOf(pro) !== -1) delete cssParams.dropDown[pro]
    }
    parantCss = $.extend(parantCss, cssParams.parent)
    dropDownCss = $.extend(dropDownCss, cssParams.dropDown)

    parent.css(parantCss)
    dropDown.css(dropDownCss)
}

export { initCss }
