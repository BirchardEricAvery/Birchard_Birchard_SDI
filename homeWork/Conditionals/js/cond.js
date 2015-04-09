/*  Name:       Eric Avery Birchard
    Assignment: Conditionals homework
    Date:       8, April 2015
    Class:      SDI
    Term:       I


//conditionals

//caparison
temp = 82;


if(temp > 70){
    goToTheBeach();

    if(warmWater) {
        wearNewSuit();
    }
}else{
    goToTheMovies();
}



//Conditional logic
var oldEnough = false;
//if the child is old enough, print to the console "you can ride!"

if(oldEnough){
    //code performed if condition is true
    console.log("You can ride the coaster!");

}
console.log("What comes after.");



//Conditional logic
//if the kid is over 48 inches in height

var kidHeight = 40;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");

}

//Conditional logic
//Condition with Expressions

//if the kid is over 48 inches in height

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"

if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");

}



//Conditional logic
//If else

//if the kid is over 48 inches in height

var kidHeight = 48;
var minHeight = 48;
var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
    //code performed if condition is false
} else{
    console.log("Sorry kid you got some growing to do first!");

}

    */

//Conditional logic
//else if for three blocks of code always has a condition attached

//if the kid is over 48 inches in height

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45;

//if the child is old enough, print to the console "you can ride!"

if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the coaster!");
    //you can ride with a parent present
    //else should never have a conditions attached
}else if(kidHeight > wParentHeight){
    console.log("You can ride,but only with a parent present.");
    //sorry kid you have some growing to do
    console.log("Sorry kid you got some growing to do first!");
}else{}

/*
Relational operators > < >= <= compare to result in true or false
Equality operators
    Equal           =       overwrites
    Equality        ==      or the same as      6 == "6" is TRUE
    Strict Equality ===     same value and type 6 === "6" is FALSE faster
    Inequality      !=      or not equal to     a != b      is TRUE
