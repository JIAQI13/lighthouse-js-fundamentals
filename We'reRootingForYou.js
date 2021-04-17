const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
  
const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let name = '';
  let rank = 0;
  for (let i in vegetables){
    if (vegetables[i][metric] > rank){
      rank = vegetables[i][metric];
      name = vegetables[i]["submitter"];
    }
  }
  console.log(name);
}
  

const metric = 'redness'
judgeVegetable(vegetables, metric)