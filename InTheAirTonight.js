const checkAir = function (samples, threshold) {
    // Code here!
    let total = samples.length;
    let dirty =0;
    for (let i in samples){
        if (samples[i] === 'dirty'){
            dirty ++;
        }
    }
    let ratio = dirty / total;
    //console.log(ratio);
    if (ratio > threshold){
        return 'Polluted';
    }else{
        return 'Clean';
    }
  };
  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))
  