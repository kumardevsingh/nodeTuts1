
/* first way to use  */
// const operModule = require('./operator');

// console.log(operModule.add(1, 2));
// console.log(operModule.sub(3, 2));

/* second way to use */

const { add, sub } = require('./operator');


console.log(add(1, 2));
console.log(sub(3, 2));
