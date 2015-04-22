/*          Name:       Eric Avery Birchard
            Instructor: Dan Williams
            Assignment: Conditionals Assignment
            Date:       15, April 2015
            Class:      SDI
            Term:       I

 */

//variables
var name;
var address;
var phone;
var checkingBal;
var otherBal;

//loan variables
var income;
var loanMax;
var qual;
var debt;
var ratio;
var displayRatio;
var jobLength;
var loanLn;
var residence;
var score;


//Credit Score Calc
var reEnter;        //851+              reEnter data for value between 0 and 850      
var diamond;        //800 - 850         2%
var platinum;       //700 - 799         4%
var gold;           //650 - 699         12%
var silver;         //550 - 649         18%
var bronze;         //450 -             24%
var bad;            //below 449         ReApply later when score is higher
var wait            //You need more time at you current job/ residence then reApply
var rate;           //interest rate
var displayRate;    //Display interest rate

//scores variables
reEnter = "Invalid range, please enter a range between 0 and 850";
diamond = 800;
platinum = 700;
gold = 650;
silver = 550;
bronze = 450;
bad = 449;

//TODO Bank loan information: Name, address, phone

//TODO begin aplicant validations, castings.............................................................................

//account holders name and validation for empty problem
name = prompt("Please enter your full name:");
if(name === "") {prompt("Entry was left blank, please enter your full name:")
}else{Alert("Name:" + " " + name)}

//console logging name
console.log("Name:" + " " + name);


//account holders address
address = prompt("enter your complete address:");
if(address === "")
{prompt("Entry was left blank, please enter your full address:")
    }else{alert("Address:" + " " + address)}

//console logging name
console.log("Address:" + " " + address);


//contact phone number
phone = prompt("Enter contact number:");
if(phone === "") {prompt("Entry was left blank, please make an entry:")
}else{alert("Phone:" + " " + phone)}

//console logging name
console.log("Phone:" + " " + phone);



//Checking balance
checkingBal = prompt("Enter your checking account balance");

if(checkingBal === "") {
    prompt("Entry was left blank, please enter your checking balance:")
}else{alert("Checking balance:" + " " + "$" + checkingBal)}

//console logging name
console.log("Checking balance:" + " " + "$" + checkingBal);
Number(checkingBal);



//Other investments balance total
otherBal = prompt("Enter your any other investments holdings total liquid balance");

if(otherBal === "") {
    prompt("Entry was left blank, please enter liquid assets cash total:")
}else{alert("Liquid cash assets total:" + " " + "$" + otherBal)}

//console logging other investments total
console.log("Liquid assets cash total:" + " " + "$" + otherBal);
Number(otherBal);


//array for info
var info;
info = [name, address, phone, checkingBal, otherBal,];

//Displaying information:
alert("Name:" + " " + info[0] + "\n" +
"Address:" + " " + info[1] + "\n" +
"Phone:" + " " + info[2] + "\n" +
"Checking balance:" + " " + "$" + info[3] + "\n" +
"Other balances total:" + " " + "$" +  info[4]);

//Displaying information via console log
console.log("Name:" + " " + info[0] + "\n" +
"Address:" + " " + info[1] + "\n" +
"Phone:" + " " + info[2] + "\n" +
"Checking balance:" + " " + info[3] + "\n" +
"Other balances total:" + " " + info[4]);

//TODO: end of info ****************************************************************************************************

//TODO: income..........................................................................................................

//2 conditional statements with an if statement, and validating prompts
//income determines max potential loan with validation
income = prompt("Enter your annual income in numbers only:");

if(income === 0) {
    prompt("Enter a number greater than Zero:")
}else if(income === "") {
    prompt("Entry was left blank, please enter a numebr:")
}else if(isNaN(income)){prompt("Please enter numbers only:")
}else{alert("Annual income:" + " " + "$" + income)}

//console log income
console.log("Income entered:" + " " + income)

//casting income to a number
Number(income);

//begin loan max calculations with validation
loanMax = income;

//debt to income ratio determines limiter via percent calc with validation
//TODO: debt to income ratio and possible qualifier w/ validation use ternary


debt = prompt("What is your current debt?");

Number(debt);

if(debt < 0){prompt("Please enter a number greater than a negative number:")
}else if(debt === "") {
    prompt("Entry left blank, please enter total debt")
}else if(isNaN(debt)){prompt("Please enter numbers only:")
}else{alert("Debt entered correctly:" + " " + "$" + debt)}

//alert and console logging debt
alert("Debt:" + " " + "$" + debt);

//console log total debt
console.log("Debt:" + " " + "$" + debt);

//Casting debt to a number
Number(debt);

//Mathematical ratio
ratio = debt/ income;

//Display ratio and for calculations
displayRatio = ratio * 100;
alert("Your debt to income ratio is:" + " " + displayRatio + "%");
console.log("Your debt to income ratio is:" + " " + displayRatio + "%");

