const calculateChange = function(total, cash) {
    // Your code here
    let change = cash - total;
    //console.log('a'+change);
    let changeName = ['twentyDollar','tenDollar','fiveDollar','twoDollar','oneDolladr','quarter','dime','nickel','penny'];
    let changeAmount = [2000,1000,500,200,100,25,10,5,1];
    let result = [];
    let i = 0;
    let count = 0;
    while (change >= 0 && i < 9){

        if (change >= changeAmount[i]){
            change = change - changeAmount[i];
            count ++;
            //console.log('change'+change);
            //console.log('count'+count);
        }else{
            count > 0 ? result.push(changeName[i] + ': ' + count): '';
            count = 0;
            i++; 
            //console.log(result);
            //console.log('i ' + i);
        }
    }
    return '{ ' + result.join(',') + ' }';
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));