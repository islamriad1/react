const numbers = [3, 4, 5, 6, 7, 8];
// const output = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square (element){
// return element * element;
// }

//arrow function
// const square = element => element * element;
// const square = x => x * x;

// Map with normal function
// const result = numbers.map(function(element){
//  return element * element;
// })

// Map with arrow function
// const result = numbers.map(x => x * x);

// console.log(result);

// Filter
// const result = numbers.filter(x => x > 5);
// console.log(result);

const findIsThere = numbers.find(x => x > 5);
console.log(findIsThere);