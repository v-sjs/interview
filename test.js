// let name = "sjs";
// let age = 30;
// let str = "hello~${name}今你啊${age}了！";
// str = str.replace(/\$\{([^}]*)\}/g, function () {
//     console.log(arguments);
//     return eval(arguments[1]);
// });
// console.log(str);

// let a = [[1, 2], 1, 2]
// let c = a.slice(0)
// a[0][0] = 10
// console.log(c);
let a = [[1, [2, 2], 3], [2, 6, 6], [3, 4], [4, 5], [5, 5]]
let b = [{ id: 1 }, { id: 2 }, { id: 3 }]
Array.prototype.reduce = function (fn, prev) {
    for (let i = 0; i < this.length; i++) {
        if (typeof prev === undefined) {
            prev = fn(this[i], this[i + 1], prev, this)
            i++
        } else {
            prev = fn(prev, this[i], prev, this)
        }
    }
    return prev
}
let m = function (a) {
    return a.reduce((prev, next, index, arr) => { return prev.concat(Array.isArray(next) ? m(next) : next) }, [])
}
console.log(m(b));

// const list = [
//     {
//         id: 1, name: 1, pid: -1, childrenList: [
//             { id: 7, name: 7, pid: 1, childrenList: [] },
//             { id: 8, name: 8, pid: 1, childrenList: [] },
//             { id: 9, name: 9, pid: 1, childrenList: [] },
//         ]
//     },
//     {
//         id: 2, name: 2, pid: -1, childrenList: [
//             { id: 3, name: 3, pid: 2, childrenList: [] },
//             { id: 4, name: 4, pid: 2, childrenList: [] },
//             { id: 5, name: 5, pid: 2, childrenList: [] },
//             { id: 6, name: 6, pid: 2, childrenList: [] },
//         ]
//     },
// ];
// const flatten = (data) => data.reduce((arr, { id, name, pid, childrenList = [] }) => {
//     console.log(flatten(childrenList));
//     return arr.concat([{ id, name, pid }], flatten(childrenList))
// }, []);
// console.log(flatten(list));
