export { Iterator, Fib }

const Iterator = (startValue, whileFn, incrementFn) => {
    const next = () => {
        const proceed = whileFn(startValue);
        let   value = undefined;
        if (proceed) {
            value = startValue;
            startValue = incrementFn(startValue);
        }
        return { value: value, done: !proceed };

    };
    return {
        [Symbol.iterator]: () => ({ next })
    };
};


const Fib = n => {
    let prev = 1;
    return Iterator(0, i => i < n, i => {
        const result = prev + i;
        prev = i;
        return result;
    });
};
