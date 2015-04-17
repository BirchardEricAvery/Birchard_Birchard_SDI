/**
    Student:        Eric (Avery) Birchard
    Instructor:     Dan Williams
    Assignment:     Expressions
    Date:           4/ 7/ 2015
    Class:          SDI Week# 2
    Term:           1
 */

//Checkbook


var startingBal;                    //starting balance (numerical)
var running;                        //running balance (numerical)
var tenDep;                         //list out deposits (numerical) array
var tenWithdraw;                    //list out withdraws (numerical) array
var int;                            //interest rate
var incDep; var incWith;            //incrementing and decrementing deposits and withdraws
incWith = 0; incDep = 0;            //Beginning increment and decrement values
var intMo                           //monthly interest rate

var w; var w1; var w2; var w3; var w4; var w5; var w6; var w7; var w8; var w9; //for ten withdraws
var d; var d1; var d2; var d3; var d4; var d5; var d6; var d7; var d8; var d9; //for ten deposits


//TODO: prompts
//data types number, string, array

//Contact information
//TODO: cast as strings

var name = prompt("Enter your full name");                              //account holders name
String(name);
console.log("Name:" + " " + name);                                      //console logging name

var address = prompt("enter your complete address:");                   //account holders address on one line
String(address);
console.log("Residence:" + " " + address);                              //console logging address

var phone = prompt("Enter contact number:");                            //contact phone number
String(phone);
console.log("Phone number:" + " " + phone);                             //console logging phone number

//Starting balance
startingBal = prompt("Enter your staring balance");                     //prompt for string input from user
var startingBal = Number(startingBal);                                  //casting string to a number
console.log("Starting balance:" + " " + "$" + startingBal);             //console log starting balance




//TODO: checkbook math for withdraws and deposits

//1 Withdraw 1 Deposit...
//assignment operators += -= *= /= -- ==
w = prompt("Enter amount of withdraw:");                                    //First withdraw
w = Number(w);                                                              //casting var w string to a number
console.log("Withdraw:" + " " + "$" + w);                                   //running total math
alert("Withdraw:" + " " + "$" + w);                                         //running total math
running = startingBal - w;                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running );                    //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running );              //balance after withdraw

d = prompt("Enter amount of deposit \n If no deposit enter the number 0:");  //First deposit
d = Number(d);                                                              //casting var d string to number
alert("Deposit:" + " " + "$" + d);                                          //deposit
console.log("Deposit:" + " " + "$" + d);                                    //deposit

running += d; console.log("Balance after deposit:" + " " + "$" + running);  //balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                      //balance after deposit
//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w + "\n" + "Deposit:" + " " + "$" + d);         //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w + "\n" + "Deposit:" + " " + "$" + d);   //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements


//2 Withdraw 2 Deposit...
//assignment operators += -= *= /= -- ==
w1 = prompt("Enter amount of withdraw:");                                       //First withdraw
w1 = Number(w1);                                                                //casting var w string to a number
console.log("Withdraw:" + " " + "$" + w1);                                      //running total math
running -= w1;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running);                         //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running);                   //balance after withdraw

d1 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");    //First deposit
d1 = Number(d1);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d1);                                             //deposit
console.log("Deposit:" + " " + "$" + d1);                                       //deposit

running += d1; console.log("Balance after deposit:" + " " + "$" + running);           //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w1 + "\n" + "Deposit:" + " " + "$" + d1);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w1 + "\n" + "Deposit:" + " " + "$" + d1); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements

//3 Withdraw 3 Deposit...
//assignment operators += -= *= /= -- ==
w2 = prompt("Enter amount of withdraw:");                                       //First withdraw
w2 = Number(w2);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w2);                                            //running total math
console.log("Withdraw:" + " " + "$" + w2);                                      //running total math
running -= w2;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running);                         //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running);                   //balance after withdraw

d2 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");    //First deposit
d2 = Number(d2);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d2);                                             //deposit
console.log("Deposit:" + " " + "$" + d2);                                       //deposit

running += d2; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w2 + "\n" + "Deposit:" + " " + "$" + d2);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w2 + "\n" + "Deposit:" + " " + "$" + d2); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements


//4 Withdraw 4 Deposit...
//assignment operators += -= *= /= -- ==
w3 = prompt("Enter amount of withdraw:");                                       //First withdraw
w3 = Number(w3);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w3);                                            //running total math
console.log("Withdraw:" + " " + "$" + w3);                                      //running total math
running -= w3;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running );                        //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running );                  //balance after withdraw

d3 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");    //First deposit
d3 = Number(d3);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d3);                                             //deposit
console.log("Deposit:" + " " + "$" + d3);                                       //deposit

