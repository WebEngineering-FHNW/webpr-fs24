import { TestSuite } from "../../src/kolibri/util/test.js";
import { Walk }      from "../../src/kolibri/sequence/sequence.js";

const suite = TestSuite("seq_map_filter_reduce");

suite.add("sequence", assert => {
    let   opsCount = 0;
    const numbers  = Walk(1,8);
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
        .takeWhile(below6)
        .foldr$((acc, cur) => acc + cur, 0);

    assert.is(result,   6);
    assert.is(opsCount, 6);
});

suite.run();
