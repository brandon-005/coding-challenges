function expect(value) {
    const toBe = function(value2) {
        if (value !== value2) throw Error("Not Equal")

        return true;
    }

    const notToBe = function(value2) {
        if (value === value2) throw Error("Equal")

        return true;
    }

    return { toBe, notToBe };
}


expect(5).toBe(5); // true
expect(5).notToBe(4); // true