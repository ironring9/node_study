// const { odd, even } = require('./var');
import { odd, even } from './var'; // es2015 문법

function checkOddOrEven(num) {
    return (num%2) ? odd : even;
}

console.log(checkOddOrEven(10));

// module.exports = checkOddOrEven;
// export default checkOddOrEven; // es2015 문법