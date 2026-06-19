// Write your code here
//create an array called products to store names

let products = ["Laptop", "Phone", "Headphones", "Monitor"];

//write function called logFirstProducts to console log the first product
function logFirstProduct(){

  console.log(products[0]);
}

//write a function called addProduct to add product to the add. the function should take the product namea as an argument

function addProduct(newProductName){
  products.push(newProductName);

}

//write a functiona called updateProductName to change the name of the product. the product should take product's position in the array and new name as argument.

function updateProductName(position, newProductName){
  products[position] = newProductName;
}


function removeLastProduct(){
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
