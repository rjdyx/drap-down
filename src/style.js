import { GlobalVariable } from './global'
// 自定义下拉模块的样式
// dropDown属性对应自定义的前景下拉模块，其中overflow属性无法修改
const initCss = (dropDown, cssParams, cusCss = null) => {
    GlobalVariable.windowHeight = $(window).height()
    let parentOriginCss = {
        position: 'relative',
        width: '100%',
        height: GlobalVariable.windowHeight + 'px',
        overflow: 'hidden'
    }
    let dropDownCss = {
        position: 'absolute',
        width: '100%',
        overflow: 'hidden',
        'top': '0px'
    }
    // 不能被覆盖的属性
    let filterDropDownPro = ['overflow']
    if (!cssParams.dropDown) cssParams.dropDown = {}
    // 删除不能覆盖的属性
    for (let pro in cssParams.dropDown) {
        if (filterDropDownPro.indexOf(pro) !== -1) delete cssParams.dropDown[pro]
    }
    if (cusCss) {
        dropDownCss = $.extend(cusCss, cssParams.dropDown)
    } else {
        dropDownCss = $.extend(dropDownCss, cssParams.dropDown)
    }
    $(GlobalVariable.parentOrigin).css(parentOriginCss)
    dropDown.css(dropDownCss)
}

export { initCss }
