/*              Name:       Eric Avery Birchard
 Instructor:    Dan Williams
 Assignment:    HomeWork Loops
 Date:          24, April 2015
 Class:         SDI
 Section:       1
 Term:          I
 */
//Functions -- normal
//Procedures
//Anonymous functions
//idea  password and requirements? and user id generator number.random
//Functions

//Normal function
/*
//re-usable code or function
//send to function arguments
calcArea(30, 20);

//bins/ parameters

function calcArea(w, h){
    var area = w * h;
    console.log(area);

}

//invocation/ function call
//using, scoped to function/ variable
calcArea();
console.log(area);
//prints 5 outside as console is outside, scoped to outside w

//arguments variables and parameters are where variables are stored
    */

//dog years

function dogYears(age){ //parameter for storage
    var dogYears = age * 7;
    alert("Sparky is " + dogYears + " years old.")
    console.log("Sparky is " + dogYears + " years old.")
}
//passing information/ value to first parameter
age1 = prompt("What is Sparky's age?"); Number(age1);

//argument passed in
dogYears(age1);


