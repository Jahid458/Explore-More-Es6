const products = [
  {id: 1, name: 'lenovo', price: 65000},
  {id: 2, name: 'dell', price: 45000},
  {id: 3, name: 'hp', price: 40000},
  {id: 4, name: 'mac', price: 150000},
]
//similar --> class
//has some property , kichu kaj kore method
class Product{
  country = 'bangladesh';
  constructor(name){
    this.name = name ;  //property set hbe 
  }
   speak(talk){
        console.log(`talking about ${talk}`)

   }
}

const leniovo = new Product('le le lenovo');
// console.log(leniovo)
// leniovo.speak('ova kita kou')


class Teacher{
  constructor(name, subject){
    this.name = name ;
    this.subject = subject;

  }
  lecture(){
    console.log('Sir is teaching Math')
  }
}

const tapan = new Teacher('Tapan sir', 'Physics');
console.log(tapan)

const Rashid = new Teacher('Rashid', 'English');
console.log(Rashid)


