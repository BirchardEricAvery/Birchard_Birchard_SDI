/*          Name:       Eric Avery Birchard
            Instructor: Dan Williams
            Assignment: Conditionals Assignment
            Date:       22, April 2015
            Class:      SDI
            Section:    1
            Term:       I

 */

//variables
var name;
var address;
var phone;
var checkingBal;
var otherBal;
//var collateral;

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
var payment;


//Credit Score Calc
var level;          //credit score level string display
var reEnter;        //851+              reEnter data for value between 0 and 850      
var diamond;        //800 - 850         2%
var platinum;       //700 - 799         4%
var gold;           //650 - 699         12%
var silver;         //550 - 649         18%
var bronze;         //450 -             24%
var bad;            //below 449         ReApply later when score is higher
var rate;           //interest rate
var creditScore;    //credit score variable
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

//ternary for name
name = prompt("Please enter your full name:");
name === "" ? name = prompt("Entry was left blank, please enter your full name:") :
alert("Name:" + " " + name);



//console logging name
console.log("Name:" + " " + name);


//account holders address
address = prompt("enter your complete address:");
if(address === "") {prompt("Entry was left blank, please enter your full address:")
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
    }else if(isNaN(checkingBal)){checkingBal = prompt("Please enter numbers only for checking balance:")
        }else{alert("Checking balance:" + " " + "$" + checkingBal)}

//casting checkingBal to a number
Number(checkingBal);

//console logging name
console.log("Checking balance:" + " " + "$" + checkingBal);
Number(checkingBal);


//Other investments balance total
otherBal = prompt("Enter your any other investments holdings total liquid balance");
Number(otherBal);
if(otherBal === ""){prompt("Entry was left blank, please enter liquid assets cash total:")
    }else if(isNaN(otherBal)){otherBal = prompt("Please enter numbers only for liquid assets cash total:")
        }else{alert("Liquid cash assets total:" + " " + "$" + otherBal)}

//casting otherBal to a number
Number(otherBal);

//collateral variable
//collateral ==== checkingBal + otherBal;
//Number(collateral);
//alert("Collateral:" + " " + "$" + collateral);
//console.log("Collateral:" + " " + "$" + collateral);


//console logging other investments total
console.log("Liquid assets cash total:" + " " + "$" + otherBal);



//array for info
var info;
info = [name, address, phone, checkingBal, otherBal];

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
    income = prompt("Enter a number greater than Zero:")
}else if(income === "") {
    income = prompt("Entry was left blank, please enter a number:")
    }else if(isNaN(income)){income = prompt("Please enter numbers only for your annual income:")
        }else{alert("Annual income:" + " " + "$" + income)}

//casting income to a number
Number(income);

//console log income
console.log("Income entered:" + " " + "$" + income);



//begin loan max calculations with validation
loanMax = income;

//debt to income ratio determines limiter via percent calc with validation
//TODO: debt to income ratio and possible qualifier w/ validation use ternary


debt = prompt("What is your current debt?");

Number(debt);

if(debt < 0){prompt("Please enter a number greater than a negative number:")
}else if(debt === "") {
    debt = prompt("Entry left blank, please enter total debt")
    }else if(isNaN(debt)){debt = prompt("Please enter numbers only for your total debt:")
        }else{alert("Debt entered correctly:" + " " + "$" + debt)}

//Casting debt to a number
Number(debt);

//alert and console logging debt
alert("Debt:" + " " + "$" + debt);

//console log total debt
console.log("Debt:" + " " + "$" + debt);



//Mathematical ratio
ratio = debt/ income;

//Display ratio and for calculations
displayRatio = ratio * 100;
alert("Your debt to income ratio is:" + " " + displayRatio + "%");
console.log("Your debt to income ratio is:" + " " + displayRatio + "%");

//ternary
displayRatio >= 60 ? qual = "Bring debt to income ratio below 60% to qualify for loan" :
    "Your debt to income ratio qualifies for the application process";



//TODO: End of debt to income code block********************************************************************************




