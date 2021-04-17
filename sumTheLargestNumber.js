const sumLargestNumbers = function(data) {
    // Put your solution here
    data = data.sort(function(a,b){return a-b});
    let a = data.pop();
    let b = data.pop();
    return a + b;
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));