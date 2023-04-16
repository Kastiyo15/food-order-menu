////////////////////////// PAGE 2 //////////////////////////////////////////
// WHEN CHECKOUT PAGE IS OPENED
// Get and save the array saved in localStorage
const cartArray = JSON.parse(localStorage.getItem("itemCartArray"));

// loop through each item, creating a html section for it
cartArray.forEach((x) => {
  let { item, quantity, price } = x;
  createCheckoutItem(item, quantity, price);
});

// Make print button print page
const print_btn = document.querySelector(".print-button");
print_btn.addEventListener("click", () => {
  window.print();
});

// Update Total price
const el_total_price = document.querySelector(".total-price");
const totalPrice = cartArray.reduce((acc, cur) => {
  return acc + cur.price * cur.quantity;
}, 0);
el_total_price.textContent = "£ " + totalPrice.toFixed(2);

// Function to create html element for each item
function createCheckoutItem(item, quantity, price) {
  const el_checkout_list = document.querySelector(".checkout-list");
  const el_item = document.createElement("article");
  const el_name = document.createElement("h3");
  const el_price = document.createElement("h3");
  const el_quantity = document.createElement("h3");
  const el_total = document.createElement("h3");

  el_item.classList.add("checkout-item");

  el_name.textContent = item;
  el_price.textContent = "£ " + price.toFixed(2);
  el_quantity.textContent = quantity;
  el_total.textContent = "£ " + (price * quantity).toFixed(2);

  el_item.appendChild(el_name);
  el_item.appendChild(el_price);
  el_item.appendChild(el_quantity);
  el_item.appendChild(el_total);

  el_checkout_list.appendChild(el_item);
}
