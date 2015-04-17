var ratio;
var displayRatio;
var income;
var qual;
income = 100000;
//debt to income ratio determines limiter via percent calc with validation
//TODO: debt to income ratio and possible qualifier w/ validation use ternary

debt = prompt("What is your current debt?");

Number(debt);

if(debt > 0)
{console.log("Debt entered correctly:" + " " + "$" + debt)
}else if(debt = String){debt = prompt("Please enter again in numbers only for your debt to income ratio:")}

//alert and console logging debt
alert("Debt:" + " " + "$" + debt);
console.log("Debt:" + " " + "$" + debt);
Number(debt);
//Mathematical ratio
ratio = debt/ income;
//Display ratio and for calculations
displayRatio = ratio * 100;
alert("Your debt to income ratio is:" + " " + displayRatio + "%");
console.log("Your debt to income ratio is:" + " " + displayRatio + "%");


displayRatio >= 60 ? qual = "Bring debt to income ratio below 60% to qualify for loan" : qual = "Your debt to income ratio qualifies for the application process";


alert(qual);
console.log(qual);