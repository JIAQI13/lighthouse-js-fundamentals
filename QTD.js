function generateBoard(whiteQueen, blackQueen){
    let row = [];
    let column = [];
    for (let j = 0; j < 8; j++){
        row.push(0);
    }
    for (let i = 0; i < 8; i++){   
        //console.log(row);
        column.push(row);
        //console.log(column.length);
    }
    console.log(column);
    column[whiteQueen[0]][whiteQueen[1]] = 1;
    column[blackQueen[0]][blackQueen[1]] = 1;
    return column;
}

function queenThreat(generateBoard){
    return '';
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));