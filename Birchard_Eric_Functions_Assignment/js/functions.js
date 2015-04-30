/*
 Name:           Eric Avery Birchard
 Instructor:     Dan Williams
 Assignment:     Functions Assignment
 Date:           29, April 2015
 Class:          SDI
 Section:        1
 Term:           I
 */
//Arguments and Parameters present in every function
//Main code variables are not used inside of functions


//TODO: Trailer member maker********************************************************************************

//I for identifier, N for trailer number, E for end identifier


//Begin trailer number maker prompts
//validation loop
//3 parameters
//lowercase
var i = prompt("Enter trailer number identifier:");
//validation
//while loop for for blank entry for trailer number

while(i === ""){

    if(i === "") {
        i = prompt("Entry was blank, please enter a trailer identifier:");
    }else if(String(i)){
        alert("Your trailer identifier is: " + i)
    }


}

//making trailer identifier lower case
i = i.toLowerCase();

//Trailer number
var n = prompt("Enter trailer number:");


//while loop for for blank entry for trailer number

while(n === "" || isNaN(n)){

    if(n === "") {
        n = prompt("Entry was blank, please enter numbers only for trailer number:");
    }else if(isNaN(n)){
        n = prompt("Please use only use numbers:")
    }


}

//casting string n to a number
n = parseInt(n);



var e = prompt("Enter end trailer identifier:");
//validation
//while loop for for blank entry for trailer end identifier

while(e === ""){

    if(e === "") {
        e = prompt("Entry was blank, please enter an end trailer identifier:");
    }else if(String(e)){
        alert("Your trailer identifier is: " + i)
    }


}

//making trailer end identifier lower case
e = e.toLowerCase();


//putting function variables in to answer
var trailerNumber = trailer(i, n, e);


//TODO: Trailer number maker function******************************************************************************
//making function trailer using i, n, e variables aka 3 arguments
function trailer(i, n, e) {
    var ine;

    //putting i n e into trailer
    ine = i + n + e;

    //function returning, or spitting out information via variable ine
    return ine;

}

//reporting answer via console log
alert("Your trailer is: " + trailerNumber);

//console logging trailer number created
console.log("Trailer number created" + " " + trailerNumber);



/*
//TODO: Trailer location function**********************************************************************************
//prompt for location maker
 //lowercase
var i2 = prompt("Enter location number identifier (letter/s), if none leave blank:");

//Trailer number
n2 = prompt("Enter trailer number:");

//casting n to a number and validating
Number(n2);

if(n2 === "") {
    prompt("Entry was left blank, " +
        "please enter a location number:")
}else if(isNaN(n2)) {
    n = prompt("Please enter numbers only for location number:")
}else{alert("Location number: " + n)}

//while loop for for blank entry for trailer number
while(n2 === ""){
    prompt("Entry was left blank, " +
        "please enter a location number:")
}

//while loop for trailer number if not a number
while(isNaN(n2)){prompt("Please enter numbers only for trailer number:")
}


//casting n to a number and validating
Number(n2);


var e2 = prompt("Enter end trailer identifier if any (letter/s, if none leave blank:");


//putting function variables in to reference2
locationNumber = trailer(i2, n2, e2, reference);
var reference2 = 0; reference2++;

//making function trailer using i, n, e variables aka 3 arguments
function trailer(i2, n2, e2, reference) {
    var ine2;

    //putting w & h into area
    ine = i2 + n2 + e2 + reference;

    //function returning, or spitting out information via variable area
    return ine2;

}

*/






//anonymous function has to come after function
//combine trailer number and location

/*
var addNums = function(num1, num2){
    var total = Number(num1)+Number(num2);
    return total;
};
//call
var totalReturned = addNums(5, 6);
console.log(totalReturned + " returned");
*/
//array display trailer, location, combined

//write end test values
//5 commits, verify in get hub, send link to instructor


//zip Birchard_Eric_Functions_Assignment to FSO and GitHub



