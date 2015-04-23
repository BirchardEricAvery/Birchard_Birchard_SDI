
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

