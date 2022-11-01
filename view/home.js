
let deleteId
const queryString = window.location.href.split('?')[1]
render()
async function render (page, pageSize){
    page = page ? page : 1;
    pageSize = pageSize ? pageSize : 5
    try {
        const data = await $.ajax({
            url: `http://localhost:4000/product/paginate?${queryString}`,
            type: 'GET'
        })
        console.log(data)
        $('.listProduct').html('')
        for (let i = 0; i < data.listProduct.length; i++) {
            $('.listProduct').append(`
                <tr>
                    <td>${i+1}</td>
                    <td>${data.listProduct[i].name}</td>
                    <td>${data.listProduct[i].price.toLocaleString()}</td>
                    <td>${data.listProduct[i].amount}</td>
                    <td>${data.listProduct[i].color}</td>
                    <td><button class = 'product${i}'> X </button></td>
                </tr>
            `)
            $(`.product${i}`).on('click', function( ){
                deleteId = data.listProduct[i]._id;
                deleteProduct()
            })
            $('.page').html('')
            for (let i = 1; i <= data.totalPage; i++) {
                $('.page').append(`
                    <a href = '?page=${i}&pageSize=5'><button >${i}</button></a>
                `)
            }
        }
    } catch (error) {
        console.log(error)
    }
    
}


async function deleteProduct(){
    try {
        const res = await $.ajax({
            url: 'http://localhost:4000/product/delete-product/' + deleteId,
            type: 'DELETE',
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    render()
}
async function createNewProduct () {
    const name = $('#name').val()
    const price = $('#price').val()
    const amount = $('#amount').val()
    const color = $('#color').val()
    const status = $('#status').val()
    if (!name || !price || !amount || !color ) return alert('hay dien du thong tin')
    try {
        const data = await  $.ajax({
            url: '/product/create-new-product',
            type: 'POST',
            data: {
                name: name,
                price: price,
                amount: amount,
                color: color,
                status: status
            }
        })
        $('#newProductText').html(data.mess)
       
    } catch (error) {
        console.log(error)
    }
    render()
}

function reset () {
    $('#name').val('') 
    $('#price').val('') 
    $('#amount').val('')
    $('#color').val('')
    $('#status').val('')
    $('#newProductText').html('')
}