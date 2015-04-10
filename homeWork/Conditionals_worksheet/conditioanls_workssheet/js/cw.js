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



//TODO Celsius to Fahrenheit converter, got stuck

//variables

var conversionF;            //variable for conversion math
var answer;                 //variable to hole number degrees
conversionF = 9/5;          //value * conversionF = temp F

answer = prompt("Enter temperature in numbers:");                       //user input for numbers
Number(answer);                                                         //casting string to number

conversion = prompt("Enter a capital letter C:");                       //String value signifying temp type

console.log(answer + conversion + " " + "Converts to:" + " " + answer * conversionF + 32 + " " + "F") //log to console
 */

//TODO last chance for gas

//variables

var mpg;
var tank;
var gauge;
var gaugeCalc;
var distance;
var drive;

//MPG

mpg = prompt("What is your estimated MPG for this trip?");
Number(mpg);
console.log("Estimated MPG is:" + mpg + " " + "MPG");

//tank capacity
tank = prompt("What is your tank capacity?");
Number(tank);
console.log("Tank capacity:" + " " + tank + " " + "gal");

//Gauge reading, Gal left

gauge = prompt("What percent of fuel is left in your tank (leave out the percent symbol)");
Number(gauge);
console.log("Estimated fuel left in tank:" + (gauge *.1) * tank + " " + "%");
gaugeCalc = gauge * .01;
drive = (tank * gaugeCalc) * mpg;

//You can drive approximately?
console.log("You can drive about" + " " + drive + " " + "miles" + " " + "before needing to fuel.");

distance = prompt("What is the distance to the nest gas station?")
Number(distance);
console.log("Distance to next gas station:" + " " + distance + " " + "miles")


console.log("The next gas station is:" + " " + distance + " " + "miles out");

//Gas up, or move on

distance > drive ? console.log("Best to gas up now!") : console.log("Drive on, no need for gas");