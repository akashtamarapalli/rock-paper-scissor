//dark and light theme
let light = document.querySelector('.light');
let dark = document.querySelector('.dark');

light.addEventListener('click',() => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    dark.style.backgroundColor = 'rgb(41, 246, 0)';
});

dark.addEventListener('click',() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    dark.style.backgroundColor = 'white';
});

//game start
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');

let a = "rock";
let b = "paper";
let c = "scissor";
let winner = "";
let score1 = 0;
let score2 = 0;
let finals = "";

//rock scenarios
rock.addEventListener('click',() => {
let choice = ["rock","paper","scissor"];
let rand = Math.floor(Math.random() * 3);
let run = choice[rand];
 if(a == 'rock' && run == 'rock'){
    winner = "tie";
 }
 else if(a == 'rock' && run == 'paper'){
    winner = "computer win";
 }
 else if(a == 'rock' && run == 'scissor'){
    winner = "you win";
 }


if(winner == "computer win"){
    score2++;
}
else if(winner == 'you win'){
    score1++;
}
else{
    console.log('tie')
}
document.querySelector('.man').textContent = score1;
document.querySelector('.comp').textContent = score2;

document.querySelector('.score').textContent = `you choose ${a} and computer choose ${run}`;

if(score1 == 30){
    document.querySelector('.score').textContent = 'You win';
    score1 = 0;
    score2 = 0;

}
else if(score2 == 30){
    document.querySelector('.score').textContent = 'computer win';
    score1 = 0;
    score2 = 0;
}
});


//paper scenarios

paper.addEventListener('click',() => {
    let choice = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random() * 3);
    let run = choice[rand];
     if(b == 'paper' && run == 'rock'){
        winner = "you win";
     }
     else if(b == 'paper' && run == 'paper'){
        winner = "tie";
     }
     else if(b == 'paper' && run == 'scissor'){
        winner = "computer win";
     }
     if(winner == "computer win"){
        score2++;
    }
    else if(winner == 'you win'){
        score1++;
    }
    else{
        console.log('tie')
    }
    document.querySelector('.man').textContent = score1;
    document.querySelector('.comp').textContent = score2;
    document.querySelector('.score').textContent = `you choose ${b} and computer choose ${run}`;

    if(score1 == 30){
        document.querySelector('.score').textContent = 'You win';
        score1 = 0;
        score2 = 0;

    }
    else if(score2 == 30){
        document.querySelector('.score').textContent = 'computer win';
        score1 = 0;
        score2 = 0;
    }
    });

    //scissor scenarios

    scissor.addEventListener('click',() => {
        let choice = ["rock","paper","scissor"];
        let rand = Math.floor(Math.random() * 3);
        let run = choice[rand];
         if(c == 'scissor' && run == 'rock'){
            winner = "computer win";
         }
         else if(c == 'scissor' && run == 'paper'){
            winner = "you win";
         }
         else if(c == 'scissor' && run == 'scissor'){
            winner = "tie"
         }
         if(winner == "computer win"){
             score2++;
            }
else if(winner == 'you win'){
    score1++;
}
else{
    console.log('tie')
}
document.querySelector('.man').textContent = score1;
document.querySelector('.comp').textContent = score2;   
document.querySelector('.score').textContent = `you choose ${c} and computer choose ${run}`;

if(score1 == 30){
    document.querySelector('.score').textContent = 'You win';
    score1 = 0;
    score2 = 0;

}
else if(score2 == 30){
    document.querySelector('.score').textContent = 'computer win';
    score1 = 0;
    score2 = 0;
}
});




        
    
