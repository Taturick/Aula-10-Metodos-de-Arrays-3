const numeros = [1, 2, 5, 4, 8, 55, 664, 3135, 20];
// primeiro elemento A, segundo elemento B

numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

// Retorna ordem descrescente
numeros.sort((a,b)=>{
    return b -a;
});

console.log(numeros);

numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log(numeros)

numeros.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    return 0;
});
console.log(numeros)