/*              Name:       Eric Avery Birchard
 Instructor:    Dan Williams
 Assignment:    HomeWork Loops
 Date:          24, April 2015
 Class:         SDI
 Section:       1
 Term:          I
 */
//Functions -- normal
//Proceedures
//Anonymous functions
//idea  password and requirements? and user id generator number.random
//Functions

//Normal function

//re-usable code or function
var w = 5;

function calcArea(){
    var w = 20;
    var h = 30;
    var area = w * h;
    console.log(area);

}

//invocation/ function call
//using, scoped to function/ variable
calcArea();
console.log(w);
//prints 5 outside as console is outside, scoped to outside w