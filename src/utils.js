// 自定义事件绑定函数，可传递多个参数给回调函数
const addEventListener = (object, event, fn, ...params) => {
    let useCapture = false
    // params如果最后一个数据为含有useCapture属性的对象
    // 则获取此useCapture属性的数据，然后删除此对象
    if (params.length &&
        typeof params[params.length - 1] === 'object' &&
        params[params.length - 1].useCapture !== undefined) {
        useCapture = params[params.length - 1].useCapture
        params.splice(-1, 1)
    }
    object.addEventListener(event, (e) => { fn(e, params) }, useCapture)
}

// borrow from polyfill
const assign = (target = {}, firstSource) => {
    let to = Object(target)
    for (let i = 1; i < arguments.length; i++) {
        let nextSource = arguments[i]
        if (nextSource === undefined || nextSource === null) continue
        for (let nextKey in Object(nextSource)) {
            let desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey]
        }
    }
    return to
}

export { addEventListener, assign }
