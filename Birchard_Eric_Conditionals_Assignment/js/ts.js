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
//I've tried < > <= >= || && and still can't seem to get this to work..?

if(creditScore > 850){prompt("Please enter a number less than 851")
}else if(creditScore < 0){prompt("Please enter a number greater than 0")
}else if(creditScore = ""){prompt("Please enter a number between 1 and 850")
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

