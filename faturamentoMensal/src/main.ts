class Estado {
    constructor(
        public Sigla: string,
        public Faturamento: number
    ) {}
}

function main() {
    const E1 = new Estado("SP", 67836.43);
    const E2 = new Estado("RJ", 36678.66);
    const E3 = new Estado("MG", 29229.88);
    const E4 = new Estado("ES", 27165.48);
    const Outros = new Estado("Outros", 19849.53);

    const ListaEstados: Estado[] = [E1, E2, E3, E4, Outros];

    console.clear();
    let somatorio: number = 0;

    console.log("-- -- -- -- Lista de Estados -- -- -- --");
    ListaEstados.forEach((item, index) => {
        console.log(`Index: ${index} Estado: ${item.Sigla}  Faturamento: ${item.Faturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        somatorio += item.Faturamento;
    });
    console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- --");
    console.log();
    
    const percentualE1 = (E1.Faturamento / somatorio) * 100;
    const percentualE2 = (E2.Faturamento / somatorio) * 100;
    const percentualE3 = (E3.Faturamento / somatorio) * 100;
    const percentualE4 = (E4.Faturamento / somatorio) * 100;
    const percentualOutros = (Outros.Faturamento / somatorio) * 100;
    
    console.log(`O valor total de faturamento dos estados é de: ${somatorio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- --");
    console.log(`O percentual de representação do estado de ${E1.Sigla} no valor total de faturamento é: ${percentualE1.toFixed(2)}%`);
    console.log(`O percentual de representação do estado de ${E2.Sigla} no valor total de faturamento é: ${percentualE2.toFixed(2)}%`);
    console.log(`O percentual de representação do estado de ${E3.Sigla} no valor total de faturamento é: ${percentualE3.toFixed(2)}%`);
    console.log(`O percentual de representação do estado de ${E4.Sigla} no valor total de faturamento é: ${percentualE4.toFixed(2)}%`);
    console.log(`O percentual de representação de ${Outros.Sigla} estados no valor total de faturamento é: ${percentualOutros.toFixed(2)}%`);
}

main();
