// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  var subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  return price * quantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  var products = document.getElementsByClassName('product');
  var allTotal = 0 ;
  for (let i = 0; i<products.length; i++) {
    allTotal += updateSubtotal(products[i])
  }

  // ITERATION 3
  var totalEl = document.querySelector('#total-value span')
  totalEl.innerHTML = allTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  var targetProduct = target.parentNode.parentNode;
  var parentNode = targetProduct.parentNode;
  parentNode.removeChild(targetProduct)
}

window.addEventListener('load', () => {
  var removeBtn = document.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
});

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

