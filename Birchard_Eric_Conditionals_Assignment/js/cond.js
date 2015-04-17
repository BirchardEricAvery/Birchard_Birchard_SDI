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

var income;
var loanMax;
var debt;
var jobLength;
var residence;
var creditScore;
var score;

//Credit Score Calc
var reEnter;        //851+              reEnter data for value between 0 and 850      
var diamond;        //800 - 850         2%
var platinum;       //700 - 799         4%
var gold;           //650 - 699         12%
var silver;         //550 - 649         18%
var bronze;         //450 -             24%
var bad;            //below 449         ReApply later when score is higher
var maxedOut        //debt to income ratio too high, bring your debt down and reApply
var wait            //You need more time at you current job/ residence then reApply

var rate;

//TODO Bank loan information: Name, address, phone

//TODO begin validations, castings......
//TODO begin validations, castings......

//account holders name and validation for empty problem
name = prompt("Please enter your full name:");
if(name > "")
{alert("Name:" + " " + name)
}else{name = prompt("Entry was left blank, please enter your full name:")}

//console logging name
console.log("Name:" + " " + name);



//account holders address
address = prompt("enter your complete address:");

if(address > "")
{alert("Address:" + " " + address)
}else{address = prompt("Entry was left blank, please enter your full address:")}

//console logging name
console.log("Address:" + " " + address);


//contact phone number
phone = prompt("Enter contact number:");

if(phone > "")
{alert("Phone:" + " " + phone)
}else{phone = prompt("Entry was left blank, please enter your contact number:")}

//console logging name
console.log("Phone:" + " " + phone);



//Checking balance
checkingBal = prompt("Enter your checking account balance");

if(checkingBal > "")
{alert("Checking balance:" + " " + "$" + checkingBal)
}else{checkingBal = prompt("Entry was left blank, please enter your checking balance:")}

//console logging name
console.log("Checking balance:" + " " + "$" + checkingBal);
Number(checkingBal);


//Other investments balance total
otherBal = prompt("Enter your any other investments holdings total liquid balance");

if(otherBal > "")
{alert("Liquid cash assets total:" + " " + "$" + otherBal)
}else{otherBal = prompt("Entry was left blank, please enter liquid assets cash total:")}

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


//2 conditional statements with an if statement, and validating prompts
//income determines max with validation
income = prompt("What is your annual income?");

if(income > "" || NaN)
{alert("Income:" + " " + "$" + income)
}else if(income = ""){prompt("Entry was left blank, please enter your annual income:")
}else(income = NaN){prompt("Please enter a number, or just numbers:")}

//casting income to a number
Number(income);

//console logging income
console.log("Annual income:" + " " + "$" + income);
Number(income);




//if statements with validation


//begin loan max calc with validation
loanMax = income;

//debt to income ratio determines limiter via percent calc with validation
debt = prompt("What is your current debt?");
//TODO: debt to income ratio and possible qualifier w/ validation use ternary


//time at current job determines length of loan
//TODO: math for length of loan w/ validation use ternary
jobLength = prompt("How long have you been employed at your current employer?");


//time at residence/ wait period
//TODO: math for wait time for loan/ till loan w/ validation use ternary
residence = prompt("How long have you lived at your current residence?");

//credit score determines interest rate
//TODO: credit score math w/ validation
creditScore = prompt("What is your current credit score?");

//casting variable score to a number
Number(score);


//scores variables
reEnter = "Invalid range, please enter a range between 0 and 850";
diamond = 800;
platinum = 700;
gold = 650;
silver = 550;
bronze = 450;
bad = 449;

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

//payment calc
//TODO: Payment calculator math
//2 arithmetic operators + -,
//1 logical operator &&, ||, !



//TODO: Display final information
//concatenation of strings and variables




//values in multi-lines comment

//compress into zip file called, Birchard_Eric_Conditionals_Assignment
//upload to FSO
//check to make sure code is in repository, and zip file

/*
notes:


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


var age =6;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get the The Time machine

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

 //3 prompts w/ validations

    */
