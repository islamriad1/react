//  function doubleIt(num){
//      return num * 2;
//  }

// const doubleIt = function myfun(num){
//    return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const big = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result = add(50, 70);
const result3 = big(7, 5)
console.log(result3)