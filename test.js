arr = [1, 2, 3, 4, 1, 2, 2, 2]
let result = []
arr.reduce((a, c) => {
    console.log(result);
    if (a[c]) !result.includes(c) && result.push(c);
    else a[c] = 1;
    return a
}, {})
console.log(result)