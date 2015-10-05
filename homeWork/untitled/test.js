//TODO User choice

var userChoice = prompt("Do you choose rock, paper, or scissors?");

console.log("You chose: " + userChoice);
alert("You chose: " + userChoice);


//TODO computer choice

var computerChoice = Math.random();
console.log("comuterChoice number: " + computerChoice);
if(computerChoice <= 0.33){
    computerChoice = "rock";

}else if (computerChoice <= 0.66) {
    computerChoice = "paper";

}else{
    computerChoice = "scissors";
}

console.log("The computer chose: " + computerChoice);
alert("The computer chose: " + computerChoice);

//TODO compare

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";

    }else if(choice1 === "rock" && choice2 === "scissors")
        {return "Rock wins";

    }else if(choice1 === "paper" && choice2 === "rock")
        {return "Paper wins";

    }else(choice1 === "scissors" && choice2 === "rock") {
        {return "Scissors wins";
    }};

    console.log(compare(choice1, choice2));
    alert(compare(choice1, choice2));
    console.log("The computer chose: " + computerChoice());
    alert("The computer chose: " + computerChoice());