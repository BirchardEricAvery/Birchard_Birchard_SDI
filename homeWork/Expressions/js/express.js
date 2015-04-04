/*  Name:       Eric Avery Birchard
    Assignment: Expressions homework
    Date:       3, April 2015
    Class:      SDI
    Term:       I

                //declare and assign variable
var a = 2;      //defining a
a = a+ 3;       //assigning or storing values to a

console.log(a); //logging a to output

//year of birth

var yearBorn = 1969;            //my year of birth

var age = 2015 - yearBorn - 1; //year of birth minus 1

console.log("I am" + " " + age + " " + "years old"); //logging my age to screen

//arithmetic operators

var width = prompt("enter width");  //prompt for value of width
Number(width);                      //convert string to number

var height = prompt("Enter height of triangle");    //prompt for height
Number(height);                                     //convert string to number

var area = width * height / 2;                      //variable math

console.log("The area of a triangle is " + " " + area); //log area of a triage to screen


//Modulo operator % for remainder

var number1 //declare variable
var number2 //declare variable
var number1 = prompt("Enter a numbers to divide for remainder" + number1);  //first number
var number2 = prompt("Enter second number" + number2);                        //prompt for values of variables
var remainder

Number(number1, number2);

remainder = number1 % number2;

console.log("The remainder is" + " " + remainder);

//Order of operations

var quiz1 = prompt("Quiz 1");   //variable input
var quiz1 = Number(quiz1);      //String to number

var quiz2 =  prompt("Quiz 2");   //variable input
var quiz2 = Number(quiz2);                  //String to number

var quiz3 =  prompt("Quiz 3");   //variable input
var quiz3 = Number(quiz3);                  //String to number

var quiz4 = prompt("Quiz 4");   //variable input
var quiz4 = Number(quiz4);                  //String to number

var quizAverage = (quiz1 + quiz2 + quiz3 + quiz4)/4;    //mathematical PEMDAS


console.log("The average quiz score for all for quizzes" + " " + quizAverage); //log quiz average


//Arrays

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2]

console.log("Array access total" + " " + total);



//Concatenating strings

var middleName = "Avery"; //declaring variables
var lastName = "Birchard"; //declaring variables
var fullName = middleName + " " + lastName; //concatenating

console.log("My name is" + " " + fullName);  //logging to console


//Casting string to a number

var stringVar = "6"; //string variable
var result = 7 + Number(stringVar); //casting string to a number
console.log("Number plus a string" + " " + result); //logging result to console


//Casting number to a string

var areaCode = 217;     //declaring variables
var firstPart = 722;    //declaring variables
var secPart = 5628;     //declaring variables

var phoneNo = "("+String(areaCode)+")" +" "+ String(firstPart)+" "+"-"+" "+String(secPart);  //casting numbers to strings

console.log("My phone number is" + " " + phoneNo); //logging strings to screen
    */

//Assignment operators

var a = 3;
a *= 4; //a = a * 4
console.log("Assignment" + " " + a);
a ++; //a = a +1 or a += 1
console.log("Decrement" + " " + a);