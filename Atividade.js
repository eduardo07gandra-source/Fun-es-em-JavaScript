// 1 - Dobro
function dobro(numero) {
    return numero * 2;
}

// 2 - Triplo
function triplo(numero) {
    return numero * 3;
}

// 3 - Soma
function soma(a, b) {
    return a + b;
}

// 4 - Multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// 5 - Converter Real para Dólar
function realParaDolar(valorReal) {
    const cotacao = 5.00; // exemplo de cotação
    return valorReal / cotacao;
}

// 6 - Converter Dólar para Real
function dolarParaReal(valorDolar) {
    const cotacao = 5.00; // exemplo de cotação
    return valorDolar * cotacao;
}

// 7 - Aumento de 10%
function aumentoSalario(salario) {
    return salario * 1.10;
}

// 8 - Verificar se é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// 9 - Imprimir números de 1 até 10
function imprimir1a10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// 10 - Imprimir até um limite
function imprimirAte(limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
}

// 11 - Somar todos os números até 10
function somaAte10() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    return soma;
}

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

// 13 - Tabuada
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// 14 - Contagem regressiva
function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
        console.log(i);
    }
}

// 15 - Encontrar número 27
function encontrar27() {
    for (let i = 1; i <= 100; i++) {
        if (i === 27) {
            return "Número 27 encontrado!";
        }
    }
}

// 16 - Somar números pares até um limite
function somaPares(limite) {
    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    return soma;
}

// 17 - Contar números ímpares até um limite
function contarImpares(limite) {
    let contador = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}

// 18 - Média de dois números
function media(a, b) {
    return (a + b) / 2;
}

// 19 - Quadrado de um número
function quadrado(numero) {
    return numero * numero;
}