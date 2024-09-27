/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destrucuring and spread operator
 * 6. Object.keys,Object.value, Object.entries(ES6))
 * 7. for of used in array string
 * 8. for in used in object
 */

const a = 56; 
const numbers  = [56,7,8];
const persons = {
  name: 'sakib khan'
}

const message =` Hi, ${persons.name} has a ${a} access 
     to ${numbers[2]} `

if(true){

}

const squre = x => x * x ;
const sum = (a,b) => a +b ; 

//object destructuring
const {age, z, ...others} = {x:2, y:5, z:3, name: 'Abijheet', age:65}

//Array Destructring 
const [first, second, ...remaining] = ['ram', 'sam', 'jodu', 'modu'];