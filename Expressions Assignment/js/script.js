/**
    Student:        Eric (Avery) Birchard
    Instructor:     Dan Williams
    Assignment:     Expressions
    Date:           4/ 5/ 2015
    Class:          SDI 1503
    Term:           1
 */

//alert("test"); //First js file test

//Checkbook


var startingBal;                    //starting balance (numerical)
var minusTotal;                     //total negative (numerical
var posTotal;                       //total positive (numerical)
var running;                        //running balance (numerical)
var tenDep                          //list out deposits (numerical) array
var tenWithdraws                    //list out withdraws (numerical) array
var name;                           //name variable (string)
var phone;                          //phone number as a string
var address;                        //address (string)
var estIntM;                        //estimated interest rate monthly
var estIntY                         //estimated interest rate if you balance averages...(numerical)
var int                             //interest rate
var numberDep; var numberWithdraws  //running count of deposits and withdraws

var w; var w1; var w2; var w3; var w4; var w5; var w6; var w7; var w8; var w9; //for ten withdraws
var d; var d1; var d2; var d3; var d4; var d5; var d6; var d7; var d8; var d9; //for ten deposits


//TODO: prompts
//data types number, string, array

//Contact information
name = prompt("Enter your name");                           //account holders name
console.log("Your name is:" + " " + name);                  //console logging name

address = prompt("enter your address:" + " " + address);    //account holders address on one line
console.log("Residence:" + " " + address);                  //console logging address

phone = prompt("Enter contact number:" + " " + phone);      //contact phone number
console.log("Phone number:" + " " + phone);                 //console logging phone number


//Starting balance
startingBal = prompt("Enter your staring balance");                 //prompt for string input from user
var startingBal = Number(startingBal);                              //casting string to a number

//Interest rate
int = prompt("enter your annual percentage rate:");                 //interest to be calculated on average balance
var int = Number(int);                                              //casting int string to a number

//Console logging balance and interest rate
console.log("Your staring balance is:" + " " + startingBal);        //console logging starting balance
console.log("Your APR is:" + " " + int);                            //console logging APR


//increment entry's
//2 examples of arithmetic operators + and -, /, *
//2 assignment operators += -= *= /= -- ==

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
