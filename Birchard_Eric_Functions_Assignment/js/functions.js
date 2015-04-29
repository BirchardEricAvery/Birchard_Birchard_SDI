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


//TODO: Trailer member maker

//I for identifier, N for trailer number, E for end identifier
//TWO*** functions

//Variables




//Begin trailer number maker prompts
//validation loop
//3 parameters
var i = prompt("Enter trailer number identifier (letter/s), if none leave blank:");

//Trailer number
n = prompt("Enter trailer number:");

//casting n to a number and validating
Number(n);

if(n === "") {
    prompt("Entry was left blank, " +
        "please enter a trailer number:")
}else if(isNaN(n)) {
    n = prompt("Please enter numbers only for trailer number:")
        }else{alert("Trailer number: " + n)}

            //while loop for for blank entry for trailer number
            while(n === ""){
            prompt("Entry was left blank, " +
            "please enter a trailer number:")
                }

            //while loop for trailer number if not a number
            while(isNaN(n)){prompt("Please enter numbers only for trailer number:")
            }


    //casting n to a number and validating
Number(n);


var e = prompt("Enter end trailer identifier if any (letter/s, if none leave blank:");


//putting function variables in to answer
trailerNumber = trailer(i, n, e);

//making function trailer using i, n, e variables aka 3 arguments
function trailer(i, n, e) {
    var ine;

    //putting w & h into area
    ine = i + e + n;

    //function returning, or spitting out information via variable area
    return ine;

}
//reporting answer via console log
console.log("Trailer number created" + " " + trailerNumber);



//TODO: Trailer location identifier
//TWO*** functions
//Validate

//TODO: Trailer location description added to trailer
//Validate

//TODO: Chose R for recall, M for modify
//Validate


//Return values


//Required





//Anonymous function

//write end test values
//5 commits, verify in get hub, send link to instructor
//Relivance

//zip Birchard_Eric_Functions_Assignment to FSO and GitHub



