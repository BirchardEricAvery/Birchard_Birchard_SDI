/*
    Name:           Eric Avery Birchard
    Instructor:     Dan Williams
    Assignment:     HomeWork Functions Worksheet
    Date:           24, April 2015
    Class:          SDI
    Section:        1
    Term:           I
 */

//Calculate the Area of a Rectangle

var answer = calcArea(5, 6);    //putting function calcArea into answer

function calcArea(w, h) {      //making function calcArea using w & h variables
    var area;
    area = w * h;              //putting w & h into area

    return area;                   //function returning, or spitting out information via variable area

}
console.log("The Area of the Rectangle is" + " " + answer);  //reporting answer via console log

//Circumference of a circle C = 2 * pie * r, or 2 * 3.14 * x

//parameters of function

var r = prompt("What is the Radius of your circle?"); //Radius of your circle
parseInt(r);                        //making variable r a number

var t = 2;                          //two
var p = 3.14;                       //pie

x = calcC(t, p, r);             //putting function calcC into x

function calcC(t, p, r){            //making function calcC to calculation the area of a circle
    var circ;
    circ = t * p * r;           //putting variables, or calculations into circ variable
    return circ;                    //returning, or spitting out circ variable
}

console.log("The circumference of the Circle is" + " " + x);   //logging x or area of a circle to console

//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
//Begin bee sting function kill


//Victim's weight (in pounds)
var stingKill = 8.666666667;                                        //amount of bee stings to kill
var weight = prompt("What is the victims weight?");                //user input of victims weight into variable weight
parseInt(weight);                                                 //making weight variable a number

//Return number of bee stings


var x = calcK(stingKill, weight);               //putting function calcK into x

function calcK(stingKill, weight){              //making function calcK to function variables
    var kill;
    kill = stingKill * weight;              //putting variables, or calculations into kill variable
    return kill;                                //returning, or spitting out kill variable
}


//Result to print to the console

console.log("Number of stings required to kill an animal weighing" + " " + weight + " " +   //weight of animal
    "is" + " " + x);                                                                           //number of required stings to kill

