import "../../../kolibri/util/array.js";
import {toSeq} from "../../../kolibri/sequence/util/helpers.js";
import {Seq}   from "../../../kolibri/sequence/constructors/seq/seq.js";
import {sum}   from "./aoc_util.js";
import {Walk}  from "../../../kolibri/sequence/constructors/range/range.js";

export { day_03, allNumbersInLine, allSpecialCharsInLine, partNumbers }

const allNumbersInLine = line =>
    toSeq(line.matchAll(/(\d+)/g))
        .map( match => ({
            number: Number(match[1]),
            start:  match.index,
            end:    match.index + match[1].length - 1})
        );

const allSpecialCharsInLine = line =>
    toSeq(line.matchAll(/([^0-9. ])/g))
        .map( match => match.index );

const partNumbers = (line1, line2, line3) => {
    const [...specialCharPositions] = Seq(line1, line2, line3)
        .map(allSpecialCharsInLine)
        .mconcat();
    return allNumbersInLine(line2)
        .takeWhere( ({start, end}) => specialCharPositions.some(pos => pos >= start - 1 && pos <= end + 1 ));
};

const day_03 = ([...inputArray]) =>
    Walk(1, inputArray.length - 2)
        .map( i => partNumbers(inputArray[i - 1], inputArray[i], inputArray[i + 1]))
        .mconcat()
        .map( ({number}) => number)
        .reduce$(sum, 0);
