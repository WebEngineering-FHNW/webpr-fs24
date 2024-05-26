import { toSeq } from "../../../kolibri/sequence/util/helpers.js";
import {id}      from "../../../kolibri/stdlib.js";

export { lines, words, sum }

/** Split a string into a sequence of words.
 * @param  { String } input  - a possibly multiline string
 * @return { SequenceType<String> } - all words, non-empty
 */
const words = input =>
    toSeq(input.split(/\b/))
         .map       (line   => line.trim())
         .dropWhere (line   => line.length < 1);

/** Split a string into a sequence of lines.
 * @param  { String } input  - a multiline string
 * @return {SequenceType<String>} - all lines including empty ones
 */
const lines = input =>
    toSeq(input.split(/\r?\n/)).map(id);

/** convenience function to be used in reduce or foldr$ */
const sum = (acc, cur)  => acc + Number(cur);
