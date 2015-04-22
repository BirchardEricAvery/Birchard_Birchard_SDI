




score = creditScore;
console.log("score" + " " + score);
//I've tried < > <= >= || && and still can't seem to get this to work..?

if(creditScore > 850){prompt("Please enter a number less than 851")
}else if(creditScore < 0){prompt("Please enter a number greater than 0")
}else if(creditScore === ""){prompt("Please enter a number between 1 and 850")
}else if(creditScore >= 800){alert("You are at Platinum level!")
}else if(creditScore >= 700){alert("You are at the Diamond level!")
}else if(creditScore >= 650){alert("You are at the Gold level.")
}else if(creditScore >= 550){alert("You are at the Silver level!")
}else if(creditScore >= 450){alert("Bronze level.")}



//casting variable creditScore to a number
Number(creditScore);

console.log("creditScore" + " " + creditScore);

//rate if statements

score = creditScore;

if(score >= 800){rate = .02
}else if(score >= 700){rate = .04
}else if(score >= 650){rate = .12
}else if(score >= 550){rate = .18
}else if(score >= 450){rate = .24
}else if(score < 449){rate = NaN
}

console.log("score" + " " + score);

Number(rate);

//Credit level
if(rate = .02){level = "Platinum"
}else if(rate = .04){level = "Diamond"
}else if(creditScore = .12){level = "Gold"
}else if(creditScore = .18){level = "Silver"
}else if(creditScore = .24){level = "Bronze"
}else if(creditScore = isNaN){level = "BAD"}




rate1 = rate;
//if(isNaN(rate))console.log("rate" + " " + rate1);
Number(rate1);
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