$(() => {
    $('#add').click(() => {
        let length = $('.content ul li').length
        let img = process.env.NODE_ENV !== 'development' ? '<img src="images/logo.png" alt="" class="goods-pic" style="width: 25%;">' : '<img src="../../static/logo.png" alt="" class="goods-pic" style="width: 25%;">'
        let li = `
            <li>
                ${img}
                <div class="text">
                    <p class="title">What is Vue.js?</p>
                    <p class="description">Vue is a progressive framework</p>
                    <p class="description">${length}</p>
                </div>
            </li>
        `
        $('.content ul').append(li)
    })
    $('#delete').click(() => {
        $('.content ul li:last-child').remove()
    })
})

