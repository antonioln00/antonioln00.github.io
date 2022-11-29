const antonioGame = [8, 22, 26, 32, 42, 60];
console.log("Jogo do Antonio", antonioGame);

const number1 = 20;
const number2 = 4;
const number3 = 32;
const number4 = 28;
const number5 = 39;
const number6 = 60;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
console.log("Jogo sorteado", megaSenaNumbers);

let numberOfHits = 0;

for (let drawnNumber of megaSenaNumbers) {
    // console.log("Numeros sorteados", drawnNumber);
    for (let studentNumber of antonioGame) {
        // console.log ("Numeros Antonio", studentNumber )

        if (drawnNumber === studentNumber) {
            numberOfHits = numberOfHits + 1;
        }
    }
}


// for (let index = 0; index < megaSenaNumbers.length; index += 1) {
//     let drawnNumber = megaSenaNumbers[index];
//     // console.log("Numero sorteado", drawnNumber);
//     for (let cont = 0; cont < antonioGame.length; cont += 1) {
//         let studentNumber = antonioGame[cont];
//         // console.log("Numero Antonio", studentNumber);
//         if (drawnNumber === studentNumber) {
//             numberOfHits = numberOfHits + 1;
//         }
//     }
// }



console.log("Numero de acertos:", numberOfHits);