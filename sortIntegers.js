const sortByBits = function (arr) {
    const count = (x) => {
        const str = x.toString(2)
        let num = 0
        for (const c of str) {
            if (c === '1') {
                num += 1
            }
        }
        return num
    }
    return arr.sort((a, b) => {
        const countA = count(a)
        const countB = count(b)
        return countA === countB ? a - b : countA - countB
    })
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
// the output should look like this [0,1,2,4,8,3,5,6,7]