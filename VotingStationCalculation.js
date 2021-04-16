const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  
  const chooseStations = function (stations) {
    // Your code in here ...
    let result = [];
    for (let i in stations){
      if (stations[i][1] > 20){
        if (stations[i][2] === 'school' || stations[i][2] === 'community centre'){
          result.push(stations[i][0]);
        }
      }
    }
    console.log(result);
    return result;
  }
  chooseStations(stations);