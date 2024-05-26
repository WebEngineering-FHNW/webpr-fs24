import {TestSuite}         from "../../../kolibri/util/test.js";
import {day_02, parseLine} from "./day_02.js";
import {lines, sum}        from "./aoc_util.js";

const suite = TestSuite("examples/aoc/2023/day_02");

suite.add("parseLine", assert => {
    const game1 = parseLine('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green');
    assert.is(game1.game, "1");
    assert.is(game1.draws.length, 3);
    assert.is(game1.draws[0].blue,  "3");
    assert.is(game1.draws[0].red,   "4");
    assert.is(game1.draws[0].green, "0");

    const game2 = parseLine('Game 111: 33 blue, 4 red');
    assert.is(game2.game, "111");
    assert.is(game2.draws.length, 1);
    assert.is(game2.draws[0].blue,  "33");
    assert.is(game2.draws[0].red,   "4");
    assert.is(game2.draws[0].green, "0");


});


suite.add("day02", assert => {
    const input = ` 
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
    `;
    const inputLines = lines(input)
        .map(line => line.trim())
        .dropWhere(line => line.length < 1);

    const result = day_02(inputLines);
    assert.iterableEq(result, [1, 2, 5]);
    assert.is( result.foldr$(sum, 0), 1 + 2 + 5);

});

suite.run();
