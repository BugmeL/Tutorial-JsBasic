
// console.log('hello world')
// console.log('Reymel')
//  let name = 'Peter pan'
// variables 
// console.log(name)

// let sentence = 'how are you doing today nice to see you, hope you have a great day'

// operators
// * / **+-
// console.log (fruit)
// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt ('tip %?'))/100
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log('tip amount' ,tipAmount)
// console.log( 'total',total)
// alert(tipAmount)

// user input

// data types (strings, number)
// numbers 1, 2,10
// strings  'hello',  "what is up"
//arrays []
// object
// boolean true / false (bank)

// Math Operations
// Multiply *
//Divide /
//Exponets **
//Modulo/Remainder % 5%2=1
//add +
//sub -


// Math Methods
//Floor - Rounds down
//ceil - Rounds up
//Random - give you number between 0 and
  
// Baby weather app (conditionals)
// if rain 'grab your umbrella'
// else 'Wear your sunglasses'
//let weather =prompt('How is the weather?')

//if (weather == 'rainy'){
  //console.log('Grab your umbrella')
//} else{
  //console.log('Wear your sunglasses')//
//

// conditional operators
// ==, ===, >, <, <=, >==, !=,!==

//Functions
// this is a function called 'sayMyName'
// and it has 0 arguments
// it logs out your name to the console
function sayMyName(name){
  console.log('Mel')
}

//sayMyName()//
// sayMyName2('Kevin')
// this is a function called 'sayMyName2'
// it has 1 argument called 'name'
// does: it logs out your name to console
function sayMyName2(name){
  console.log(name)
}


function gretting(name) {
//  greet = 'hi ' + name + ', Nice to meet you!'
  greet = `hi ${name}, Nice to meet you!`
  console.log(greet)
}
// gretting('J')


function sum(a , b) {
  //return
  return a + b
}


// num1 = sum(1, 2)
// console.log(num1)

function calculateFoodTotal(food, tip){
 const  tipPercentage = tip /100
 const  tipAmount = food * tipPercentage
  const total = sum(food, tipAmount)
return total
}
 

// console.log(calculateFoodTotal(300 , 20)) 

//ES6
// Arrow Functions =>
// arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}
// arrow function with implicit return
// IMPORTANT: For implicit return, remove  curly braces
const sumArrow2 = (a, b) => a + b

// console.log(sumArrow(10, 50))

// arrays
// const groceries = ['banana', 'apple','oranges', 'pear' ]
// console.log(groceries)
// console.log (groceries[2])
// grab the 2nd index
// console.log(groceries[2])

// Array methods
// groceries.push ('coffee')
// console.log(groceries)
// groceries.push ('milk')
// console.log (groceries)

// start from 0 INCLUSIVE and UP to 2 [0,1,2,3,4,5]
// Array Slice
// console.log (groceries.slice (0, 6))

// console.log (groceries.slice(3, 6))

// console.log (groceries.slice(1, 4))

// array methods (slice, push , indexOF, lenght)

// console.log(groceries.indexOf('pear'))
//  console.log (groceries.length)

// OBJECTS
// key:value pairs
// const person = {
  // name:'Leonardo', 
  // shirt: 'white' 
// 
// access object: dot notation vs. bracket notation
// console.log(person. name)
// console.log(person. shirt)
// bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

// assign object
// person['phone'] ='1-222-333-4444'
// console.log (person.phone)
// console.log(person)


// person2

 const person2 = {
   name: 'Rey',
   shirt:'black'
   }


// console.log(person2)
// console.log(person2.name)
// console.log(person2.shirt)

// es6 arrow function (3 arguments)
//object
// templates literals
// methods Math.floor()

// const introducer = (name,shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities: 50000,
//     netWorth: function (){
//       return this.assets - this.liabilities
//     }
//   }

//   const intro =`Hi may name is ${person.name} and the color of my shirt is ${person.shirt}
//   and my net worth is $${person.netWorth( )} USD`


//   return intro  
// }

// console.log(introducer('Rey', 'black'))
// console.log(introducer( 'Leonardo', 'white'))

const fruits = ['banana', 'apple','oranges', 'pear' 
,'banana', 'apple','oranges', 'pear' 
,'banana', 'apple','oranges', 'pear'
 ,'banana', 'apple','oranges', 'pear']

// console.log(fruits [0])
// console.log(fruits [1])
// console.log(fruits [2])
// console.log(fruits [3])

// for (let i=0; i< fruits.length; i++) {
//   console.log(fruits[i])
// }

// for (const fruit of fruits) {
// console.log(fruit)}



// const numbers = [1, 2, 3, 4, 5, 6]
// // for (let i=0; i <numbers.length; i++) 
// //   console.log(numbers[i])  
// // }
// const double = (numbers) =>{
//   let result = []
// for (const number of numbers){
//   result.push(number * 2) 
// }
// return result
// }

// console.log(double([1, 2, 3, 4, 5, 6]))

// [2,4,6,8,10,12]

// const howManyLetters = () => {
 
//   // phrase. length

//   //counter
//   // let result = 0;
//   // for (const index in phrase) {
//   //   console.log(Number(index) + 1)
//   //   result = Number(index) + 1
//   // }

//   // return {result}
// }


// const phrase = prompt ('write youre phrase')
// console.log(howManyLetters())
// [1,2,3,4]
// result = 0
// result = 1
// result = 3
// result = 6
// result = 10


const sumArray = (numbers) => {
  let result = 0;
  // for loop
  for (const number of numbers){
    console.log (number)
    result = result + number
  }

  return{result}
}
// const nums = [1,2,3,4,5]
// console.log(sumArray(nums))
// sum up all number in array

  const max = (numbers) =>{
  let result = numbers[0]

  //loop
  for (const number of numbers){
  if (number > result) {
    result = number
  }
  }
  return { result }

  }

  //  console.log(max([1, 2, 3, 4, 5]))

  const letterFrequency = (phrase) => {
  //   // letterFrequency('haha')  {'h': 2, 'a': 2}
    console.log(phrase)
  //   // make a `frequency` object {}
      let frequency = {}
      for (const letter of phrase) {
  //     // check if letter exists in frequency
        if (letter in frequency) {
  //       // increment the value by +1
        frequency[letter] += 1
          // otherwise, set the value to 1
      } else {
        frequency[letter] = 1
      }
    }
    return frequency
  }

  // console.log(letterFrequency('lol, what are you doing later tonight lol, haha!'))

  // wordFrequency('lol what lol')  {'lol': 2, 'what': 1}
  const wordFrequency = (phrase) => {
    const words = phrase.split(' ')
    return letterFrequency(words)
  }

  // const userInput = prompt('Write your sentence')
  // console.log(wordFrequency(userInput))

// incremental operators
// ++, --, +=
// console

// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// reduce

// MAP
const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}
console.log(doubleMap([1, 2, 3]))

// filter([1,2,3,4,5,6], 3)  [4, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

// console.log(filter([1, 2, 3, 4, 5, 6], 2))
  const nums = [1, 2, 3, 4, 5, 6]
  console.log(nums.filter(num => num > 4 || num < 2))

  const actors = [
      { name: 'johnny', netWorth: 2000000 },
      { name: 'amber', netWorth: 10 },
      { name: 'matt', netWorth: 170000000 },
      { name: 'brad', netWorth: 300000000 },
      { name: 'leonardo', netWorth: 10000000 },
    ]

  
  console.log(actors.filter(actor => actor.netWork > 10))
  index.innerHTML =  `<h1>${result[0].name}</h1>`
  // if (userIsAuthenticated || userIsPayingMember ) {
 // show youtube videos
 //} else {
  //}
  

