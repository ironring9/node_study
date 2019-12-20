const fs = require('fs');

console.log('시작');
new Promise(function (resolve, reject) {
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }

        console.log('1번', data.toString());
        resolve();
    })
})
.then(() => {
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }

        console.log('2번', data.toString());
    })
})
.then(() => {
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }

        console.log('3번', data.toString());
    })
});

console.log('끝');