function createCounter(integer) {
    let originalNumber = integer;
    let functionCount = 1;

    return function counter() {
        if (functionCount === 1) {
            functionCount += 1;
            return originalNumber;
        }

        functionCount += 1;
        return originalNumber += 1;
    }
}


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12