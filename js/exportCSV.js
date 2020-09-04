function gerarCSV(dados) {
   
    let relatorio = document.getElementById("msgCSV");

    if (dados == null || dados.lenght == 0) {
        relatorio.innerHTML = `<p>Nenhum registro encontrado.</p>`;
        return;
    }
    
    let csv = "";
    
    dados.forEach(resposta => {
        //csv += `${e.campo1};${e.campo2};${e.campo3};${e.campo4};${e.campo4}\n`;
        csv += `${resposta.nomeTecnico};${resposta.operadora};${resposta.pdvidsolic.nome};${resposta.data};${resposta.hora}\n`;        
    });
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'solicitacoes.csv'
    hiddenElement.click();

}