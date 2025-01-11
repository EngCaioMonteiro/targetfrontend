let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log("O valor da variável SOMA é:", SOMA);

function isFibonacci(num) {
    let a = 0, b = 1;

    if (num === a || num === b) return true;

    let next = a + b;
    while (next <= num) {
        if (next === num) return true;
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}

const numero = 21;
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

const faturamento = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

const valoresValidos = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
const menor = Math.min(...valoresValidos);
const maior = Math.max(...valoresValidos);

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);

const media = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;

const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

console.log("Dias acima da média:", diasAcimaDaMedia);

const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / total * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputString = "Exemplo";
console.log("String invertida:", reverseString(inputString));