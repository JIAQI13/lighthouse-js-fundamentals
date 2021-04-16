const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
    // Your code in here ...
    let x = 0;
    let y = 0;
    for (let i in moves){
        if(moves[i] === 'north'){
            y++;
        }else if(moves[i] === 'west'){
            x--;
        }else if(moves[i] === 'south'){
            y--;
        }else if(moves[i] === 'east'){
            x++;
        }   
    }
    console.log([x,y]);
    return [x,y];
}
finalPosition(moves);