const inputString = "Amanda não vai ao clube";

function reverseString(str) {

    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log("String invertida:", reverseString(inputString));
