const squareCode = function(message) {
    // Put your solution here
    message = message.replace(/\s+/g, '');
    //console.log(message);
    let wordCount = message.length;
    //console.log(wordCount);
    let wordLine = Math.ceil(Math.sqrt(wordCount));
    //console.log(wordLine);
    let result = '';
    for (let i = 0; i < wordLine; i++){
        let count = i;
        while (count < wordCount){
            result += message[count];
            count += wordLine;
        }
        result += ' ';
    }
    /*
    let square = [];
    let element = '';
    let total = 0;
    while(total < wordCount){
        if (total % wordLine === 0  && total !== 0){
            square.push(element);
            element = '';
        }
        element = element + message[total];
        total++;
        //console.log(total);
    }
    square.push(element);
    console.log(square);
    */
    return result;
  };
  
  console.log(squareCode("chill out"));
  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));