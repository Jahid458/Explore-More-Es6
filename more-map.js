const numbers = [12,10,8,5,7];


const doubled = numbers.map(num => num * 2);
// console.log(doubled)
const FiveBonus  = numbers.map(num => num + 5);
// console.log(FiveBonus)
const halfes = numbers.map(num => num/2);
// console.log(halfes)

const freinds  = ['Tom','John','Michel','Oliver'];
const length = freinds.map(frnd => frnd.length);
// console.log(length)

const firstletter= freinds.map(freind => freind[0])
console.log(firstletter)
