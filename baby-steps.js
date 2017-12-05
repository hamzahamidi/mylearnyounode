function sum(array) {
    if (array.length < 2) return -1;
    let sum = 0;
    for (let i = 2; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum;
}
console.log(sum(process.argv));