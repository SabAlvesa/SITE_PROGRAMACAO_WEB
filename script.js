
function realizarBusca() {

    var termoBusca = document.getElementById('pesquisa').value;

 
    if (termoBusca.trim() === "") {
        alert("Por favor, insira um termo para a busca.");
    } else {
      
        window.location.href = "pages/PaginadeBusca.html?termo=" + encodeURIComponent(termoBusca);

    }
}


document.getElementById('pesquisa').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        realizarBusca();
    }
});


function obterParametroBusca() {
           
            const urlParams = new URLSearchParams(window.location.search); 
            const termoBusca = urlParams.get('termo'); 

            if (termoBusca) {
                document.getElementById("resultados").innerHTML = "Você está buscando por: " + termoBusca;
            } else {
                document.getElementById("resultados").innerHTML = "Nenhum termo de busca foi fornecido."
            }
}

 window.onload = obterParametroBusca;