//time at current job determines length of loan
//TODO: math for length of loan w/ validation use ternary...............................................................

//getting job length
jobLength = prompt("How long  in months have you been employed at your current employer?");

if(jobLength === ""){prompt("Entry left blank, please enter a number of months employed at current employer:")
    }else if(jobLength === 0) {
    prompt("Please enter a number greater than Zero:")
        }else if(isNaN(jobLength)){jobLength = prompt("Please enter job length in numbers only:")
            }else{alert("Current time at current employer in months:" + " " + jobLength)}

//casting jobLength to a number
Number(jobLength);

//ternary for job length
jobLength > 1 ? console.log("jobLength entered correctly:" + " " + jobLength) :
     jobLenth = prompt("Please enter again in numbers only for time at corrent employer in months:");

Number(jobLength);
loanLn = jobLength * .5;

loanLn < 1 ? jobLength = prompt("Restart loan process after you have been employed for a longer period") :
    alert("You max loan term is:" + " " + loanLn);

//TODO: End max loan length code block**********************************************************************************


//TODO: math for wait time for loan/ till loan w/ validation use ternary................................................

//time at residence
residence = prompt("How long have you lived at your current residence in months?");

//residence validation
if(residence === 0){prompt("Please in enter a number greater than Zero:")
    }else if(residence === ""){prompt("Entry left blank, please enter time at residence in months:")
        }else if(isNaN(residence)){prompt("Entry was not a number, please enter time at residence in numbers:")
            }else{alert("Time at residence:" + " " + residence + " " + "months.")}

//casting string to number
Number(residence);
console.log("Time at residence:" + " " + residence + " " + "months.");

//To little employment or time at residence

if(jobLength < 1 && residence < 1){alert("Please re-apply after at least 24 months:")
}else{console.log("Continuing loan process")}

//TODO: End of residence code block*************************************************************************************



//TODO: credit score math w/ validation.................................................................................

//credit score determines interest rate

//Getting credit score variable
creditScore = prompt("What is your current credit score?");

//casting string to a number
Number(creditScore);

//Credit score validation and credit score level
if(creditScore > 850){prompt("Please enter a number less than 851")
}else if(creditScore < 0){prompt("Please enter a number greater than 0")
}else if(creditScore === ""){prompt("Please enter a number between 1 and 850")
}else if(creditScore >= 800){alert("You are at Platinum level!")
}else if(creditScore >= 700){alert("You are at the Diamond level!")
}else if(creditScore >= 650){alert("You are at the Gold level.")
}else if(creditScore >= 550){alert("You are at the Silver level!")
}else if(creditScore >= 450){alert("Bronze level.")}

//casting string to a number
Number(creditScore);

//console log creditScore number
console.log("creditScore number:" + " " + creditScore);

//rate if statements

//assigning creditScore variable to score


//rate if statements
if(creditScore >= 800){rate = .02
}else if(creditScore >= 700){rate = .04
}else if(creditScore >= 650){rate = .12
}else if(creditScore >= 550){rate = .18
}else if(creditScore >= 450){rate = .24
}else if(creditScore < 449){rate = NaN
}

//console log creditScore as score
console.log("creditScore" + " " + creditScore);
console.log("Rate" + " " + rate);

//casting rate to a number
Number(rate);

//Credit level
if(rate === .02){level = "Platinum"
}else if(rate === .04){level = "Diamond"
}else if(rate === .12){level = "Gold"
}else if(rate === .18){level = "Silver"
}else if(rate === .24){level = "Bronze"
}else if(isNaN(rate)){level = "BAD"}


//casting variable creditScore to a number
Number(creditScore);

//console log credit score variable check
console.log("creditScore number" + " " + creditScore);

rate1 = rate;

//if(isNaN(rate))console.log("rate" + " " + rate1);

displayRate = rate1 * 100;

if (!isNaN(rate)) {
    alert(level + "\n" + "Which qualifies you for an interest rate of:" + " " + displayRate + "%")
} else {
    alert("Credit score is below required minimum, please re-apply when your score is above 450")
}

