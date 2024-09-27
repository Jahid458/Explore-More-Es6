class Person{
  constructor(name, age){ //instance
    this.name = name ; 
    this.age = age ;
  }
  sleep(){
    console.log(`Sleeping Now ${this.name}`)
  }
  activity(){
    this.sleep();
  }
}

const kodom = new Person('Kdom Ali', 25);
// console.log(kodom)
kodom.sleep();
const badam = new Person('Kacha Badam', 25); 
badam.sleep();

// complex
const lazy = kodom.sleep();
lazy()
