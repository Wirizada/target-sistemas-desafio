function main() {
    const IndiceContagem: number = 13;
    let SomaTotal: number = 0;
    let K: number = 0;

    while (K < IndiceContagem) {
        K += 1;
        SomaTotal += K;
    }

    console.log(`O resultado do algoritmo é: ${SomaTotal}`);
}

main();
