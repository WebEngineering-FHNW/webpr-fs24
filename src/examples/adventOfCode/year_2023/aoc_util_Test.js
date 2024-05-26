
import { TestSuite }  from "../../../kolibri/util/test.js";
import {lines, words} from "./aoc_util.js";

const suite = TestSuite("examples/aoc/2023/aoc_util");

suite.add("words", assert => {

    assert.iterableEq(words(""),                []);
    assert.iterableEq(words(" "),               []);
    assert.iterableEq(words(" \n "),            []);
    assert.iterableEq(words(" aaa "),           ["aaa"]);
    assert.iterableEq(words(" aaa bbb ccc "),   ["aaa", "bbb", "ccc"]);

    const input = `
        1abc2
        pqr3stu8vwx
    `;
    assert.iterableEq(words(input), ["1abc2", "pqr3stu8vwx"]);

});

suite.add("lines", assert => {

    assert.iterableEq(lines(""),                [""]);
    assert.iterableEq(lines(" "),               [" "]);
    assert.iterableEq(lines("\n"),              ["",""]);
    assert.iterableEq(lines("aaa"),             ["aaa"]);
    assert.iterableEq(lines("aaa\nbbb\nccc"),   ["aaa", "bbb", "ccc"]);

    const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    `;
    assert.iterableEq(lines(input), [
        "",
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "    "
    ]);

});

suite.run();
