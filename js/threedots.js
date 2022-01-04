const ages = [13, 20, 23, 12, 18];
const ages2 = [15, 17, 19];
const allAges = ages.concat(ages2);
const allAges2 =[...ages, ...ages2]
// console.log(allAges2)

const buisness = 650;
const minister = 500;
const sachib = 400;
const takaPoisha = [650, 450, 250, 850]
// const maximum = Math.max(buisness, minister, sachib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);