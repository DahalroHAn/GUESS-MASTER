const user_num = document.getElementById("usernum");
const buttonBt = document.getElementById("button1");
const result = document.getElementById("result");
const wasted_num = document.getElementById("wasted");
const buttonBt2 = document.getElementById("button2");
const previousNum = document.getElementById("previous");


let random_num = Math.floor(Math.random() * 100) + 1;
let chancesLeft = 10; // Initialize the number of chances
let previousGuesses = []; // Initialize an array to store previous guesses

buttonBt.onclick = function () {
    if (chancesLeft > 0) {
        let ok_num = user_num.value;
        if (isNaN(user_num.value)) {
            result.textContent = `Please enter a valid number.`;
            wasted_num.textContent = `Chances left: ${chancesLeft - 1}`;
            result.style.backgroundColor = '#e66a8c';
        } else if (user_num.value > 100 || user_num.value < 0) {
            result.textContent = `Cannot be more than 100 and less than 0.`;
            wasted_num.textContent = `Chances left: ${chancesLeft - 1}`;
            result.style.backgroundColor = '#e66a8c';
        } else if (user_num.value == random_num) {
            result.textContent = `Winner! The number was ${random_num}.`;
            user_num.style.display = 'none';
            buttonBt.style.display = 'none';
            result.style.backgroundColor = '#43b98e';
            
        } else if (user_num.value > random_num) {
            result.textContent = `Too high! Try again.`;
            wasted_num.textContent = `Chances left: ${chancesLeft - 1}`;
            result.style.backgroundColor = '#e66a8c';
        } else {
            result.textContent = `Too low! Try again.`;
            wasted_num.textContent = `Chances left: ${chancesLeft - 1}`;
            result.style.backgroundColor = '#e66a8c';
        }
        chancesLeft--; // Decrease the chances
        user_num.value = "";
        previousGuesses.push(ok_num); // Store the previous guess
        previousNum.textContent = `Previous Guesses: ${previousGuesses.join(", ")}`;
        previousNum.style.backgroundColor = "#7E8287";
        previousNum.style.width = "80%";
    } else {
        result.textContent = `Out of chances! The number was ${random_num}.`;
        result.style.backgroundColor = '#e66a8c';
        user_num.style.display = 'none';
        buttonBt.style.display = 'none';
        buttonBt.disabled = true; // Disable the button after all chances are used
    }
};

buttonBt2.onclick = function () {
    location.reload();
};
