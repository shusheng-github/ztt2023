import './main.css'
console.log('212121')

function test () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(10)
    }, 10)
  })
}

async function fn () {
  const result = await test()
  console.log('result', result)
}

fn()