running += d3; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                          //balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w3 + "\n" + "Deposit:" + " " + "$" + d3);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w3 + "\n" + "Deposit:" + " " + "$" + d3); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements



//5 Withdraw 5 Deposit...
//assignment operators += -= *= /= -- ==
w4 = prompt("Enter amount of withdraw:");                                       //First withdraw
w4 = Number(w4);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w4);                                            //running total math
console.log("Withdraw:" + " " + "$" + w4);                                      //running total math
running -= w4;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running );                        //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running );                  //balance after withdraw

d4 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");     //First deposit
d4 = Number(d4);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d4);                                             //deposit
console.log("Deposit:" + " " + "$" + d4);                                       //deposit

running += d4; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                          //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w4 + "\n" + "Deposit:" + " " + "$" + d4);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w4 + "\n" + "Deposit:" + " " + "$" + d4); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements



//6 Withdraw 6 Deposit...
//assignment operators += -= *= /= -- ==
w5 = prompt("Enter amount of withdraw:");                                       //First withdraw
w5 = Number(w5);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w5);                                            //running total math
console.log("Withdraw:" + " " + "$" + w5);                                      //running total math//running balance withdraw
running -= w5;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running );                        //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running );                  //balance after withdraw

d5 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");    //First deposit
d5 = Number(d5);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d5);                                             //deposit
console.log("Deposit:" + " " + "$" + d5);                                       //deposit

running += d5; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w5 + "\n" + "Deposit:" + " " + "$" + d5);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w5 + "\n" + "Deposit:" + " " + "$" + d5); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements

//7 Withdraw 7 Deposit...
//assignment operators += -= *= /= -- ==
w6 = prompt("Enter amount of withdraw:");                                       //First withdraw
w6 = Number(w6);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w6);                                            //running total math
console.log("Withdraw:" + " " + "$" + w6);                                      //running total math
running -= w6;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running );                        //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running );                  //balance after withdraw

d6 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");     //First deposit
d6 = Number(d6);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d6);                                             //deposit
console.log("Deposit:" + " " + "$" + d6);                                       //deposit

running += d6; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                          //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w6 + "\n" + "Deposit:" + " " + "$" + d6);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w6 + "\n" + "Deposit:" + " " + "$" + d6); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements


//8 Withdraw 8 Deposit...
//assignment operators += -= *= /= -- ==
w7 = prompt("Enter amount of withdraw:");                                       //First withdraw
w7 = Number(w7);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w7);                                            //running total math
console.log("Withdraw:" + " " + "$" + w7);                                      //running total math
running -= w7;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running );                        //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running );                  //balance after withdraw

d7 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");     //First deposit
d7 = Number(d7);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d7);                                             //deposit
console.log("Deposit:" + " " + "$" + d7);                                       //deposit

running += d7; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                          //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w7 + "\n" + "Deposit:" + " " + "$" + d7);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w7 + "\n" + "Deposit:" + " " + "$" + d7); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements


//9 Withdraw 9 Deposit...
//assignment operators += -= *= /= -- ==
w8 = prompt("Enter amount of withdraw:");                                       //First withdraw
w8 = Number(w8);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w8);                                             //running total math
console.log("Withdraw:" + " " + "$" + w8);                                      //running total math
running -= w8;                                                                  //running balance withdraw
alert("Balance after withdraw:" + " " + "$" + running);                         //balance after withdraw
console.log("Balance after withdraw:" + " " + "$" + running);                   //balance after withdraw

d8 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");     //First deposit
d8 = Number(d8);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d8);                                             //deposit
console.log("Deposit:" + " " + "$" + d8);                                       //deposit

running += d8; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                          //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w8 + "\n" + "Deposit:" + " " + "$" + d8);       //Amount of withdraw and deposit
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w8 + "\n" + "Deposit:" + " " + "$" + d8); //Amount of withdraw and deposit
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements


//10 Withdraw 10 Deposit...
//assignment operators += -= *= /= -- ==
w9 = prompt("Enter amount of withdraw:");                                       //First withdraw
w9 = Number(w9);                                                                //casting var w string to a number
alert("Withdraw:" + " " + "$" + w9);                                            //running total math
console.log("Withdraw:" + " " + "$" + w9);                                      //running total math
running -= w9;                                                                  //running balance withdraw
alert("Balance after withdraw:"  + " " + "$" + running);                        //balance after withdraw
console.log("Balance after withdraw:"  + " " + "$" + running);                  //balance after withdraw

