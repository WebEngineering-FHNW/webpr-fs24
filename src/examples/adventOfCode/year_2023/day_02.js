import "../../../kolibri/util/array.js";

export { day_02, parseLine }

const parseLine = line => {
    const [_full, game, gameLine] = line.match(/Game\s+?(\d+):(.*)/);
    const drawLines = gameLine.split(";").map(cube => cube.trim() );
    const draws = drawLines.map( drawLine => {
        const [_1, red  ] = drawLine.match(/(\d+)\s+?red/)   ?? [,"0"];
        const [_2, green] = drawLine.match(/(\d+)\s+?green/) ?? [,"0"];
        const [_3, blue ] = drawLine.match(/(\d+)\s+?blue/)  ?? [,"0"];
        return { red, green, blue }
    });
    return {game, draws}
} ;

// draw is only possible if at least 12 red cubes, 13 green cubes, and 14 blue cubes are available
const drawIsPossible = draw =>
    Number(draw.red  ) <= 12 &&
    Number(draw.green) <= 13 &&
    Number(draw.blue ) <= 14;

const day_02 = inputLines =>
    inputLines
        .map       ( parseLine )
        .takeWhere ( game => game.draws.every(drawIsPossible) )
        .map       ( game => Number(game.game)) ;

