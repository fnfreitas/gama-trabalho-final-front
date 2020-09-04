function buscarPorStatus() { 
    let statusSelect = document.getElementById("sel_status");
    let statusValue = statusSelect[statusSelect.selectedIndex].value; //obtem o valor status selecionado

    fetch("http://localhost:8080/solicitacao/status/"+statusValue)
        .then(res => res.json())
        .then(result => preencheResposta(result));
} 

function exportar() {

    let statusSelect = document.getElementById("sel_status");
    let statusValue = statusSelect[statusSelect.selectedIndex].value; //obtem o valor status selecionado

    fetch("http://localhost:8080/solicitacao/status/"+statusValue)
    .then(res => res.json())
    .then( result => gerarCSV(result));
}


function preencheResposta(resposta) {
    //console.log(resposta); //avaliar resposta antes de dar sequencia
    let  tabelaPedidos = '<table class="table" id="tabeladedados">';

    tabelaPedidos = tabelaPedidos + '<tr>' +
                                        '<th>Nome do Técnico</th>' +
                                        '<th>Operadora</th>' +
                                        '<th>PDV</th>' +
                                        '<th>Data/Hora</th>' +
                                        '<th>Status</th>' +
                                        '<th>Ações</th>' +
                                    '</tr>';

    for(let i = 0; i < resposta.length; i++) {

        tabelaPedidos = tabelaPedidos + `<tr> <td> ${resposta[i].nomeTecnico} </td>
        <td>  ${resposta[i].operadora}  </td> 
        <td>  ${resposta[i].pdvidsolic.nome}  </td> 
        <td>  ${resposta[i].data} - ${resposta[i].hora} </td> 
        <td>  ${resposta[i].status} </td> 
        <td> <button class="btn btn-sm btn-success" onclick="alterarStatus('L',${resposta[i].numSeq} )">L</button> 
             <button class="btn btn-sm btn-warning" onclick="alterarStatus('N',${resposta[i].numSeq} )">N</button> 
             <button class="btn btn-sm btn-danger"  onclick="alterarStatus('C', ${resposta[i].numSeq} )">C</button> </td> 
        </tr>`;
        
        tabelaPedidos = tabelaPedidos + '</tr>';
    }

    tabelaPedidos = tabelaPedidos + '</table>';

    document.getElementById("tableResposta").innerHTML = tabelaPedidos;

}

function alterarStatus(status, numSeq){
    let solicitacaoMsg = {
        numSeq:numSeq,
        status:status
    }

    let cabecalho = {
        method: 'PUT',
        body: JSON.stringify(solicitacaoMsg),
        headers:{
            'Content-type':'application/json'
        }
    }

    fetch('http://localhost:8080/solicitacao/atualiza-status',cabecalho)
    .then( res => res.json())
    .then(result => { if(result) buscarPorStatus()})
}