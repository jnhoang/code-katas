dayOfWeek(9, 11, 1985);


function dayOfWeek(month, day, year) {
  // var daysInyear = (2017 - year) * 365; // year will always be off by one
  var daysInYear  = (year - 1589) * 365;
  // console.log('daysInYear: ', daysInYear);
  var leapDays    = countLeapYears(1589, year);
  var daysInMonth = getDaysInMonth(month);

  // console.log('months: ',months[month-1])

  var daysTot   = day + daysInMonth + daysInYear + leapDays - 1;
  var days      = daysTot % 7;

  return printDay(days);
}
function getDaysInMonth(month) {
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  days = 0;
  for (var i = 0; i < month - 1; i++) {
    days += months[i];
  }

  return days;
}
function printDay(dayNumber){
  switch(dayNumber % 7){
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("WTF mate? Bad data!");
  }
}

function countLeapYears(startYear, endYear) {
  console.log('start year: ', startYear);
  console.log('end year: ', endYear);
  var ctr = 0;
  for (var i = startYear; i < endYear; i++) {
    //console.log(i);
    if (isLeapYear(i)) {
      // console.log('leap year: ', i)
      ctr++;
    }
  }
  console.log('exiting countLeapYears()\namount of leap years: ', ctr);
  return ctr;
}

function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    //console.log('exiting isLeapYear(), first if cond')
    return false;
  }
  else if (year % 4 === 0) {
    //console.log('exiting isLeapYear(), else if cond')
    return true;
  }
  else {
    //console.log('exiting isLeapYear(), else cond')
    return false;
  }
}

