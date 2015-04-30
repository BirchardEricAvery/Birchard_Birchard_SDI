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


//putting function variables in trailer moving them to trailerNumber
var trailerNumber = trailer(i, n, e);


//TODO: Trailer number maker function#1 *********************************************************************
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







//TODO: Trailer location function#2  ************************************************************************
//prompt for location maker

 //Begin trailer location maker prompts
 //validation loop
 //3 parameters
 //lowercase
 var identifierLocation = prompt("Enter trailer location identifier:");


 //while loop for for blank entry for trailer number identifier

 while(identifierLocation === ""){

    if(identifierLocation === "") {
     identifierLocation = prompt("Entry was blank, please enter a trailer location identifier:");
        }else if(String(identifierLocation)){
            alert("Your trailer location identifier is: " + identifierLocation)
 }


 }

 //making trailer location identifyer lower case
identifierLocation = identifierLocation.toLowerCase();



 //Trailer location number
 var numberLocation = prompt("Enter trailer identification number:");


//while loop for for blank entry for trailer location number

while(numberLocation === "" || isNaN(numberLocation)){

    if(numberLocation === "") {
        numberLocation = prompt("Entry was blank, please enter numbers only for trailer location number:");
    }else if(isNaN(numberLocation)){
        numberLocation = prompt("Please use only use numbers:")
    }


}

//casting numberLocation  to a number
numberLocation = Number(numberLocation);


//making trailer type
//variables
//trailer types
var van;
van = "van";
var flatbed;
flatbed = "flatbed";
var refer;
refer = "refer";


var trailerType = prompt("Enter trailer type \n" +
    "(van, refer, flatbed:");
//validation
//while loop for for blank entry for trailer type

while(trailerType === ""){

    if(trailerType === "") {
        trailerType = prompt("Entry was blank, please enter a trailer identifier \n " +
            "(van, refer, flatbed):");
    }else if(trailerType = van){
        alert("Trailer type: " + trailerType)
    }


}

//making trailer type lower case
trailerType = trailerType.toLowerCase();

//console log trailer
console.log("Trailer type: " + trailerType);



var locationAnswer = locationFunction(identifierLocation +
    " ", numberLocation + " ", trailerType);



//making function for trailer identifier, number location, and type
function locationFunction(identifierLocation, numberLocation, trailerType) {
    var identifyLocationType;

    //putting identifier location and type into identifyLocationType
    identifyLocationType = identifierLocation + numberLocation + trailerType;

    //function returning, or spitting out information via variable identifyLocationType
    return identifyLocationType;

}

//reporting answer via console log
alert("Your trailer location is: " + locationAnswer);

//console logging trailer number created
console.log("Trailer number created" + " " + locationAnswer);




//TODO: anonymous function

//anonymous function has to come after function
//combine trailer number and location
//defining function and it's parameters


var clt = function(locationAnswer, trailerNumber){

    var combined = locationAnswer + " " +  trailerNumber;

        return combined;
};

//invoking
var locTrailer = clt(locationAnswer, " Trailer Number: " + trailerNumber);

//console logging location of trailer
console.log("Your trailer location for your trailer is: " + locTrailer);

//notifying user of trailer number and location
alert("Location of your trailer is: " + locTrailer);




//End test values
/*
Trailer identifier left blank and got entry was blank, please enter a trailer identifier.
Entered N.
Prompted for trailer number, entered CAT got Plse use only numbers:
Entered 1000.
For trailer identifier left blank, got entry was blank, please enter an end identifier.
Entered  capital P.
Received Your trailer number is: n1000p.

Prompted for trailer location identifier, left blank.  Entry was blank received.
Entered North Side.
Prompted for Enter trailer identification number, entered DOG.
Got please enter only numbers.  Then left blank, got entery was left blank.
Entered 565.
Prompted for trailer type, van, refer, flatbed. left blank.  Received entry was left blank
please enter....
Entered van
Received, Your trailer location is: north side 565 van  Trailer Number: n1000p
All console logs followed in suit
 */
//send link to instructor


//zip Birchard_Eric_Functions_Assignment to FSO and GitHub



