const conditionalSum = function(values, condition) {
  // Your code here
  let result = 0;
  if (condition === 'even'){
    for(let i in values){
      if(values[i] % 2 === 0) {
        result = result + values[i];
      }
    }    
  }else if(condition === 'odd'){
    for(let i in values){
      if(values[i] % 2 !== 0) {
        result = result + values[i];
      }
    }
  }
  return result;
}
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));