const urlDecode = function(text) {
    // Put your solution here
    let result = {};
    let keyWord = '';
    let key = '';
    for (let i = 0 ; i < text.length; i++){
        if (text[i] !== '=' && text[i] !== '&' && text[i] !== '%'){
            keyWord = keyWord + text[i];
        }else if(text[i] === '=' ){
            key = keyWord;
            result[keyWord] = '';
            keyWord = '';
        }else if(text[i] === '%' || text[i] == '2' || text[i] === '0' ){
            i = i + 2;
            keyWord = keyWord + ' ';
        }else{
            result[key] = keyWord;
            keyWord = '';
        }
    }
    result[key] = keyWord;
    return result;
  };
  
  console.log(urlDecode("duck=rubber"));
  console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);