const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let length = 0;
  let index = 0;
  for (let i in instructors){
    if (length < instructors[i]["name"].length){
      length = instructors[i]["name"].length;
      index = i;
    }
  }
  return instructors[index];
};
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));