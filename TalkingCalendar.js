const talkingCalendar = function(date) {
    // Your code here
    let year = date.slice(0,4);
    //console.log(year);
    let month = date.slice(5,7);
    let day = date.slice(8,10);
    let monthEng = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
    let dayEng = '';
    switch (day){
      case 1:
      case 21:
      case 31:
        dayEng = 'st';
        break;
      case 2:
      case 22:
      case 32:
        dayEng = 'nd';
        break;
      case 3:
      case 23:
      case 33:
        dayEng = 'rd';
        break;
      default:
        dayEng = 'th';
        break;
    }

    return monthEng[month] + ' ' + Number(day) + dayEng + ', ' + year;
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));
  