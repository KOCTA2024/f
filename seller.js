const urlParams = new URLSearchParams(window.location.search)
const BASE_URL = "https://my-json-server.typicode.com/KOCTA2024/f/"
let user_id = urlParams.get("user_id")
console.log(user_id)
let users = []
let main = document.querySelector("main")
function getUser(){
    fetch(BASE_URL + "users?user_id=" + user_id)
    .then(async (res) =>{
        let data = await res.json()
        console.log(data)
        users = data
        drawUsers()
        getProducts()

    })

}
getUser()

function getProducts(){
    fetch(BASE_URL + "products?user_id=" +user_id)
    .then(async (res)=>{
        let data = await res.json()
        console.log(data)
        drawProducts(data)
    })
}
getProducts()
function drawUsers(){
    users.forEach(u=>{
        let role
        if(u.role = "seller"){
            role = "Продавець"
        }
        else()=>{
            role="Покупець"
        }
        main.innerHTML += `
        <div class = "user">
            <h2 id="user_name">${u.name}</h2>
            <h3 id="user_emai"l>${u.email}</h3>
            <h4 id="user_role">Роль: ${role}</h4>
            <h4 id="user_phone>Номер телефону: ${u.phone}</h4>
        </div>
        `
    })
}
function drawProducts(products){
    products.forEach(p=>{
        if(p.in_stock = true){
            stock = "У наявності"
        }
        else{
            stock = "Немає у наявності"
        }
        main.innerHTML += `
        <div class = "user_product">
            <h2>${p.title}</h2>
            <h3>${p.category}</h3>
            <h4>${stock}</h4>
            <h4>Кількість на складі: ${p.stock_quantity}</h4>
        </div>
        `
    })
}