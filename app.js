// // CHAPTER NO 26 TO 30


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number=3.45214;
//  var a=Math.round(number);
//  var b=Math.floor(number);
//  var c=Math.ceil(number);
//  document.write("number:" + " " + number + " <br>");
//  document.write("round of value:" + " " + a + "<br>");
//  document.write("floor value:" + " " + b + "<br>");
//  document.write("ceil value:" + " " + c + "<br>");

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var number=-2.673;
//  var a=Math.round(number);
//  var b=Math.floor(number);
//  var c=Math.ceil(number);
//  document.write("number:" + " " + number + " <br>");
//  document.write("round of value:" + " " + a + "<br>");
//  document.write("floor value:" + " " + b + "<br>");
//  document.write("ceil value:" + " " + c + "<br>");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var x=-4;
// var x=x*x;
// var x=Math.sqrt(x);
// document.write("The absolute value" + " " + -x + " is " + x);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var randomNumber=Math.random();
// var dice=(randomNumber*6) + 1;
// var a=Math.floor(dice);
// document.write("random dice value:" + " " + a);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber=Math.random()*101;
// var number=Math.floor(randomNumber)
// document.write("random number between 1 and 100:" + " " + number);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user

// var a=+prompt("enter your number");
// var b=Math.floor(Math.random()*10) + 1;
// if (a==b){
//     alert("congratulate the user");
// }

// CHAPTER NO 31 TO 34


// 1. Write a program that displays current date and time in
// your browser.

// var today=new Date();
// document.write(today);

// 2. Write a program that alerts the current month in words.
// For example December.


// var currentMonth=new Date();
// currentMonth.toString();
// var b=currentMonth.toString();
// var c=b.slice(4,7);
// document.write(c)


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var currentDay=new Date();
// currentDay.toString;
// var b=currentDay.toString();
// var c=b.slice(0,3);
// document.write("Today is" + " " + c);

// 4. Write a program that displays a message “It’s Fun day” if
// // // its Saturday or Sunday today.

//  var dayName=["sun","mon","tue","wed","thur","fri","sat"];
// var currentDate=new Date();
// var day=currentDate.getDay();
// var thisDate=dayName[day];
//  if(thisDate==="sat"){
//     document.write("its Fun day")
// }
//  else if(thisDate==="sun"){
//     document.write("its Fun day")
//  }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var a=new Date();
// var b=a.getDate();
// if(b<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date=new Date();
// var secDate=new Date(1970);
// var sec=secDate.getMilliseconds();
// var s=date-secDate;
// var minutes=secDate.getMinutes();
// var m=sec/1000*60*60*24*30*12; 
// document.write("current date:" + " " + date + "<br>" + "elapsed milisecond since january 1,1970:" + " " + s + " <br>" + "elapsed minutes since january 1,1970:" + " " + m)

// 7. Write a program that tests whether it's before noon and
// // alert “Its AM” else “its PM”.

// var a= new Date();
// var b=a.toString;
// var c=b.slice(16,19);
// if(c==="12:"){
// document.write("it's PM")
// }
// else if(c==="13:"){
//     document.write("it's PM")
//     }
    
// else if(c==="14:"){
//     document.write("it's PM")
//     }
    
// else if(c==="15:"){
//     document.write("it's PM")
//     }
    
// else if(c==="16:"){
//     document.write("it's PM")
//     }
    
// else if(c==="17:"){
//     document.write("it's PM")
//     }
    
// else if(c==="18:"){
//     document.write("it's PM")
//     }
    
// else if(c==="19:"){
//     document.write("it's PM")
//     }
    
// else if(c==="20:"){
//     document.write("it's PM")
//     }
    
// else if(c==="21:"){
//     document.write("it's PM")
//     }
    
// else if(c==="22:"){
//     document.write("it's PM")
//     }
    
// else if(c==="23:"){
//     document.write("it's PM")
//     }
    
// else if(c==="24:"){
//     document.write("it's PM")
//     }
    
// else if(c==="01:"){
//     document.write("it's AM")
//     }
//     else if(c==="02:"){
//         document.write("it's AM")
//         }
//         else if(c==="03:"){
//             document.write("it's AM")
//             }
//             else if(c==="04:"){
//                 document.write("it's AM")
//                 }
//                 else if(c==="05:"){
//                     document.write("it's AM")
//                     }
//                     else if(c==="06:"){
//                         document.write("it's AM")
//                         }
//                         else if(c==="07:"){
//                             document.write("it's AM")
//                             }
//                             else if(c==="08:"){
//                                 document.write("it's AM")
//                                 }
//                                 else if(c==="09:"){
//                                     document.write("it's AM")
//                                     }
//                                     else if(c==="10:"){
//                                         document.write("it's AM")
//                                         }
//                                         else if(c==="11:"){
//                                             document.write("it's AM")
//                                             }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate=new Date("27 jun 2021");
// document.write(laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var dateOfBirth=new Date(+prompt("enter your age here"));
// var today=new Date();
// var myBirth=new Date();
// var a=today.getTime();
// var b=myBirth.getTime();
// var c=a-b;
// var age=Math.floor(c/(1000*60*60*24*30*12));
// alert("your age is:" + " " + age);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,