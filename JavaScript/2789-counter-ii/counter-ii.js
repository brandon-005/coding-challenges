function createCounter(number) {
    let originalNumber = number;
    let counter = number;

    function increment() {
        return counter += 1;
    }

     function reset() {
        counter = originalNumber;
        return counter;
    }

    function decrement() {
        return counter -= 1;
    }

    return { increment, reset, decrement }
}

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4