// 1 - Dobro
function dobro(numero) {
    return numero * 2;
}
console.log("Dobro de 5:", dobro(5));


// 2 - Triplo
function triplo(numero) {
    return numero * 3;
}
console.log("Triplo de 5:", triplo(5));


// 3 - Soma
function soma(a, b) {
    return a + b;
}
console.log("Soma 4 + 6:", soma(4, 6));


// 4 - Multiplicação
function multiplicacao(a, b) {
    return a * b;
}
console.log("Multiplicação 3 x 7:", multiplicacao(3, 7));


// 5 - Real para Dólar
function realParaDolar(valorReal) {
    const cotacao = 5;
    return valorReal / cotacao;
}
console.log("100 reais em dólar:", realParaDolar(100));


// 6 - Dólar para Real
function dolarParaReal(valorDolar) {
    const cotacao = 5;
    return valorDolar * cotacao;
}
console.log("100 dólares em real:", dolarParaReal(100));


// 7 - Aumento 10%
function aumentoSalario(salario) {
    return salario * 1.10;
}
console.log("Salário com aumento:", aumentoSalario(1000));


// 8 - Verificar par
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log("10 é par?", ehPar(10));


// 9 - Imprimir 1 até 10
function imprimir1a10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
imprimir1a10();


// 10 - Imprimir até limite
function imprimirAte(limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
}
imprimirAte(5);


// 11 - Somar até 10
function somaAte10() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    return soma;
}
console.log("Soma até 10:", somaAte10());


// 12 - Contar pares até 10
function contarParesAte10() {
    let contador = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
}
console.log("Quantidade de pares até 10:", contarParesAte10());


// 13 - Tabuada
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
tabuada(7);


// 14 - Contagem regressiva
function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
        console.log(i);
    }
}
contagemRegressiva(5);


// 15 - Encontrar 27
function encontrar27() {
    for (let i = 1; i <= 100; i++) {
        if (i === 27) {
            return "Número 27 encontrado!";
        }
    }
}
console.log(encontrar27());


// 16 - Somar pares até limite
function somaPares(limite) {
    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    return soma;
}
console.log("Soma dos pares até 10:", somaPares(10));


// 17 - Contar ímpares
function contarImpares(limite) {
    let contador = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}
console.log("Quantidade de ímpares até 10:", contarImpares(10));


// 18 - Média
function media(a, b) {
    return (a + b) / 2;
}
console.log("Média de 8 e 6:", media(8, 6));


// 19 - Quadrado
function quadrado(numero) {
    return numero * numero;
}
console.log("Quadrado de 9:", quadrado(9));
