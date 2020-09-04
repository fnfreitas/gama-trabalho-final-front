function validaLogin() { 
    let userTxt = localStorage.getItem("userLogged");

    //verificar se o usuário está logado
    if((!userTxt)){
        window.location = "index.html";
    }

    let jsonUser = JSON.parse(userTxt); //transforma o text em um Json
    document.getElementById("user").innerHTML = `&nbsp;${jsonUser.nome} ( ${jsonUser.racf} )`;
    document.getElementById("imgUser").innerHTML = `<img src="${jsonUser.linkFoto}">`;

    cargo = `${jsonUser.cargo}`;
    if (cargo == "tecnico"){
        document.getElementById("listaAgendamento").style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}

function home(){
    window.location="home.html"; 
}

function relatorio(){
    window.location="relatorio.html"; 
}

function solicitacoes(){
    window.location="solicitacoes.html"; 
}
