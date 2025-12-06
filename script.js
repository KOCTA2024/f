const BASE_URL = "https://my-json-server.typicode.com/KOCTA2024/f/"

let main = document.querySelector("main")
let products = []

function getProducts(){
    fetch(BASE_URL + "products")
    .then(async (res) =>{
        let data = await res.json()
        console.log(data)
        products = data
        drawProducts()
    })

}
getProducts()

function drawProducts(){
    products.forEach(p=>{
        if(p.in_stock = true){
            stock = "У наявності"
        }
        else{
            stock = "Немає у наявності"
        }
        main.innerHTML += `
        <div class = "product">
            <h2>${p.title}</h2>
            <h3>${p.category}</h3>
            <h4>${stock}</h4>
            <h4>Кількість на складі: ${p.stock_quantity}</h4>
            <a href="/seller.html?user_id=${p.user_id}">Продавець</a>
        </div>
        `
    })
}

let cartButton = document.getElementById("cart")
let cartIsOpen = false
cartButton.addEventListener("click", function(){
    cartIsOpen = !cartIsOpen
})