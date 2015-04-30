
//Random number

var minNum = prompt("Lets find a number between two numbers" +"\n" +
"What is the minimum number");

var maxNum = prompt("Max number:");
//re-prompt
while(minNum === ""){
    minNum = prompt("Please enter number:")
}

var happy = prompt("Happy?");

happy = happy.toLowerCase();

while(happy  !="yes" && happy != "no" && happy !="maybe") {
    happy = prompt("Plese use yes, maybe or no. \n are you happy?");
}
//fucntion call is the GO BUTTON that runs the function
//arguments go inside of the function call
//convert
//random(minNum, maxNum)
//function
//parameters boxes, they catch arguments
//makes the code more flexible
//we do Not want to use main code var in functions

//return value
var returnedValue = random(minNum, maxNum);
// var returnedValue = randomNumber;
console.log(returnedValue);

function random(min, max){
    var randomNumber = Math.round(Math.random()*(max-min)+Number(min);
    //console.log(randomNumber);
    return randomNumber;
}



for(var i = 0; i < 15; i++){
    console.log("Results:" + random(minNum, maxNum));

}

//anon has to come after function

var addNums = function(num1, num2){
    var total = Number(num1)+Number(num2);
    return total;
};
//call
var totalReturned = addNums(5, 6);
console.log(totalReturned + " returned");
