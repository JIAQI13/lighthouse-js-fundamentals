function camel(input){
    let result = '';
    for (let i = 0; i < input.length; i ++){
        if (input[i] === ' '){
            i++;
            result = result + input[i].toUpperCase();
        }else{
            result = result + input[i];
        }
    }
    return result;
}

function pascal(input){
    return camel(input[0].toUpperCase() + input.slice(1) );
}

function snake(input){
    let result = '';
    for (let i = 0; i < input.length; i ++){
        if (input[i] === ' '){
            result = result + '_';
        }else{
            result = result + input[i];
        }
    }
    return result;
}

function kebab(input){
    let result = '';
    for (let i = 0; i < input.length; i ++){
        if (input[i] === ' '){
            result = result + '-';
        }else{
            result = result + input[i];
        }
    }
    return result;
}

function title(input){
    let result = '';
    for (let i = 0; i < input.length; i ++){
        if (input[i] === ' '){
            i++;
            result = result + ' ' + input[i].toUpperCase();
        }else{
            result = result + input[i];
        }
    }
    return result[0].toUpperCase() + result.slice(1);
}

function vowel(input){
    let result = '';
    let vowel = 'aeiou'
    let find =  false;
    for (let i in input){

        for (let j in vowel){
            if (input[i] === vowel[j]){
                find = true;
            }
        }

        if (find === true){
            result = result + input[i].toUpperCase();
            find = false;
        }else{
            result = result + input[i];
        }
    }
    return result;
}


function consonant(input){
    let result = '';
    let vowel = 'aeiou'
    let find =  false;
    for (let i in input){

        for (let j in vowel){
            if (input[i] === vowel[j]){
                find = true;
            }
        }

        if (find === true){
            result = result + input[i];
            find = false;
        }else{
            result = result + input[i].toUpperCase();
        }
    }
    return result;
}

function upper(input){
    let result = '';
    for (let i in input){
        //console.log('a');
        result = result + input[i].toUpperCase();
    }
    return result;
}

function lower(input){
    let result = '';
    for (let i in input){
        result = result + input[i].toLowerCase();
    }
    return result;
}



const makeCase = function(input, cases) {
    // Put your solution here
    let result = '';
    switch(cases){
        case 'camel':
            result = camel(input);
            break;
        case 'pascal':
            result = pascal(input); 
            break;
        case 'snake':
            result = snake(input);
            break;
        case 'kebab':
            result = kebab(input);
            break;
        case 'title':
            result = title(input);
            break;
        case 'vowel':
            result = vowel(input);
            break;
        case 'consonant':
            result = consonant(input);
            break;
        case 'upper':
            result = upper(input);
            break;
        case 'lower':
            result = lower(input);
            break;
        default:
            if (!cases) break;
            let process =[];
            process.push(makeCase(input,cases[0]));
            for (let i =1; i < cases.length; i++ ){
                process.push(makeCase(process[i-1],cases[i]));
            }
            result = process.pop();
    }
    return result;
  }
  
  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["upper", "snake"]));