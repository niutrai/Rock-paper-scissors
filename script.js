console.log("Hello World");


function getComputerChoice(r = 3){
    let computer;
    computer = Math.floor(Math.random() * r);
    switch (computer){
        case 0:
            console.log("The computer played Rock");
        break;
        case 1:
            console.log("The computer played Paper");
        break;
        case 2:
            console.log("The computer played Scissors");
        break
        default:
            console.log("There has been an error with the 'AI'")
    }
}

function getHumanChoice(h){
    h = prompt("What are you going to play, 1.Rock, 2.Paper or 3.Scissors?");
        switch (h){
            case "1":
            case "Rock":
            case "rock":
                console.log("You played Rock");
            break;
            case "2":
            case "Paper":
            case "paper":
                console.log("You played Paper");
            break;
            case "3":
            case "Scissors":
            case "scissors":
                console.log("You played Scissors");
            break;
            default:
                console.log("You've entered a wrong value")
        }
    
}

/*
let computer = getComputerChoice();
console.log(computer);
*/

