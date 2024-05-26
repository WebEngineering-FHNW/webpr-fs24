import                          "../../../kolibri/util/array.js";
import { words, sum } from "./aoc_util.js";
import { Seq }        from "../../../kolibri/sequence/constructors/seq/seq.js";

export { day1a, day1b }

/**
 * @param { SequenceType<String> } wordSeq
 */
const sumFirstAndLastDigits = wordSeq =>
    wordSeq
         .map    (line   => Seq(...line).takeWhere(c => c >= '0' && c <= '9'))
         .map    (digits => digits.head() + digits.reverse$().head())
         .foldr$ (sum, 0);

const day1a = input =>
    sumFirstAndLastDigits( words(input) );

const numWords = "one two three four five six seven eight nine".split(" ");
const digitFromWord = numWord => numWords.indexOf(numWord) + 1;

const day1b = input => {

    const replace = indexFn => compareFn =>  line => {
        const candidates = numWords
            .map    ( word => [word, indexFn(line, word)])
            .filter ( ([_,i]) => i > -1)
            .sort   ( ([_1,a],[_2,b]) => compareFn(a,b));
        if(candidates.length > 0) {
            const [numWord, foundAtIndex] = candidates[0];
            const ary = [...line];
            ary.splice( foundAtIndex, numWord.length, digitFromWord(numWord) );
            line = ary.join("");
        }
        return line;
    };

    const lines = words(input)
        .map(replace( (line, word) => line.indexOf(word))     ((a, b) => a - b))
        .map(replace( (line, word) => line.lastIndexOf(word)) ((a, b) => b - a));

    return sumFirstAndLastDigits(lines);
};
