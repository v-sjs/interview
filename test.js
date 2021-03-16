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
// let a = [[1, [2, 2], 3], [2, 6, 6], [3, 4], [4, 5], [5, 5]]
// let b = [{ id: 1 }, { id: 2 }, { id: 3 }]
// Array.prototype.reduce = function (fn, prev) {
//     for (let i = 0; i < this.length; i++) {
//         if (typeof prev === undefined) {
//             prev = fn(this[i], this[i + 1], prev, this)
//             i++
//         } else {
//             prev = fn(prev, this[i], prev, this)
//         }
//     }
//     return prev
// }
// let m = function (a) {
//     return a.reduce((prev, next, index, arr) => { return prev.concat(Array.isArray(next) ? m(next) : next) }, [])
// }
// console.log(m(b));

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

// Function.prototype.myApply = function (context, args) {
//     context.fn = this;
//     let res;
//     if (!args) {
//         res = context.fn();
//     } else {
//         res = context.fn(...args);
//     }
//     return res;
// };

// console.log(1);
// setTimeout(() => {
//     console.log(2);
//     Promise.resolve().then(data => {
//         console.log(3);
//     })
// })
// new Promise((resolve) => {
//     resolve()
//     console.log(4);
// }).then(() => {
//     console.log(5);
//     setTimeout(() => {
//         console.log(6);
//     })
// }).then(() => { console.log(7); })
// console.log(8);
// // 14857236
// var nickname = 'lilei'
// function Person(name) {
//     this.nickname = name;
//     this.sayHi = function () {
//         console.log(this.nickname + 'Ps');
//         setTimeout(function () {
//             console.log(this.nickname);
//         }, 1000)
//     }
// }
// var Male = {
//     nickname: 'xiaofang',
//     sayHi: () => {
//         console.log(this.nickname);
//     }
// }

// var person = new (Person.bind(Male, 'xiaohong'))
// console.log(Male);
// person.sayHi()
// function fn1() {
//     console.log(this, arguments);
// }
// function fn2() {
//     console.log(2);
// }
// fn1.call.call(fn2)

// function Animal(type) {
//     this.type = type;
// }
// Animal.prototype.say = function (word) {
//     console.log(word);
// }
// mkNew = function () {
//     let constructor = [].shift.call(arguments)
//     let obj = {}
//     obj.__proto__ = constructor.prototype //创建的对象指向原型上的方法
//     let r = constructor.apply(obj, arguments)
//     return r instanceof Object ? r : obj
// }
// let animal = mkNew(Animal, '哺乳🥱')

// console.log(animal.type);
// animal.say('nidaye')
// compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
// const greeting = (name) => `hello ${name}`;
// const toUpper = (str) => str.toUpperCase();
// const fn = compose(toUpper, greeting);
// console.log(fn("sunny"));
// // HELLO SUNNY
// const reverse = str => str.split('').reverse().join('');
// function reverse(str) {
//     return str.split('').reverse().join('')
// }
// reverse('hello world');
// console.log(reverse('hello world'));
// new
// function myNew() {
//     let constructor = [].shift.call(arguments)
//     let obj = {}
//     obj.__proto__ = constructor.prototype
//     let r = constructor.apply(obj, arguments)
//     return r instanceof Object ? r : obj
// }
// function Person(name) {
//     this.name = name
//     // return { wo: 'sjs' }
// }
// let me = muNew(Person, 'sos')
// console.log(me.wo);

// Function.prototype.myCall = function (context = window, ...args) {
//     let fn = Symbol('fn')
//     context.fn = this;
//     let result = context.fn(...args);
//     delete fn;
//     return result
// }
// let foo = {
//     value: 1
// }
// function bar(age) {
//     console.log(age)
//     console.log(this.value);
// }


// Function.prototype.myApply = function (context = window, ...args) {
//     let fn = Symbol('fn')
//     context.fn = this
//     let result = context.fn(args)
//     delete context.fn;
//     return result
// }
// bar.myApply(foo, ['black', '18']) // black 18 1






// Function.prototype.myApply = function (cos = window, ...args) {
//     let fn = Symbol('fn')
//     cos.fn = this;
//     let result = cos.fn(arg)
//     delete cos.fn
//     return result
// }

// function muNew() {
//     let constroctor = [].shift.call(arguments)
//     let obj = {}
//     obj.__proto__ = constroctor.prototype;
//     let r = constroctor.apply(obj, arguments);
//     return r instanceof Object ? r : obj
// }
// function Person(name) {
//     this.name = name
//     // return { wo: 'sjs' }
// }
// let me = muNew(Person, 'sos')
// console.log(me.name);


// s = "3[a]2[bc]"
// 输出："aaabcbc"
// s = "3[a2[c]]"
// // s = "2[abc]3[cd]ef"
// let a = s.split('');
// // let a = s.match(/\[(.+?)\]/g);
// // let a = s.substring(s.indexOf("[") + 1, s.indexOf("]"))
// console.log(a);
// console.log(s);

// console.log(typeof []+{});

// var name = '123'
// var obj = {
//     name: '435',
//     getName: () => {
//         parent = () => {
//             console.log(this.name);
//         }
//         parent()
//     }
// }
// obj.getName()

// function deepClone(obj) {
//     if (typeof obj !== 'object') return obj;
//     if (obj == null) return null;
//     if (obj instanceof Date) return new Date(obj);
//     if (obj instanceof RegExp) return new RegExp(obj);
//     Object.prototype.toString.call(obj) === '[object Array]'
//     let m = new obj.constructor()
//     for (let key in obj) {
//         m[key] = typeof obj[key] === 'object' ? deepClone(m[key]) : obj[key]
//     }
//     return m
// }
// function deepClone(obj) {
//     if (typeof obj !== "object") return obj;
//     if (obj == null) return null;
//     if (obj instanceof Date) return new Date(obj);
//     if (obj instanceof RegExp) return new RegExp(obj);
//     Object.prototype.toString.call(obj) === "[object Array]";
//     let o = new obj.constructor();
//     for (let key in obj) {
//         o[key] = typeof obj[key] === "object" ? deepClone(o[key]) : obj[key];
//     }
//     return o;
// }
let mx = { a: 1, b: 2 }
let ma = deepClone(mx)
mx.a = 3
console.log(ma);
console.log(mx);

function deepClone(obj) {
    if (typeof obj !== 'object') return obj;
    if (obj == null) return null
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj)
    // Object.prototype.toString.call(obj) === '[object Array]'
    let x = new obj.constructor()
    for (let key in obj) {
        x[key] = typeof obj[key] === 'object' ? deepClone(x[key]) : obj[key];
    }
    return x
}