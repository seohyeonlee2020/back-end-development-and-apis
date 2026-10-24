function isPrime(num) {
    if (num == 1) {
        return false
    }
    if (num == 2) {
        return true
    }
    sqrt = Math.floor(num ** 0.5)
    for (let i = 2; i < sqrt + 1; i += 1) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

module.exports = { isPrime, }

/*
console.log(isPrime(46))
console.log(isPrime(37))*/
