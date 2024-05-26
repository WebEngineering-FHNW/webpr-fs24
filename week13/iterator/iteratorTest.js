import { TestSuite }   from "../../src/kolibri/util/test.js";
import {Fib, Iterator} from "./iterator.js";

const suite = TestSuite("iterator");

suite.add("ctor", assert => {
    assert.iterableEq(Iterator(0, i=> i < 5, i=> i + 1), [0,1,2,3,4]);
    assert.iterableEq(Iterator(0, i=> i < 0, i=> i + 1), []);
    assert.iterableEq(Iterator(0, i=> i < 1, i=> i + 1), [0]);
});

suite.add("Fibonacci", assert => {
    assert.is(String([...Fib(10)]), "0,1,1,2,3,5,8");
});

suite.add("infinite", assert => {
    const numbers = Iterator(0, _i => true, i => i + 1);
    for(const n of numbers) {
        if (n < 100) continue;
        if (n > 101) break;
        assert.isTrue(n === 100 || n === 101);
    }
});

suite.run();

