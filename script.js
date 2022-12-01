// const a = 20;
// const b = 17;
// const c = 45

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//     console.log("O número a é maior do que b!");
// } else {
//     console.log("O numero b é maior do que a!");
// };

// if (a > b && a > c) {
//     console.log("o maior numero é o " + a + "(a)!")
// } else if (b > a && b > c) {
//     console.log("o maior numero é o " + b + "(b)!")
// } else {
//     console.log("o maior número é o " + c + " (c)!")
// };

// const d = 10;

// if (d => 10) {
//     console.log("positive");
// } else if (d < 10) {
//     console.log ("negative");
// } else {
//     console.log("zero")
// }

// const anguloA = 45;
// const anguloB = 45;
// const anguloC = 90;

// const somaTotal = anguloA + anguloB + anguloC;
// // console.log(somaTotal);

// const todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

// if (todosAngulosPositivos){
//     if(somaTotal === 180) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// } else { 
//     console.log("Erro: ângulo inválido")
// }

// let queen;

// switch (queen) {
//     case "frente":
//         console.log("Ande para frente!");
//         break;

//     case "diagonalDireita":
//         console.log("Ande para diagonal direita!")
//         break;

//     case "diagonalEsquerda":
//         console.log("Ande para diagonal esquerda!")
//         break;

//     case "ladoDireito":
//         console.log("Ande para o lado direito!")
//         break;

//     case "ladoEsquerdo":
//         console.log("Ande para o lado esquerdo!")
//         break;

//     case "tras":
//         console.log("Volte para trás!")
//         break;

//     case "diagonalDireitaTrás":
//         console.log("Volte pela diagonal direita!")
//         break;

//     case "diagonalEsquerdaTrás":
//         console.log("Volte pela diagonal esquerda!")
//         break;

//     default:
//         console.log("Erro: peça inválida.")

// }

let nota;

if (nota < 100 && nota >= 90) {
    console.log("A")
} else if (nota < 90 && nota >= 80) {
    console.log("B")
} else if (nota < 80 && nota >= 70) {
    console.log("C")
} else if (nota < 70 && nota >= 60) {
    console.log ("D")
} else if (nota < 60 && nota >= 50) {
    console.log ("E")
} else if (nota < 50 && nota > 0) {
    console.log("F")
} else {
    console.log("Erro")
}
