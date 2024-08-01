
let answer;
const min = 1;
const max = 100;
answer = Math.floor(Math.random() * (max - min) + 1);
console.log(answer);



let running = true;
let attempts = 0;
let guess;


while(running){

    guess = window.prompt("Enter a Number between 1-100");
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please only Enter a Valid Number !!!");
    }
    else if(guess < 1 || guess > 100){
        window.alert("Please only Enter a Number Within the given range");
    }
    else{
        attempts++;

        if(guess < answer){
            window.alert("TOO Low, Enter a Higher Number");
        }
        else if(guess > answer){
            window.alert("TOO High, Enter a Lower Number");
        }
        else{
            running = false;
            window.alert(`Congratulations!!! You guessed the number in ${attempts} attempts.`);
        }
    }
}