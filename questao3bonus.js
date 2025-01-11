const fs = require('fs');

fs.readFile('./dados1.json', 'utf8', (err, data) => {

    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }

    try {
        const faturamento = JSON.parse(data);
        const valoresValidos = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
        const menor = Math.min(...valoresValidos);
        const maior = Math.max(...valoresValidos);
        const media = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
        const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

        console.log('Menor valor:', menor);
        console.log('Maior valor:', maior);
        console.log('Dias acima da média:', diasAcimaDaMedia);
    } catch (parseError) {
        console.error('Erro ao interpretar o JSON:', parseError);
    }
});