//console log status
if (!isNaN(rate)) {
    console.log(level + "\n" + "Which qualifies you for an interest rate of:" + " " + displayRate + "%")
} else {
    console.log("Credit score is below required minimum, please re-apply when your score is above 450")
}
//TODO: End credit score level, rate, and qualification code block******************************************************


//TODO: Payment calculator, legnth of loan, interest rate...............................................................

//array for your information summary, maximum payment, length, interest rate, at level

//payment calculation
loanReal = loanMax - debt;

//flat rate loan with interest applied simply
flatRate = (rate * loanReal) + loanReal;

//the flat rate loan divided by maximum loan length
payment = flatRate / loanLn;

//collateral
//casting collateral variables
//Number(checkingBal); Number(otherBal);
//collateral = checkingBal + otherBal;

//loan array
var loanArray = [payment, loanLn, displayRate, level, loanReal, checkingBal, otherBal];


//display user information
//Displaying array information:
    alert("Name:" + " " + info[0] + "\n" +
    "Address:" + " " + info[1] + "\n" +
    "Phone:" + " " + info[2] + "\n" +
    "Checking balance:" + " " + "$" + info[5] + "\n" +
    "Other balances total:" + " " + "$" +  info[6] + "\n" +
    "Your" + " " + loanArray[3] + " " + "qualifies you for:" + " " + loanArray[2] +"%" + " " + "loan rate." +  "\n" +
    "Your maximum loan amount is" + " " + "$" + loanArray[4] + " " + "\n" +
    "At your maximum loan term/ legnth of" + " " + loanArray[1] + " " + "months." + "\n" +
    "your flat loan payments would be" + " " + "$" + loanArray[0]);

//Displaying information via console log
console.log("Name:" + " " + info[0] + "\n" +
    "Address:" + " " + info[1] + "\n" +
    "Phone:" + " " + info[2] + "\n" +
    "Checking balance:" + " " + "$" + info[5] + "\n" +
    "Other balances total:" + " " + "$" +  info[6] + "\n" +
    "Your" + " " + loanArray[3] + " " + "qualifies you for:" + " " + loanArray[2] +"%" + " " + "loan rate." +  "\n" +
    "Your maximum loan amount is" + " " + "$" + loanArray[4] + "\n" +
    "At your maximum loan term/ legnth of" + " " + loanArray[1] + " " + "months." + "\n" +
    "your flat loan payments would be" + " " + "$" + loanArray[0]);


/* values in multi-lines comment


Entered my full name and was displayed correctly, entered it blank and was re-prompted

Entered 1137 E. Broadmor Dr, Tempe, AZ 85282 and was displayed both via console log, and alert
Entered a blank for my address and was re-prompted

Entered my phone number and it was displayed via console log, and alert
Entered a blank, and was re-prompted

Entered my checking balance of 10000, and it displayed aS $10000 in both console, and alert
Entered this with a string, and was re-prompted for a number

Entered 5000 for liquid assets, it displayed in console log and alert as $5000
Entered a string and was re-prompted for a number

Once all applicant information was entered it was displayed as a whole in console log and alert


Entered an annual income as string and was re-prompted
Entered my annual income as 40000 and it displayed $40000 in console, and alert

Entered my debt as 5000 and it displayed as $5000 in console and alert
Entered as a string and was re-prompted

Debt to income ratio was then displayed in the console and alert as 12.5%

For legnth of employment I put 48 for 48 months and was displayed as 48 months in console and alert
Entered as blank and was re-prompted

Max loan term came up as 24 months in alert and console as expected

Entered 60 for time at residence and was displayed as 60 months in console and alert

Entered 600 for credit score and got Silver level displayed in alert and console
Intrest rate displayed in alert was 18% as coded

Max loan came out to 24 months at 18% with payments of $1720.83 as predicted.

I removed collateral variable because even though I used Number(checkingBal) and Number(otherBal)
collateral still added them as strings.  These were commented out so you could see what I did.



Still have some very minor things that need fixed, but the deadline has arrived.

*/
