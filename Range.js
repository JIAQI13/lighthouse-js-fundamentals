function range(start, end, step) {
  let myNewArray = [];
  if (start >= end || step <= 0) {
    myNewArray = [];
  } else {
    for(let i = start; i <= end; i += step) {
      myNewArray.push(i);
    }
  }
  return myNewArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));