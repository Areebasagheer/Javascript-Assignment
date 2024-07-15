// Question # 1
// var date = new Date();
// document.write(date);

// // Question # 2
// var date = new Date();
// var month = date.getMonth();
// mlist = [ "January", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write( "<br/>" + 'Current Month :' + mlist[month])

// // Question # 3
// var date = new Date();
// var day = date.getDay();
// var dayList = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
// document.write("<br/>" + 'Today is '+ dayList[day]) 

// // Question # 4
// var date = new Date();
// var day = date.getDay();
// var days = ['sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// if(days === 'saturday' && days === 'sunday'){
//     alert("It's Fun day ");
// }
// else{
//         alert('Today is not fun day ');
// }

// // Question # 5
// var dateNow = new Date();
// var date = dateNow.getDate();
// if(date<16){
//     document.write("<br/>" + 'First fifteen days of the month')
// }
// else{
//     document.write('last days of the month')
// } 

// // Question # 6
// var date = new Date();
// var millisec=date.getTime();
// document.write("<br/>" + "Current date: " + date);
// document.write("<br/>" + 'ELasped milliseconds since January 1,1970 :'+ millisec + '<br/>')
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br/>");

// // Question # 7
// var dateNow=new Date();
// var hours=dateNow.getHours();
// if(hours>12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// // Question # 8
// var todayDate = new Date();
// var laterDate = new Date('31 Dec 2020');
// document.write(laterDate);

// // Question # 9
// var dateToday= new Date();
// var todayMilli=dateToday.getTime();
// var lastRamadan=new Date('June 18, 2015');
// var milliRamdan=lastRamadan.getTime();
// var diffMilliSec=todayMilli-milliRamdan;
// var days =Math.floor(diffMilliSec/(1000*60*60*24));
// document.write(days+' days have passed since Ist Ramadan,2015')


// // Question # 10
// var dateToday = new Date();
// var todayMilli = dateNow.getTime();
// var year2015=new Date('1 Jan,2015');
// var milli2015=year2015.getTime();
// var diffMilliSec=todayMilli-year2015
// var seconds=Math.floor(diffMilliSec/(1000));
// document.write("<br/>" + 'On reference date :'+dateNow+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015');

// // Question # 11
// var today = new Date();
// var hoursAgo=today.getHours();
// hoursAgo=hoursAgo-1;
// document.write("current date: " + today + "<br>");
// today.setHours(hoursAgo);
// document.write("1 hour ago, it was " + today);

// // Question # 12
// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);

// // Question # 13
// var age=+prompt('Enter your age');
// var today= new Date();
// var yearNow=today.getFullYear();
// var birthYear=yearNow-age;
// document.write('Your age is '+age+'<br>'+' Your birth year is '+birthYear);

// // Question # 14
// var customerName='Areeba';
// var today=new Date();
// var month=today.getMonth();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var noUnits=410;
// var chargePerunit=16;
// var netAmount=noUnits*chargePerunit;
// var lastCharge=350;
// var afterDueDate=netAmount+lastCharge;
// document.write('<h1>'+'K-Electric Bill'+'</h1>')
// document.write('Customer Name :'+customerName+'<br>');
// document.write('Month :'+mlist[month]+'<br>');
// document.write('Number of units :'+noUnits+'<br>');
// document.write('Charges per unit :'+chargePerunit+'<br>');
// document.write('<br>')
// document.write('Net Amount Payabale (Within Due Date) :'+netAmount+'<br>');
// document.write('Late payment surcharge :'+lastCharge+'<br>');
// document.write('Gross payment Payable(after Due Date) :'+afterDueDate+'<br>');

