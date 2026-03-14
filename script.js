const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: 900,
    category: "phone",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Samsung S22",
    price: 800,
    category: "phone",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 2000,
    category: "laptop",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    name: "HP Laptop",
    price: 1200,
    category: "laptop",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    name: "Xiaomi Phone",
    price: 500,
    category: "phone",
    image: "https://placehold.co/600x400",
  },
];


const container = document.getElementById("products")
const search = document.getElementById("search")
const category = document.getElementById("category")
const sort = document.getElementById("sort")

function displayProducts(list){

container.innerHTML=""

list.forEach(product=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="price">$${product.price}</p>
`

container.appendChild(card)

})

}

function filterProducts(){

let filtered=[...products]

const searchValue=search.value.toLowerCase()

filtered=filtered.filter(product =>
product.name.toLowerCase().includes(searchValue)
)

if(category.value!=="all"){
filtered=filtered.filter(product =>
product.category===category.value
)
}

if(sort.value==="low"){
filtered.sort((a,b)=>a.price-b.price)
}

if(sort.value==="high"){
filtered.sort((a,b)=>b.price-a.price)
}

displayProducts(filtered)

}

search.addEventListener("input",filterProducts)
category.addEventListener("change",filterProducts)
sort.addEventListener("change",filterProducts)

displayProducts(products)


