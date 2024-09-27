const person = {
  name: 'kodom Ali',
  job: 'Badam kjhao ',
  3: 'third',
  'add-dress': 'kochu khet'

}
const prop = 'job';
console.log(person.job);
console.log(person['job'])
console.log(person['3'])
console.log(person["add-dress"])

const cube=x=> x*x*x; 
console.log(cube(2))
//Extra

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output)
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const {price} = product;
console.log(price)
const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y)

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));