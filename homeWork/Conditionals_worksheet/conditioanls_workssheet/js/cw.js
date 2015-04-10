/*  Name:       Eric Avery Birchard
    Assignment: Conditionals worksheet
    Instructor  Dan Williams
    Date:       10, April 2015
    Class:      SDI
    Term:       I
*/
/*
//TODO Stuff your face, do you weigh enough to enter the pie eating contest?

//variables

var weight;     //weight variable
var toLight;    //variable to hold to light to enter
var enter;      //variable to hold weighty enough to enter

//strings

toLight = "You need to gain weight in order to enter the contest.  " + "\n" +
    "Eat more tasty things!";                                       //To light to enter

enter = "Your weighty enough, may you eat your way to the top!";    //weighty enough to enter


weight = prompt("Please enter you weight to determine if you qualify to enter the pie eating contest" +
    "\n" + "Please enter numbers only");                            //enter variable for weight

Number(weight);                                                     //cast weight string to a number

weight >= 250 ? console.log(enter) : console.log(toLight);

*/

//TODO Celsius to Fahrenheit converter

//variables

var conversion;
var conversionF;
var conversionC;
var c;
var C;
var f;
var F;
var answerF;
var answerC;


conversionF = 9/5 + 32;     //value * conversionF = temp F
conversionC = 5/9 - 32      //value  * conversionC = temp C

c = "Celsius";      //celsius string variable
C = "Celsius";      //celsius string variable
f = "Fahrenheit"    //Fahrenheit string variable
F = "Fahrenheit"    //Fahrenheit string variable

conversion = prompt("Enter a letter signifying temp type:");


parseInt(conversion);

conversion = c || C ? answerF = conversion * conversionF : answerC = conversion * conversionC;

console.log(conversion);




//32F is 0C
//100C is 212F
//90F is 32.22C




