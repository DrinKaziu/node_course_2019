// Object property shorthand
const name = 'Nacho';
const userAge = '6';

const user = {
  name,
  userAge,
  location: 'New York'
}

console.log(user.name);

// Object destructuring 
const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 211,
  salePrice: undefined
}

// const label = product.label;
// const price = product.price

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product; //we can rename the variable(label: productLabel)
//                                                                               //or we can add a variable (rating = 5)

// console.log(productLabel, price, stock, rating);

const transaction = (type, {label, stock = 0} = {}) => { //default values - {} (in case product is not provided below) and 0 for stock
  console.log(type, label, stock);
}

transaction('order', product);