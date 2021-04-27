const repeatNumbers = function(data) {
    // Put your solution here
    let result = [];
    for (let i in data){
        result.push((data[i][0].toString()).repeat(data[i][1]));
    }
    return (result.toString());
  }
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));