import{startConfetti,stopConfetti,removeConfetti} from './confetti.js';

const playerScoreEL=document.querySelector("#playerScore")
const computerScoreEL=document.querySelector("#computerScore")
const playerChoiceEl=document.querySelector("#playerChoice")
const computerChoiceEl=document.querySelector("#computerChoice")
const resaultText=document.querySelector(".resault-text")
const icons=document.querySelectorAll(".fa-regular")

const playerRock=document.querySelector('#playerRock')
const playerPaper=document.querySelector('#playerPaper')
const playerScissors=document.querySelector('#playerScissors')
const playerLizard=document.querySelector('#playerLizard')
const playerSpock=document.querySelector('#playerSpock')

const computerRock=document.querySelector('#computerRock')
const computerPaper=document.querySelector('#computerPaper')
const computerScissors=document.querySelector('#computerScissors')
const computerLizard=document.querySelector('#computerLizard')
const computerSpock=document.querySelector('#computerSpock')


const choises={
    rock:{name:'Rock',defeats:['scissors','lizard']},
    paper:{name:'Paper',defeats:['rock','spock']},
    scissors:{name:'Scissors',defeats:['paper','lizard']},
    lizard:{name:'Lizard',defeats:['paper','spock']},
    spock:{name:'Spock',defeats:['scissors','rock']}
}

let playerScore=0;
let computerScore=0;
let computerChoice='';


//reset all selected icons

function resetSelection(){
    
    icons.forEach(icon=>{icon.classList.remove('selected')});
    stopConfetti();
    removeConfetti();
  
}


//reset score,choice,resaultText and selected icons

function resetAll(){
    resaultText.textContent='';
    playerScore=0;
    playerScoreEL.textContent=playerScore;
    computerScore=0;
    computerScoreEL.textContent=computerScore;
    playerChoiceEl.textContent='';
    computerChoiceEl.textContent='';
    resetSelection();
  }


//to have access to resetAll function in html file
window.resetAll=resetAll


function computerRandomChoice(){

    const computerChoiceNumber=Math.floor(Math.random() * 5);;


    if(computerChoiceNumber===0){

        computerChoice='rock'

    }
    else if(computerChoiceNumber===1){

        computerChoice='paper'

    }
    else if(computerChoiceNumber===2){

        computerChoice='scissors'

    }
    else if(computerChoiceNumber===3){
        computerChoice='lizard'

    }
    else if(computerChoiceNumber===4){
        computerChoice='spock'

    }
    
}


//update score for player and computer  and  the resaultText

function updateScore(playerChoice){

    if(playerChoice===computerChoice){
        resaultText.textContent="It's a tie!"
    }
    else{
        const choice=choises[playerChoice]
        
        if(choice.defeats.indexOf(computerChoice)===-1){
            
            resaultText.textContent="You Lost!"
            computerScore++;
            computerScoreEL.textContent=computerScore;
        }
        else{

            //**********Dynamic import*************//
            // import('./confetti.js').then((module)=>{
            //      module.startConfetti();
            // })
                resaultText.textContent="You Won!"
                playerScore++;
                playerScoreEL.textContent=playerScore;
                startConfetti();
        }
    }
    
}

function checkResault(playerChoice){

    resetSelection();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}


//display player choice and check the resault

function select(playerChoice){


  checkResault(playerChoice) 

  switch(playerChoice){
    case 'rock':
        playerRock.classList.add('selected')
        playerChoiceEl.textContent=` ---Rock`
        break;

    case 'paper':
        playerPaper.classList.add('selected')
        playerChoiceEl.textContent=` ---Paper`
        break;
    case 'scissors':
        playerScissors.classList.add('selected')
        playerChoiceEl.textContent=` ---Scissors`
        break;
    case 'lizard':
        playerLizard.classList.add('selected')
        playerChoiceEl.textContent=` ---Lizard`
        break;
    case 'spock':
        playerSpock.classList.add('selected')
        playerChoiceEl.textContent=` ---Spock`
        break;
    default:
        break;
  }
}

function displayComputerChoice(){

    switch(computerChoice){
      case 'rock':
          computerRock.classList.add('selected')
          computerChoiceEl.textContent=` ---Rock`
          break;
  
      case 'paper':
          computerPaper.classList.add('selected')
          computerChoiceEl.textContent=` ---Paper`
          break;
      case 'scissors':
          computerScissors.classList.add('selected')
          computerChoiceEl.textContent=` ---Scissors`
          break;
      case 'lizard':
          computerLizard.classList.add('selected')
          computerChoiceEl.textContent=` ---Lizard`
          break;
      case 'spock':
          computerSpock.classList.add('selected')
          computerChoiceEl.textContent=` ---Spock`
          break;
      default:
          break;
    }
  }

  //to have access to select function in html file
  //***************Because the type of script tag is 'module' we can't use functions of script.js file in html file***************//
window.select=select


//onLoad

resetAll()