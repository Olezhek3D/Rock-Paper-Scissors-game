
// function playRock(){
//     play("rock")
//     console.log("rock")
// }
// function playPaper(){
//     play("paper")
//     console.log("paper")
// }
// function playScissors(){
//     play("scissors")
//     console.log("scissors")
// }
// function play(choicePlayer){
 //     let computerChoice = elements[Math.floor(Math.random() * elements.length)];
//     let result = document.getElementById("Result")
//     setTimeout(() =>{
//         result.innerHTML = "Computer is thinking..."
//     }, 500)
//     setTimeout(() =>{
//         result.innerHTML = "Computer is thinking.."
//     }, 1000)
//     setTimeout(() =>{
//         result.innerHTML = "Computer is thinking."
//     }, 1500)
//     setTimeout(() =>{
//         result.innerHTML = "Computer is thinking.."
//     }, 2000)
//     setTimeout(() =>{
//         result.innerHTML = "Computer is thinking..."
//     }, 2500)
//     setTimeout(() =>{
//         if(choicePlayer === "scissors"){
//                 if(computerChoice === "paper"){
//                     result.innerHTML = `You won.`
//                     getWin()
//                     console.log(`You won ${won} times`)
//                 }
//                 else if(computerChoice === "rock"){
//                     result.innerHTML = `You lost.`
//                     getLose()
//                     console.log(`You lost ${lost} times.`)
//                 }
//                 else{
//                     result.innerHTML = `Draw.`
//                     console.log(`You have ${draw} draw times`)
//                     getDraw()
//                 }  
//         }
//         else if(choicePlayer === "paper"){
//             if(computerChoice === "rock"){
//                 result.innerHTML = `You won.`
//                 getWin()
//                 console.log(`You won ${won} times`)
//             }
//             else if(computerChoice === "scissors"){
//                 result.innerHTML = `You lost.`
//                 console.log(`You lost ${lost} times.`)
//                 getLose()
//             }
//             else{
//                 result.innerHTML = `Draw.`
//                 getDraw()
//                 console.log(`You have ${draw} draw times`)
//             } 
//         }
//             else if(choicePlayer === "rock"){
//                 if(computerChoice === "scissors"){
//                     result.innerHTML = `You won.`
//                     getWin()
//                     console.log(`You won ${won} times`)
//                 }
//                 else if(computerChoice === "paper"){
//                     result.innerHTML = `You lost.`
//                     getLose()
//                     console.log(`You lost ${lost} times`)
//                 }
//                 else{
//                     result.innerHTML = `Draw.`
//                     getDraw()
//                     console.log(`You have ${draw} draw times`)
//                 }
//             }
//     }, 3000)
    
// }
// export let won = 0;
// export let lost = 0;
// export let draw = 0;
// export function getWin(){
//     won++
// }
// export function getLose(){
//     lost++
// }
// export function getDraw(){
//     draw++
// }



let won = 0;
let lost = 0;
let draw = 0;

function playRock() {
    play("rock");
}
function playPaper() {
    play("paper");
}
function playScissors() {
    play("scissors");
}

function play(choicePlayer) {
    let elements = ["paper", "rock", "scissors"];
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
    let result = document.getElementById("Result");

    // Анимация "Компьютер думает..."
    let messages = ["Computer is thinking...", "Computer is thinking..", "Computer is thinking."];
    let i = 0;
    
    let interval = setInterval(() => {
        result.innerHTML = messages[i % messages.length];
        i++;
    }, 500);

    // Показываем результат через 3 секунды
    setTimeout(() => {
        clearInterval(interval); // Останавливаем анимацию

        if (choicePlayer === "scissors") {
            if (computerChoice === "paper") {
                result.innerHTML = `You won.`;
                getWin();
            } else if (computerChoice === "rock") {
                result.innerHTML = `You lost.`;
                getLose();
            } else {
                result.innerHTML = `Draw.`;
                getDraw();
            }
        } else if (choicePlayer === "paper") {
            if (computerChoice === "rock") {
                result.innerHTML = `You won.`;
                getWin();
            } else if (computerChoice === "scissors") {
                result.innerHTML = `You lost.`;
                getLose();
            } else {
                result.innerHTML = `Draw.`;
                getDraw();
            }
        } else if (choicePlayer === "rock") {
            if (computerChoice === "scissors") {
                result.innerHTML = `You won.`;
                getWin();
            } else if (computerChoice === "paper") {
                result.innerHTML = `You lost.`;
                getLose();
            } else {
                result.innerHTML = `Draw.`;
                getDraw();
            }
        }

        updateStats();
    }, 3000);
}

// Функции обновления счёта
function getWin() {
    won++;
}
function getLose() {
    lost++;
}
function getDraw() {
    draw++;
}



    function updateStats() {
        let stats = document.getElementById("containerStats");
        if (stats) {
            stats.innerHTML =  `<h3>Statistics:</h3>
            <p class="played-as-the">Wins: ${won}</p>
            <p class="played-as-the">Losses: ${lost}</p>
            <p class="played-as-the">Draws: ${draw}</p>
            <div id="centerBtn">
            <button id="hidden" onclick="hide()">Hide statistic</button>
            </div>`     
        }
        console.log(`Wins: ${won}, Losses: ${lost}, Draws: ${draw}`);
    }

function show(){
    let shown = document.getElementById("shown");
    let stats = document.getElementById("containerStats");
    shown.style.display = "none";
    stats.style.display = "block"
}
function hide(){
    let stats = document.getElementById("containerStats");
    let shown = document.getElementById("shown");
    stats.style.display = "none";
    shown.style.display = "block"
}

