//Data Access 

const data = [{id:1, name:'Abul hasan', address: 'kochu khet'}];

// console.log(data[0].address)

const products = {
   count: 5000 , 
   data:[
    {id:1, name: 'Lenovo laptop', price:65000},
    {id:2, name: 'Macbook', price:165000},
   ]
}
//second product price 
// console.log(products.data[1].price)



const user ={
    id: 5001, 
    name:'Soriful raj',
    address:{
      street:{
          first: '54/1 uttor side',
          second: 'poribag er goli',
          third: 'No doari'
      }
    },
    city: 'dhaka'
}

// console.log(user.address.street.second)

const user2 = {
  id:5002 ,
  name: 'pori bibir mazar',
  address:{
    city: 'Chiitagong',
    country: 'Bangladesh'
  }
}
 console.log(user.address.street?.second)
 console.log(user2.address.street?.second)
