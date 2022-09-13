// Asynchronous Programming

// You order tomato soup
// Meanwhile you continue your convo with a friend
// RESOLVED - soup Your server brings you soup
// REJECTED - X no soup today

// const waitingForSoup = () => console.log('soup is ready')


// console.log('You start the convo with your girl')
// // setTimeout(waitingForSoup, 2000) //1000 ms is 1s
// // start you request

// console.log('Still Speaking')

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('soup is ready') :
      reject('No soup today')
  }, 2000)
})

// console.log(
//   promise1
//     .then(success => console.log({ success }))
//     .catch(error => console.log({ error }))
// )


const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 }



  try {
    const soup = await promise1
    console.log(soup)
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
    return data
  } catch (error) {
    console.log(error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1
    return data
  }

}

console.log(getSoup().then(value => console.log(value)))

const sum = async (a, b) => a + b

//   fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
//     .then(data => console.log(data))
// )
//RuLes for using async / await
// 1. you must creat a function
// 2. you must use the keword async
// 3 use the word await




const getDog = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
 //getDog()