/*  Name:       Eric Avery Birchard
    Assignment: Expressions homework
    Date:       3, April 2015
    Class:      SDI
    Term:       I
 */
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


