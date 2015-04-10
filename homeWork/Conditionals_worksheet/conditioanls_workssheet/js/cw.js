/*  Name:       Eric Avery Birchard
    Assignment: Conditionals worksheet
    Instructor  Dan Williams
    Date:       10, April 2015
    Class:      SDI
    Term:       I
*/

//Stuff your face, do you weigh enough to enter the pie eating contest?

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




