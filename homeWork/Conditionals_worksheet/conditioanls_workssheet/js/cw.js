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


//TODO last chance for gas

//variables

var mpg;
var tank;
var gauge;
var gaugeCalc;
var distance;
var drive;

//MPG

mpg = prompt("What is your estimated MPG for this trip?");                          //MPG
Number(mpg);                                                                        //casting
console.log("Estimated MPG is:" + mpg + " " + "MPG");                               //log MPG

//tank capacity
tank = prompt("What is your tank capacity?");                                       //user input
Number(tank);                                                                       //casting
console.log("Tank capacity:" + " " + tank + " " + "gal");                           //log tank capacity

//Gauge reading, Gal left

gauge = prompt("What percent of fuel is left in your tank (leave out the percent symbol)"); //gauge reading
Number(gauge);                                                                              //casting
console.log("Estimated fuel left in tank:" + (gauge *.1) * tank + " " + "%");               //log percent left in tank
gaugeCalc = gauge * .01;                                                                    //math for tank
drive = (tank * gaugeCalc) * mpg;                                                           //math for distance

//You can drive approximately?
console.log("You can drive about" + " " + drive + " " + "miles" + " " + "before needing to fuel."); //log distance can drive

distance = prompt("What is the distance to the nest gas station?")                                  //input for distance to go
Number(distance);                                                                                   //casting
console.log("Distance to next gas station:" + " " + distance + " " + "miles");                      //log distance to gas


//Gas up, or move on

distance > drive ? console.log("Best to gas up now!") : console.log("Drive on, no need for gas");   //log advise


 */

//TODO grade letter calculator

//Full Sail grade scale
//Grade variables
var aPlus;      //95 - 100%
var a;          //90 - 94%
var bPlus;      //85 - 89%
var b;          //80 - 84%
var cPlus;      //76 - 79%
var c;          //73 - 75%
var d;          //70 - 72%
var f;          //0 - 69%

var gradeL;

grade = prompt("Enter percent number without the percent sign:");       //Enter value earned
Number(grade);                                                          //casting string to a number

//calculations

if(grade >= 95){gradeL = "A+"

}else if(grade >= 90){gradeL = "A"

}else if(grade >= 85){gradeL = "B+"}

else if(grade >= 80){gradeL = "B"}

else if(grade >= 76){gradeL = "C+"}

else if(grade >= 73){gradeL = "C"}

else if(grade >= 70){gradeL = "D"}

else if(grade > 69){gradeL = "F"};

//“You have a X%, which means you have earned a(n) X in the class!”
console.log("You have an" + " " + grade + "%" + " " + "\n" +
"which means you have earned a(n)" + " " + gradeL + " " + "in the class!")


