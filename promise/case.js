let Promise = require('./promise.js')

let p = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject('11')
    }, 1000)
})
p.then((data) => {
    console.log('成功' + data);
}, (err) => {
    console.log('失败' + err);
})