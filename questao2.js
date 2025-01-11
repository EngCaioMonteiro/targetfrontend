const numero = 37;

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

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
