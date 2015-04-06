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
var name;                           //name variable (string)
var phone;                          //phone number as a string
var address;                        //address (string)
var estIntM;                        //estimated interest rate monthly
var estIntY                         //estimated interest rate if you balance averages...(numerical)


//interest rate for average balance
//increment entry's
//2 examples of arithmetic operators + and -, /, *
//example of an array used as part of the calculation
//string variable as output
//2 assignment operators += -= *= /= -- ==

//TODO: prompts
//data types number, string, boolean, array

vehicleType = prompt("What type of vehicle do you drive?");              //prompt for string input from user

var startingGallons = prompt("Starting fuel in tank");                   //prompt for number input from user

var milesDriven = prompt ("How many miles have you driven so far");      //prompt for number input for miles driven

var fillUp = prompt ("How many gallons did it take to fill your tank?"); //prompt for number of gallons it took to fill tank

// re-var, meaning my vars to shorter vars for calculations

V = vehicleType;        //Vehicle type is now V

sG = startingGallons;   //Starting Gallons is now SG

mD = milesDriven;       //Miles driven is now mD

fU = fillUp;            //fillUp is now FU


// Calculations for MPG and gallons used

gU = sG - fU;      //Gallons used arithmetic operation 2


mPG = mD/ fU;      //MPG calculation with parentheses prioritization arithmetic operation 2



//Your MPG is: (type of concatenation)

alert("Your" + " " + V + " " + "MPG" + " " + "is:" + " " + mPG + " " + "using" + " " + gU + " " + "Gallons");

isThereGasLeftOver = true;  //boolean value

//array data variable outputs
var myArray;
myArray =  new Array();         //array variable
myArray[0] = V + " ";
myArray[1] = mPG + " " + "and" + " ";
myArray[2] = gU + ".";

alert("Types of data used in this program:" + " " + myArray);



//TODO: console logs //with descriptive sentences

console.log("vehicleType value" + " " + vehicleType);                       //string value for vehicle type
console.log("V value" + " " +V);                                            //assign sting to V for shorter reference
console.log("startingGallons value" + " " + startingGallons);               //string input for starting gallons
console.log("sG value" + " " + sG);                                         //assign string to SG for numerical value
console.log("milesDriven value" + " " +milesDriven);                        //string value for miles driven
console.log("mD value" + " " + mD);                                         //assign string to MD for numerical value
console.log("fillUp value" + " " + fillUp);                                 //string variable for initial fill up.
console.log("fU value" + " " + fU);                                         //assign fillUp to FU for numerical value
console.log("isThereGasLeftOver value" + " " + isThereGasLeftOver);         //assign boolean value true to variable is ThereGasLeftOver
console.log("gU value" + " " + gU);                                         //Gallons used variable
console.log("mPG value" + " " + mPG);                                       //MPG variable for miles per gallon calculation
console.log("myArray values" + " " + myArray[0], myArray[1], myArray[2]);   //array for console list purposes

/*
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
