
import { TestSuite } from "../../../kolibri/util/test.js";
import { day1a, day1b }     from "./day_01.js";

const suite = TestSuite("examples/aoc/2023/day_01");

suite.add("example1", assert => {

    const input = `
        1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet
    `;
    assert.is(day1a(input), 12 + 38 + 15 + 77);

});

// it is underspecified what should happen when words overlap at the end like in
// threetwone
// is it 32ne or 3tw1 ? Ond could argue for both, given the description and examples.

suite.add("example2", assert => {

    const input = `
        two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen
    `;
    assert.is(day1b(input), 29 + 83 + 13 + 24 + 42 + 14 + 76);

});

suite.run();
