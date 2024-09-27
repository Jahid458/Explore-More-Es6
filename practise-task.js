// task -1: console log the secondary school location of Sophia 
let data = {
  Sophia: {
      id: 33,
      study: [
          {
              primary:
                  [
                      { school_name: "ABC primary school" },
                      { location: "Peters burg" }
                  ]
          },
          {
              secondary:
                  [
                      { school_name: "ABC secondary school" },
                      { location: "St Lorence" }
                  ]
          },
      ]
  }
}
// console.log(data.Sophia.study[1].secondary[1])

// task-2: console .log  output: Petersburg, Herry

let students = {
  2222: {
      name: "Jack",
      section: "C",
      class: "IX",
      address: {
          "building no": 12,
          "street": "St. Jonson",
          "city": "Petersburg",
          "country": "UK"
      }
  },
  3333: {
      name: "Herry",
      section: "D",
      class: "X",
      address: {
          "building no": 85,
          "street": "DC road",
          "city": "Kachukhet",
          "country": "Bangladesh"
      }
  }
}

// console.log(students['2222'].address.city);
// console.log(students['3333'].name)


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data:
      [
          {
              bookId: 1,
              bookDetails: {
                  name: "habluder adda",
                  category: "XYZ",
                  price: "20$",
              },
              bookCategory: "Basic",
          },
          {
              bookId: 2,
              bookDetails: {
                  name: "gobluder adda",
                  category: "ABC",
                  price: "40$",
              },
              bookCategory: "Beginner",
          }
      ]
}
// console.log(data2.data[0].bookDetails.name)
// ------------ 1 -------------------
const numbers = [1,3,5,7,9];
//array  using map 
 const evenNums = numbers.map(n => n+1);
// using for loop 
let evenNum = [];
for(let i=0; i < numbers.length ; i++){
   evenNum.push(numbers[i] + 1);
}
// console.log(evenNum)

// ---------------- 2 ---------
let filNumb = [33, 50, 79, 78, 101,30]
const divisible = filNumb.filter(n => n%10 === 0)
// console.log(divisible)
const divisible2 = filNumb.find(n => n%10 === 0)
// console.log(divisible2)

// ------3 ---------------
const instructor = [
      {name: 'Nodi', age: 28, position:'Senior'},
      {name: 'Akhil', age: 32, position:'junior'},
      {name: 'Shobuj', age: 25, position:'Senior'},
]
const seniorInstructor = instructor.filter(instructor => instructor.position === 'Senior');
// console.log(seniorInstructor);

// ----------------- 4 -----------------


const people = [
  {name: 'Meena', age:20},
  {name: 'Rina', age:15},
  {name: 'Suchorita', age:22},
]

const totalage = people.reduce((sum, person) => sum +person.age,0)
console.log(totalage)