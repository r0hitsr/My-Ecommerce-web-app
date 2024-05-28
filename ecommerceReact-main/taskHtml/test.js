function display() {

    let pTag = (document.getElementById("display").innerHTML = "");
  
    let p = document.getElementById("display");
    for (const key in cart) {
  
      console.log(cart[key].price, freq[cart[key].id], products[key].price);
  
      // cart[key].price =
      //   freq[cart[key].id] > 0
      //     ? products[key].price * freq[cart[key].id]
      //     : cart[key].price;
  
      
  
      let para = document.createElement("p");
  
      para.innerHTML = `Id: ${cart[key].id}
    Name: ${cart[key].name}
    Price: ${cart[key].price}
    
    `;
      p.appendChild(para);
    }
  }
  