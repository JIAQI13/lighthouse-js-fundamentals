const camelCase = function(input) {
    // Your code here
    let result = [];
    for (let i in input){
        if (input[i] === ' ' ){
            i++;
            result.push(input[i].toUpperCase());
            i++;
        }else{
            result.push(input[i]);
        }
        }
    return result.join("");
    }
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));