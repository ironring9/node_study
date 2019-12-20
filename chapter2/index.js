import { odd, even } from './var';
import checkNumber from './func';
// const { odd, even } = require('./var');
// const checkNumber = require('./func');

function checkStringIddOrEven(str) {
    return (str.length % 2) ? odd : even;
}

console.log(checkNumber(10));
console.log(checkStringIddOrEven('hello'));