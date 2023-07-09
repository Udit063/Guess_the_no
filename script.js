/*
console.log(document.querySelector('.message').textContent);  
// (message) selector we use in css
// .textcontent helps to get access to the element

document.querySelector('.message').textContent = 'Correct Number!';    // to set the content with another text

// console.log(document.querySelector('.message').textContent);     // in console terminal it will change
// console.log(document.querySelector('.message').textContent);     // in console terminal it will change

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20)+1;     // Math.random() gives number from 0-1, to get from 1-20 multiply it with 20     //Math.trunc() use to remove the decimal part
// document.querySelector('.number').textContent=secretNumber;

let score = 20;   // can't be const bcz we have to del it   // or else read from DOM hen change it and show it on DOM
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){   //first type of event then tell what to do so pass funct value as argument
    // event that something happens on the page like button click nd then react to it
    const guess = Number(document.querySelector('.guess').value);  // number function to declare its a number
    console.log(guess, typeof guess);    //whenever we take input from user we indeed get a string

    // function for game logic
    if(!guess){   //when it is left empty
        document.querySelector('.message').textContent= '⛔ No Number!';
    }

    else if(guess === secretNumber){
        document.querySelector('.message').textContent= '🎉  Correct Number!';
        document.querySelector('.number').textContent=secretNumber;
        
    if(score > highscore)  {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';
    }

    else if(guess > secretNumber){

        if(score > 1){
        document.querySelector('.message').textContent = '📈 Too high!'
        score = score-1;
        document.querySelector('.score').textContent = score;
    }

    else{
        document.querySelector('.message').textContent = '💥 You Lost the game!';
        document.querySelector('.score').textContent = 0;
        
    }

}
else if(guess < secretNumber){
    
    if(score > 1){
        document.querySelector('.message').textContent = '📉 Too low!'
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = '💥 You Lost the game!';
        document.querySelector('.score').textContent = 0;

        }

    }
})   

document.querySelector('.again').addEventListener('click',function(){

    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value = '';
})