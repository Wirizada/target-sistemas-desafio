import * as readline from 'readline';

function inverterString(palavraInserida: string): string {
    let palavraInvertida = "";
    for (let i = palavraInserida.length - 1; i >= 0; i--) {
        palavraInvertida += palavraInserida[i];
    }
    return palavraInvertida;
}

function main() {
    console.clear();
    console.log("-- -- -- -- -- Inversão de String -- -- -- -- --");
    console.log("Esse algoritmo recebe uma frase inserida e inverte a sequência dos ");
    console.log("caracteres. Insira uma frase e faça o teste:");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite uma frase: ", (palavraInserida: string) => {
        const palavraInvertida = inverterString(palavraInserida);
        console.log();
        console.log(`A frase inserida foi: ${palavraInserida}`);
        console.log(`A frase invertida resultante é: ${palavraInvertida}`);
        rl.close();
    });
}

main();
