function fibonacci(num) {
    if (num <= 1) {
        return num - 1;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

module.exports = fibonacci;
