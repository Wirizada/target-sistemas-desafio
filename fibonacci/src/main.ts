function isFibonacciNumber(num: number): boolean {
    let a = 0;
    let b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num || num === 0;
}

function main() {
    console.clear();
    console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- --");
    console.log("A sequência de Fibonacci é constituída da soma dos números anteriores na contagem, ");
    console.log("ou seja, o terceiro número é o resultado da soma dos dois números anteriores.");
    console.log("Ex.: 0 1 1 2 3 5... -> onde 0 + 1 = 1, 1 + 1 = 2, 2 + 1 = 3...");
    console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- --");

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Quer descobrir se um número faz parte da sequência? Digite ele aqui: ", (numeroInserido: string) => {
        const num = parseInt(numeroInserido, 10);
        if (isFibonacciNumber(num)) {
            console.log(`O número ${num}, que você informou, faz parte da sequência de Fibonacci.`);
        } else {
            console.log(`O número ${num}, que você informou, não faz parte da sequência Fibonacci.`);
        }

        readline.close();
    });
}

main();
