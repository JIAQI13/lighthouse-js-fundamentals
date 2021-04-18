const urlEncode = function(text) {
  // Put your solution here
  //return text.replace(/\s/g,'%20')
  let result = '';
  text = text.trim();
  for (let i in text){
    //console.log(text[i]);
    if (text[i] === ' ' ){
      //console.log('success');
      result = result + '%20';
    }else{
      result = result + text[i];
    }
  }
  return result;
};
  
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));