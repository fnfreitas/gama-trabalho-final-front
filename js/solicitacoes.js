function enviarSol(event) { 
    alert(entrei);
    let nome = document.getElementById("txtnome");
    let operadora = document.getElementById("txtoperadora");
    let celular = document.getElementById("txtcelular");
    let documento = document.getElementById("txtdocumento");

    if (nome.value){
        document.getElementById("msgErro").innerHTML = "Preencha o nome do técnico";
        formSol.txtnome.focus;
        return false;
    }
}