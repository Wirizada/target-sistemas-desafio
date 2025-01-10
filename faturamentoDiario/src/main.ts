import * as fs from 'fs';
import * as path from 'path';

const jsonFilePath = path.resolve(__dirname, 'dados.json');
const jsonFile = fs.readFileSync(jsonFilePath, 'utf8');

class Diario {
    constructor(
        public dia: number,
        public valor: number
    ) {}
}

async function main() {
    const mes: Diario[] = JSON.parse(jsonFile);

    for (let diario of mes) {
        console.log(`Dia: ${diario.dia}, Faturamento: ${diario.valor}`);
    }

    const valores = mes.map(d => d.valor).filter(v => v > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    console.log(`Menor valor: ${menorValor}`);
    console.log(`Maior valor: ${maiorValor}`);
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
}

main().catch(err => console.error(err));
