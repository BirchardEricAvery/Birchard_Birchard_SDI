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
*/
/*
Relational operators > < >= <= compare to result in true or false
Equality operators
    Equal           =       overwrites
    Equality        ==      or the same as      6 == "6" is TRUE
    Strict Equality ===     same value and type 6 === "6" is FALSE faster
    Inequality      !=      or not equal to     a != b      is TRUE


 Logical operators (boolean or comparisons only)
    And                 &&
    Or                  ||
    Exclusive Or (OXR)  ^
    Not                 !

    TRUE    TRUE        &&  ||
    TRUE    FALSE           ||
    FALSE   TRUE            ||  !
    FALSE   FALSE               !

a === b && b === c




//Conditional Logic - Logical operators AND if our paycheck is over 300

var budget = 100;
var iPhonePrice = 199.99
var wonLottery = true;

//if the price of the phone is less than our budget

if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}


//Ternaries requires 3 components

if(condition){
    do if true;
}else{
    do if false;
}

//Ternary version

(condition) ? do if true : do if false;



var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate

if(gps > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!")
}

var gpa = 48;

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

*/

var age =6;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get the The Time machine

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);