d9 = prompt("Enter amount of deposit \n If no deposit enter the number 0:");     //First deposit
d9 = Number(d9);                                                                //casting var d string to number
alert("Deposit:" + " " + "$" + d9);                                             //deposit
console.log("Deposit:" + " " + "$" + d9);                                       //deposit

running += d9; console.log("Balance after deposit:" + " " + "$" + running);     //operator for balance after deposit
alert("Balance after deposit:" + " " + "$" + running);                          //operator for balance after deposit

//increment entry's
incWith++;                      //decrementing for number of withdraws
incDep++;                       //incrementing for number of deposits

alert("Withdraw:" + " " + "$" + w9 + "\n" + "Deposit:" + " " + "$" + d9);       //Amount of withdraw and deposit and concatenations
alert("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);          //increments and decrements
console.log("Withdraw:" + " " + "$" + w9 + "\n" + "Deposit:" + " " + "$" + d9); //Amount of withdraw and deposit and concatenations
console.log("Withdraws" + " " + incWith + "\n" + "Deposits" + " " + incDep);    //increments and decrements



//check book calculations
//2+ examples of arithmetic operators + and -, /, *


//Interest rate
int = prompt("enter your annual percentage rate:");                     //interest to be calculated on average balance
int = Number(int);                                                      //casting int string to a number
intMo = int / 12;

//assignment operator += -= *= /= -- ==

alert("Your staring balance is:" + " " + "$" + startingBal);            //console logging starting balance
alert("Your APR is:" + " " + int + "%");                                //APR
alert("Your monthly APR is:" + " " + intMo + "%");                      //monthly interest rate

console.log("Your staring balance is:" + " " + "$" + startingBal);      //console logging starting balance
console.log("Your APR is:" + " " + int + "%");                          //console logging APR
console.log("Your monthly APR is:" + " " + intMo + "%");                //monthly interest rate

console.log("Interest rate for APR computation" + " " + (int *.01));        //yearly interest rate for computation
console.log("Interest rate for monthly computation" + " " + (intMo *.01));  // monthly interest rate for computation

//user information


console.log("Name:" + " " + name + "\n" + "Address:" + " " + address + "\n" + "Phone:" + " " + phone);  //concatenation of contact information


//array data variables for ten withdraws and deposits


tenWithdraw = [w, w1, w2, w3, w4, w5, w6, w7, w8, w9];                  //array for ten withdraws

console.log("Withdraws:" + incWith +  "\n" + tenWithdraw);              //console log for ten withdraws

var avgW = (w + w1 + w2 + w3 + w4 + w5 + w6 + w7+ + w8 + w9)/incWith;    //average withdraws

console.log("Your average withdraw is:" + " " + "$" + avgW);            //console log for average withdraw

tenDep = [d, d1, d2, d3, d4, d5, d6, d7, d8, d9];                       //console log number of deposits

console.log("Deposits:" + " " + incDep + "\n" + tenDep);                //ten deposits

var avgD = (d + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9)/incDep;     //average deposits
var avgD2 = (d + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9);
var avgW2 = (w + w1 + w2 + w3 + w4 + w5 + w6 + w7+ + w8 + w9);

console.log("Your average deposit is:" + " " + "$" + avgD);             //console log average deposit

var avgB = avgD2 - avgW2;                                                 //average balance

console.log("Your average balance is:" + " " + "$" + avgB);             //console log average balance


//monthly interest earned if balance stayed the same


console.log("If your average stayed at" + " " + "$" + avgB + " " + "\n" +
 "Then your monthly interest earned would be:" + " " + "$" + (avgB * intMo));


//yearly interest if balance stayed the same

console.log("And your yearly interest earned would be:" + " " + "$" + avgB * int);

//concatenation of contact information


alert("Name:" + " " + name + "\n" + "Address:" + " " + address + "\n" + "Phone:" + " " + phone + "\n" +
"Withdraws:" + incWith +  "\n" + tenWithdraw + "\n" +
"Your average withdraw is:" + " " + "$" + avgW + "\n" +
"Deposits:" + " " + incDep + "\n" + tenDep + "\n" +
"Your average deposit is:" + " " + "$" + avgD + "\n" + "\n" +
"Your average balance is:" + " " + "$" + avgB + "\n" +
"If your average stayed at" + " " + "$" + avgB + " " + "\n" +
"Then your monthly interest earned would be:" + " " + "$" + (avgB * intMo) + "\n" +
"And your yearly interest earned would be:" + " " + "$" + avgB * int);


/*

Entered my contact information and it displayed correctly.

Entered ten 100 deposits and got an average deposit of 100.

Entered ten $50 withdraws and got an average of 50.

Calculated a very rough average balance of $500.



 */

