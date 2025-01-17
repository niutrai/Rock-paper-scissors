console.log("Welcome to Rock Paper Scissors");


function getComputerChoice(r = 3){
    let computer;
    computer = Math.floor(Math.random() * r);
    let cChoice;
    switch (computer){
        case 0:
            cChoice = "rock";
            console.log("The computer played Rock");
        break;
        case 1:
            cChoice = "paper";
            console.log("The computer played Paper");
        break;
        case 2:
            cChoice = "scissors"
            console.log("The computer played Scissors");
        break
        default:
            console.log("There has been an error with the 'AI'")
    }
    return cChoice;
}

function getHumanChoice(h){
    h = prompt("What are you going to play, 1.Rock 2.Paper 3.Scissors?");
    h = h.toLowerCase();
    let hChoice;  
        switch (h){
            case "1":
            case "Rock":
            case "rock":
                hChoice = "rock"
                console.log("You played Rock");
            break;
            case "2":
            case "Paper":
            case "paper":
                hChoice = "paper";
                console.log("You've played Paper");
            break;
            case "3":
            case "Scissors":
            case "scissors":
                hChoice = "scissors"
                console.log("You've played Scissors");
            break;
            default:
                console.log("You've entered a wrong value")
        }
    return hChoice;
}




function playGame(){
    let humanScore = 0, computerScore = 0;


    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        if (computerChoice == "paper" && humanChoice == "rock"){
            console.log("You lose! Paper beats Rock");
            computerScore ++;
        }
        else if (computerChoice == "rock" && humanChoice == "scissors"){
            console.log("You lose! Rock beats Scissors");
            computerScore ++;
        }
        if (humanChoice== "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock");
            humanScore ++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore ++;
        }
        else{
            console.log("It's a tie, you've made the same moves")
        }
    }

    function scores(){
        console.log(`The computer has ${computerScore} points, and you have ${humanScore} points`);
    }
    
    
    
    for (i = 1; i <= 5; i++){
        console.log(`This is round ${i}`);
        scores();
        playRound();
    }

    console.log("The game has ended.");
    if (computerScore > humanScore){
        console.log("The computer won the game.");
    }
    else if(humanScore > computerScore){
        console.log("You've won the game, you're better");
    }
    else {
        console.log("It's a tie");
    }
}

function again(){
    let answ = prompt("Do you want to play again?(Y/N)");
    answ = answ.toLowerCase();
    if (answ == "y" || answ == "yes"){
        playGame();
    }
    else if(a == "n" || a == "no"){
        console.log("Have a good day, noob");
    }
    else{
        console.log("Only yes(y) or no(n)");
    }
}

playGame();

again();



