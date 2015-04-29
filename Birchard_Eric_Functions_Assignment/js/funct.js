/*
    Name:           Eric Avery Birchard
    Instructor:     Dan Williams
    Assignment:     HomeWork Functions Worksheet
    Date:           28, April 2015
    Class:          SDI
    Section:        1
    Term:           I
 */

//TODO: Calculate the Area of a Rectangle

//putting function calcArea into answer

//parameters of function
//prompt for width
var w = prompt("Enter width of rectangle:");

//casting w to a number
Number(w);

//prompt for hights
var h = prompt("Enter hight of rectangle:");
//casing h to a number
Number(h);

//putting function variables in to answer
answer = calcArea(w, h);

//making function calcArea using w & h variables
function calcArea(w, h) {
    var area;

    //putting w & h into area
    area = w * h;

    //function returning, or spitting out information via variable area
    return area;

}
//reporting answer via console log
console.log("The Area of the Rectangle is" + " " + answer);

//TODO: Circumference of a circle C = 2 * pie * r, or 2 * 3.14 * x

//parameters of function

var r = prompt("What is the Radius of your circle?");
//making variable r a number
parseInt(r);

//two
var t = 2;

//pie
var p = 3.14;

//putting function calcC into x
x = calcC(t, p, r);

//making function calcC to calculation the area of a circle
function calcC(t, p, r){
    var c;

    //putting variables, or calculations into circ variable
    c = t * p * r;

    //returning, or spitting out circ variable
    return c;
}

//logging x or area of a circle to console
console.log("The circumference of the Circle is" + " " + x);

/*TODO: It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
TODO:Begin bee sting function kill
*/

//Victim's weight (in pounds)

//amount of bee stings to kill
var stingKill = 8.666666667;

//user input of victims weight into variable weight
var weight = prompt("What is the victims weight?");

//making weight variable a number
parseInt(weight);


//putting function calcK into x
var x = calcK(stingKill, weight);


//making function calcK to function variables
function calcK(stingKill, weight){
    var kill;

    //putting variables, or calculations into kill variable
    kill = stingKill * weight;

    //returning, or spitting out kill variable
    return kill;
}


//Result to print to the console
//weight of animal
//number of required stings to kill

console.log("Number of stings required to kill an animal weighing" + " " + weight + " " +
    "is" + " " + x);