//ternary
displayRatio >= 60 ? qual = "Bring debt to income ratio below 60% to qualify for loan" :
    qual = "Your debt to income ratio qualifies for the application process";

//Final display for debt to income ratio
alert(qual);
console.log(qual);

//TODO: End of debt to income code block********************************************************************************




//time at current job determines length of loan
//TODO: math for length of loan w/ validation use ternary...............................................................

//getting job length
jobLength = prompt("How long  in months have you been employed at your current employer?");

if(jobLength === ""){prompt("Entry left blank, please enter a number of months employed at current employer:")
}else if(jobLength === 0){prompt("Please enter a number greater than Zero:")
}else{alert("Current time at current employer in months:" + " " + jobLength)}

//casting jobLength to a number
Number(jobLength);

//ternary for job length
jobLength > 1 ? console.log("jobLength entered correctly:" + " " + "$" + jobLength) :
     jobLenth = prompt("Please enter again in numbers only for max :");

//casting jobLength to a number
Number(jobLength);

loanLn = jobLength * .5;

loanLn < 1 ? jobLength = prompt("Restart loan application process, invalid or unrealistic input") :
    alert("You max loan term is:" + " " + loanLn);

//TODO: End max loan length code block**********************************************************************************


//TODO: math for wait time for loan/ till loan w/ validation use ternary................................................

//time at residence/ wait period
residence = prompt("How long have you lived at your current residence in months?");

//residence validation
if(residence === 0){prompt("Please in enter a number greater than Zero:")
}else if(residence === ""){prompt("Entry left blank, please enter time at residence in months:")
}else if(isNaN(residence)){prompt("Entery was not a number, please enter time at residence in numbers:)"
}else{alert("Time at residence:" + " " + residence + " " + "months.")}

//casting string to number
Number(residence);


//wait variable
wait = 24 - residence;

//ternary for residence
residence >= 24 ? alert("Length of time at current residence qualifies for the loan process") :
    alert("You need to wait" + " " + wait + " " + "months to apply");

//TODO: End of residence code block*************************************************************************************



//TODO: credit score math w/ validation.................................................................................
//credit score determines interest rate

var displayRate;
var rate;
var creditScore;
var level;

//Getting credit score variable
creditScore = prompt("What is your current credit score?");

//casting string to a number
Number(creditScore);

console.log("creditScore number?" + " " + creditScore);

























score = creditScore;
console.log("score" + " " + score);


if(creditScore > 850){prompt("Please enter a number less than 851")
}else if(creditScore < 0){prompt("Please enter a number greater than 0")
}else if(creditScore === ""){prompt("Please enter a number between 1 and 850")
}else if(creditScore >= 800){level = "You are at Platinum level!"
}else if(creditScore > 700 && creditScore < 799){level = "You are at the Diamond level!"
}else if(creditScore <= 699 && creditScore >= 600){level = "You are at the Gold level."
}else if(creditScore <= 599 && creditScore >= 500){level = "You are at the Silver level!"
}else if(creditScore < 450 && creditScore < 499){level = "Bronze level."
}

alert(level);

//casting variable creditScore to a number
Number(creditScore);
console.log("creditScore 1st number" + " " + score);

//rate if statements

if(score >= 800){rate = .02
}else if(score >= 700){rate = .04
}else if(score >= 650){rate = .12
}else if(score >= 550){rate = .18
}else if(score >= 450){rate = .24
}else if(score < 450){console.log("Credit score is bad:" + " " + creditScore)}

rate1 = rate;
console.log("rate" + " " + rate1);
Number(rate1);
displayRate = rate1 * 100;

//console log interest rate
console.log("Interest rate:" + " " + displayRate + "%");

alert(level + "\n" +
"Which qualifies you for an interest rate of:" + " " + displayRate + "%");


Number(creditScore);


//Credit score level



if(creditScore > 851){score = reEnter

}else if(creditScore <= -1){score = reEnter

}else if(creditScore >= 800){score = diamond

}else if(creditScore >= 700){score = platinum

}else if(creditScore >= 650){score = gold

}else if(creditScore >= 550){score = silver

}else if(creditScore >= 450){score = bronze

}else if(creditScore < 69){score = bad}

//rate if statements

if(score = diamond){rate = .02

}else if(score = platinum){rate = .04

}else if(score = gold){rate = .12

}else if(score = silver){rate = .18

}else if(score = bronze){rate = .24

}else(score = bad);


//TODO: Payment calculator math
//2 arithmetic operators + -,
//1 logical operator &&, ||, !



//TODO: Display final information
//concatenation of strings and variables




//values in multi-lines comment

//compress into zip file called, Birchard_Eric_Conditionals_Assignment
//upload to FSO
//check to make sure code is in repository, and zip file

