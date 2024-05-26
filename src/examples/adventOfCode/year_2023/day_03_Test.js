import {TestSuite}         from "../../../kolibri/util/test.js";
import {lines}             from "./aoc_util.js";
import {day_03, allNumbersInLine, allSpecialCharsInLine, partNumbers } from "./day_03.js";

const suite = TestSuite("examples/aoc/2023/day_03");

suite.add("allNumbersInLine", assert => {
    const [...result] = allNumbersInLine('467..114..');
    assert.is(result.length, 2);
    assert.is(result[0].number, 467);
    assert.is(result[0].start, 0);
    assert.is(result[0].end, 2);
    assert.is(result[1].number, 114);
    assert.is(result[1].start, 5);
    assert.is(result[1].end, 7);
});

suite.add("allSpecialCharsInLine", assert => {
    let result;
    [...result] = allSpecialCharsInLine('467..114..');
    assert.is(result.length, 0);
    result = allSpecialCharsInLine('...$.*..77');
    assert.iterableEq(result, [3, 5]);

});

suite.add("threeLines", assert => {
    const line1 = '...$..*......9';
    const line2 = '467..114.77..9';
    const line3 = '..35..63*.....';
    const result = partNumbers(line1, line2, line3).map( ({number}) => number);
    assert.iterableEq(result, [467, 114, 77]);

});

suite.add("day03", assert => {
    const input = `
    467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..
    `;

    assert.is(day_03( /** @type { readonly [any] } */ lines(input)), 4361);

});

suite.run();
