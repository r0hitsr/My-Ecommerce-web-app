const products = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Mouse", price: 30 },
  { id: 103, name: "Headphones", price: 100 },
  { id: 104, name: "Keyboard", price: 50 },
  { id: 105, name: "Monitor", price: 300 },
  { id: 106, name: "Webcam", price: 40 },
  { id: 107, name: "External Hard Drive", price: 80 },
  { id: 108, name: "Graphics Card", price: 500 },
  { id: 109, name: "Wireless Router", price: 60 },
  { id: 110, name: "Printer", price: 150 },
  { id: 111, name: "Smartphone", price: 700 },
  { id: 112, name: "Tablet", price: 400 },
  { id: 113, name: "Smartwatch", price: 250 },
  { id: 114, name: "Fitness Tracker", price: 80 },
  { id: 115, name: "Gaming Console", price: 350 },
  { id: 116, name: "Virtual Reality Headset", price: 200 },
  { id: 117, name: "Camera", price: 600 },
  { id: 118, name: "Drone", price: 800 },
  { id: 119, name: "Bluetooth Speaker", price: 70 },
  { id: 120, name: "Wireless Earbuds", price: 120 },
  { id: 121, name: "Backpack", price: 50 },
  { id: 122, name: "Desk Chair", price: 150 },
  { id: 123, name: "Desk Lamp", price: 30 },
  { id: 124, name: "Bookshelf", price: 80 },
  { id: 125, name: "Coffee Maker", price: 40 }
];

const cart = [];

let total = 0;

// const freq = products.reduce((total, value) => {

//   let id = value.id;
//   total[id] = total[id] == undefined ? 0 : total[id] + 1;
//   return total;
// }, {});


function doNothing(id) {
  let pTag = (document.getElementById(id).innerHTML = "");
  return pTag;
}
function allProducts() {
  // let pTag = (document.getElementById("all").innerHTML = "");
doNothing("all");

  let p = document.getElementById("all");
  for (const key in products) {
    let para = document.createElement("p");
    // para.innerHTML = `Just created a p tag ${obj.name}`
    para.innerHTML = `Id: ${products[key].id}
  Name: ${products[key].name}
  Price: ${products[key].price}
  
  `;
    p.appendChild(para);
  }
}

function addToCart() {
  let id = prompt("Enter Product Id");
  // let id =103;

  const product = products.find((item) => item.id == id);
  const itemIndex = cart.findIndex((item) => item.id == id);

  if (itemIndex < 0) {
    cart.push({ ...product, qty: 1 });
  } else {
    const cartProduct = cart[itemIndex];
    const qty = cartProduct?.qty + 1;

    cart[itemIndex] = {
      ...cart[itemIndex],
      price: product?.price * qty,
      qty: qty
    };
  }
}
// addToCart();
// console.log(cart);

function display() {
  // let pTag = (document.getElementById("display").innerHTML = "");
  let p = document.getElementById("display");
  doNothing("display");
  for (const key in cart) {
    let para = document.createElement("p");
    para.innerHTML = `Id: ${cart[key].id}
  Name: ${cart[key].name}
  Price: ${cart[key].price}
  Qty: ${cart[key].qty}
  `;
    p.appendChild(para);
  }
}

// display();
const order = cart;
function placeOrder() {
  // const cart = order;
  const order2 = [];
  for (const x of cart) {
    order2.push(x);
    // console.log(order);
    total = total + x.price;
  }

  // let pTag = (document.getElementById("place").innerHTML = "");
  
  let p = document.getElementById("place");
  doNothing("place");
  for (const key in order2) {
    let para = document.createElement("p");

    // let para = document.createElement("p");
    // para.innerHTML = `Just created a p tag ${obj.name}`
    para.innerHTML = `Id: ${order[key].id}
    Name: ${order[key].name}
    Price: ${order[key].price}
    Qty: ${order[key].qty}
    `;
    p.appendChild(para);
  }
  para.innerHTML = `The total is ${total}`;
  p.appendChild(para);
}

function orderHistory(){
  // doNothing("history");
  let pTag = document.getElementById("history").innerHTML = '';
  let p = document.getElementById("history");

  for (const key in order) {
    
    let para = document.createElement("p");
    para.innerHTML = `Id: ${order[key].id}
  Name: ${order[key].name}
  Price: ${order[key].price}
  Qty: ${order[key].qty}
  `;
    p.appendChild(para);
  }
}
console.log(order);