// filter select an element based on a condition and returns an array element with the elementst hat fullfil the conditions

const numbers = [1, 5, 6, 4, 15];
const players = [65,75,67,72,55,59];
// const selected = players.filter(p => p>70);
// const selected = players.filter(p => p>80);
// const selected = players.filter(p => p>50);
const selected = players.filter(p => p%2 === 1);
// console.log(selected)

const freinds  = ['Tom','John','Michel','Oliver','Tim','Joseph'];

const oddfreinds = freinds.filter(freind => freind.length > 4)
console.log(oddfreinds)
