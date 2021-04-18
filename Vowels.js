const numberOfVowels = function(data) {
  // Put your solution here
  let vowels = ['a','e','i','o','u'];
  let result = 0;
  for (i in data){
    for (j in vowels){
      if (data[i] === vowels[j]){
        result ++;
      }
    }
  }
  return result;
};
  
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));