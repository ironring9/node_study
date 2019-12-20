const fs = require('fs');
const util = require('util');

const readfile = util.promisify(fs.readFile);

console.log('시작');

(async function asyncReadFile() {
    let data = await readfile('./readme2.txt');
    console.log('1번', data.toString());
    data = await readfile('./readme2.txt');
    console.log('2번', data.toString());
    data = await readfile('./readme2.txt');
    console.log('3번', data.toString());
})();

console.log('끝');