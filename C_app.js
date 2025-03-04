// script.js

let cart = []; // items hold ke liye
let totalPrice = 0; // Total price cart

// Add item to cart
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  totalPrice += price;
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const emptyMessageElement = document.getElementById("empty-message");
  const totalElement = document.getElementById("total");
  const totalPriceElement = document.getElementById("total-price");

  // Clear cart items
  cartItemsElement.innerHTML = "";

  if (cart.length === 0) {
    // Show empty cart message
    emptyMessageElement.style.display = "block";
    totalElement.classList.add("hidden");
  } else {
    // Hide empty cart message
    emptyMessageElement.style.display = "none";
    totalElement.classList.remove("hidden");

    // Add each item to the cart
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - Rs.${item.price}`;
      cartItemsElement.appendChild(li);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice;
  }
}


function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const emptyMessageElement = document.getElementById("empty-message");
    const totalElement = document.getElementById("total");
    const totalPriceElement = document.getElementById("total-price");
    const proceedToBuyButton = document.getElementById("proceed-to-buy");
  
    // Clear cart items
    cartItemsElement.innerHTML = "";
  
    if (cart.length === 0) {
      // Show empty cart message
      emptyMessageElement.style.display = "block";
      totalElement.classList.add("hidden");
      proceedToBuyButton.classList.add("hidden");
    } else {
      // Hide empty cart message
      emptyMessageElement.style.display = "none";
      totalElement.classList.remove("hidden");
      proceedToBuyButton.classList.remove("hidden");
  
      // Add each item to the cart
      cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rs.${item.price}`;
        cartItemsElement.appendChild(li);
      });
  
      // Update total price
      totalPriceElement.textContent = totalPrice;
    }
  }
  
  // Event listener for "Proceed to Buy" button
  document.getElementById("proceed-to-buy").addEventListener("click", function () {
    if (cart.length > 0) {
      alert(`Thank you for your purchase! Total amount: Rs.${totalPrice}`);
      // Reset cart
      cart = [];
      totalPrice = 0;
      updateCart();
      window.location.href = "index.html";
    }
  });
  