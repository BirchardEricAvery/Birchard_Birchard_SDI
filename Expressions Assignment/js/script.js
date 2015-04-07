/**
    Student:        Eric (Avery) Birchard
    Instructor:     Dan Williams
    Assignment:     Expressions
    Date:           4/ 7/ 2015
    Class:          SDI 1503
    Term:           1
 */

//alert("test"); //First js file test

//Checkbook


var startingBal;                    //starting balance (numerical)
var running;                        //running balance (numerical)
var tenDep;                         //list out deposits (numerical) array
var tenWithdraw;                    //list out withdraws (numerical) array
var estIntM;                        //estimated interest rate monthly
var estIntY;                        //estimated interest rate if you balance averages...(numerical)
var int;                            //interest rate
var numberDep; var numberWithdraws; //running count of deposits and withdraws
var incDep; var incWith;            //incrementing and decrementing deposits and withdraws
incWith = 0; incDep = 0;            //Beginning increment and decrement values

var w; var w1; var w2; var w3; var w4; var w5; var w6; var w7; var w8; var w9; //for ten withdraws
var d; var d1; var d2; var d3; var d4; var d5; var d6; var d7; var d8; var d9; //for ten deposits


//TODO: prompts
//data types number, string, array

//Contact information
//TODO: cast as strings

var name = prompt("Enter your full name");                              //account holders name
String(name);
console.log("Name:" + " " + name);                                      //console logging name

var address = prompt("enter your complete address:");    //account holders address on one line
String(address);
console.log("Residence:" + " " + address);                              //console logging address

var phone = prompt("Enter contact number:");              //contact phone number
String(phone);
console.log("Phone number:" + " " + phone);                             //console logging phone number

//Starting balance
startingBal = prompt("Enter your staring balance");                     //prompt for string input from user
var startingBal = Number(startingBal);                                  //casting string to a number
console.log("Starting balance" + " " + startingBal);




//TODO: checkbook math for withdraws and deposits

//1 Withdraw 1 Deposit...
//assignment operators += -= *= /= -- ==
w = prompt("Enter amount of withdraw:");                                    //First withdraw
w = Number(w);                                                              //casting var w string to a number
console.log("Withdraw:" + " " + w);                                         //running total math
running = startingBal - w;                                                  //running balance withdraw
console.log("Balance after withdraw:" + " " + running );                    //balance after withdraw

d = prompt("End amount of deposit \n If not deposit enter the number 0:");  //First deposit
d = Number(d);                                                              //casting var d string to number
console.log("Deposit:" + " " + d);                                          //deposit

running += d; console.log("Balance after deposit:" + " " + running);        //balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws, 1
incDep++;                       //incrementing for number of deposits,  1

console.log("Withdraw:" + " " + w + "\n" + "Deposit:" + " " + d);               //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements


//2 Withdraw 2 Deposit...
//assignment operators += -= *= /= -- ==
w1 = prompt("Enter amount of withdraw:");                                       //First withdraw
w1 = Number(w1);                                                                //casting var w string to a number
console.log("Withdraw:" + " " + w1);                                            //running total math
running -= w1;                                                                  //running balance withdraw
console.log("Balance after withdraw:" + " " + running );                        //balance after withdraw

d1 = prompt("End amount of deposit \n If not deposit enter the number 0:");     //First deposit
d1 = Number(d1);                                                                //casting var d string to number
console.log("Deposit:" + " " + d1);                                             //deposit

running += d1; console.log("Balance after deposit:" + " " + running);           //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws, 1
incDep++;                       //incrementing for number of deposits,  1

console.log("Withdraw:" + " " + w + "\n" + "Deposit:" + " " + d);   //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep); //increments and decrements





//2+ examples of arithmetic operators + and -, /, *

//check book calculations



//Interest rate
int = prompt("enter your annual percentage rate:");                     //interest to be calculated on average balance
int = Number(int);                                                      //casting int string to a number

//assignment operator += -= *= /= -- ==
console.log("Your staring balance is:" + " " + startingBal);            //console logging starting balance
console.log("Your APR is:" + " " + int + "%");                          //console logging APR
int *= .01; console.log("Interest rate for computation" + " " + int);   //interest rate for computation


//array data variable outputs
//example of an array used as part of the calculation
/*

var tenDep[];

myArray();                      //array variable
myArray[0] = V + " ";
myArray[1] = mPG + " " + "and" + " ";
myArray[2] = gU + ".";

var personnel = new Array();

personnel[0] = new Array();
personnel[0][0] = "Name0";
personnel[0][1] = "Age0";
personnel[0][2] = "Address0";

personnel[1] = new Array();
personnel[1][0] = "Name1";
personnel[1][1] = "Age1";
personnel[1][2] = "Address1";

personnel[2] = new Array();
personnel[2][0] = "Name2";
personnel[2][1] = "Age2";
personnel[2][2] = "Address2";

console.log("Name : " + personnel[0][0] + personnel[1][0] + personnel[2][0] + "\r");
console.log("Age : " + personnel[0][1] + personnel[1][1] + personnel[2][1] + "\r");
console.log("Address : " + personnel[0][2] + personnel[1][2] + personnel[2][2] + "\r");
//string variable as output


//interest rate for average balance monthly and yearly


 Input type of car driven, in this cas it's a car.

 Input starting gallons in tank, that being 10.

 Input number of miles driven, generically I put 150.

 Input Gallons used, my input was 5.

 The output was, "Your Car MPG is: 30 using 5 Gallons.

 The array output strings of data used was,

 Console log output values. calcs, descriptive, string concatenation

 And lastly these comments.

 verify in GitHub
 5 or more commits

 */



//Save PDF flowchart as Birchard_Eric_Expressions_Flowchart.pdf in Expressions Assignment folder

//make a zip file of Birchard_Eric_Expressions_Assignment.zip for backup on FSO

//Make sure code is in the GitHub Repository
