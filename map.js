//map ==> loop through each element of the array and do the opeartion that you passed in the callback function and hold teh result from each operation in an array and finally returns an array

const numbers = [4,5,2,8,10];
function doubleIt(num){
  // console.log('Number Now', num)
  return num * 2
}
const result = numbers.map(doubleIt);
// console.log(result)
const double2 = n => n * 2
// const output = numbers.map(double2) ;
// console.log(output)

// const doubled = []; 
// for(const num of numbers){
//   const double = num * 2 ;
//   doubled.push(double);
// }
// console.log(doubled)

const output  = numbers.map(n=> n*2);



