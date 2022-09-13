// /classes
// methods
//properties

// const nums = [1, 2, 3]
// nums.push()
// //this
// class Car {
//   //   // properties
//   constructor(name, color, topSpeed) {
//     this.name = name
//     this.color = color
//     this.topSpeed = topSpeed
//     this.currentSpeed = 0;
//   }
//   zeroToSixty() {
//     setTimeout(() => {
//       console.log('pHew! That was fast!')
//       this.currentSpeed = 60;
//       console.log(this.currentSpeed)
//     })
//   }

//   drive() {
//     //     // console.log('just drove 2 miles!')
//     this.currentSpeed += 10
//     console.log(`driving speed at ${this.currentSpeed} mph`)
//   }

//   brake() {
//     console.log('braking!')
//     this.currentSpeed -= 10

//   }


//   stop() {
//     console.log('coming to a screeching halt!')
//     this.currentSpeed = 0
//   }
// }


// const ferrari = new Car('ferrari', 'red', 250)
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// ferrari.stop()
// console.log(ferrari.currentSpeed)

// // console.log(ferrari.name)
// // console.log(ferrari.color)
// // console.log(ferrari.topSpeed)
// // console.log(ferrari.currentSpeed)

// // ferrari.drive()
// // ferrari.brake()

// // console.log(ferrari.currentSpeed)
// // ferrari.drive()
// // console.log(ferrari.currentSpeed)
// // ferrari.drive()
// // ferrari.drive()
// // console.log(ferrari.currentSpeed)
// // ferrari.zeroToSixty()
// // console.log(ferrari.currentSpeed)
// you can only have methods inside of classes

// const numbers = [1, 2, 3]
// numbers.push(4)//method
// console.log(numbers)

Array.prototype.myPush = function(item) {
  this[this.length] = item
  return this
}

const fruits = ['banana', 'berry', 'cooks', 'pier', 'apple']
fruits.myPush('kiwie')
fruits.myPush('cooks')
fruits.myPush('berry')
fruits.myPush('orange')
console.log(fruits)