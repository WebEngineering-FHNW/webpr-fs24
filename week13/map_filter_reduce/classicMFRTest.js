import {TestSuite} from "../../src/kolibri/util/test.js";

const suite = TestSuite("classic_map_filter_reduce");

suite.add("classic", assert => {
    let   opsCount = 0;
    const numbers  = [1, 2, 3, 4, 5, 6, 7, 8];

    const double = n => {
        opsCount++;
        // console.log("double", n);
        return n * 2;
    };
    const below6 = n => {
        opsCount++;
        // console.log("below6", n);
        return n < 6;
    };
    const result = numbers
        .map(double)
        .filter(below6)
        .reduce((acc, cur) => acc + cur, 0);

    assert.is(result,    6);
    assert.is(opsCount, 16);
});

suite.run();
