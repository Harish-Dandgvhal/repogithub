function isEven(num) {
  if (num % 2 == 0) {
    console.log(`number is even${num}`)
  } else {
    console.log(`number is not even${num}`)
  }
}

isEven(10)
isEven(11)

function isOdd(num) {
  if (num % 2 == 0) {
    console.log(`number is not odd${num}`)
  } else {
    console.log(`number is odd${num}`)
  }
}

isOdd(12)
isOdd(11)

function add(num1, num2) {
  console.log(`num1=${num1} + num2=${num2} = ${num1 + num2}`)
}

add(10, 20)
