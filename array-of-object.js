const products = [
  {id: 1, name: 'lenovo', price: 65000},
  {id: 2, name: 'dell', price: 45000},
  {id: 3, name: 'hp', price: 40000},
  {id: 4, name: 'mac', price: 150000},
]
//map 
const names = products.map(product => product.name)
// console.log(names)
const price = products.map(p => p.price);
// console.log(price)
//foreach
products.forEach(p => {
  console.log(p.id)
});

//filter
const expensive = products.filter(p => p.price > 50000)
console.log(expensive)

//find
const affordable = products.find(p => p.price < 50000)
// console.log(affordable)
const total = products.reduce((accu, curr) => accu + curr.price , 0)
console.log(total)