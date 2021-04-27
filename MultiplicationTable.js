const multiplicationTable = function(maxValue) {
    // Your code here
    let result = [];
    for (let i = 1; i <= maxValue; i++){
        let resultInner = [];
        for (let j = 1; j <= maxValue; j++){
            resultInner.push(i * j);
        }
        result.push('\n');
        result.push(resultInner.join(' '));
    }
    return result.join(' ');
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));