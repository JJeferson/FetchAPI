


const removeCliente = id =>{
    if(confirm("Excluir?")){
        deleteCliente(id)  
        window.location.reload()
    }


}


const corpoTabela = document.querySelector("[data-conteudo-tabela]")

 
const exibeCliente = (id,cpf,nome) =>{
    
    const linha = document.createElement('tr')
    const conteudoLinha =`
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="edita-clientes.html?id=${id}"><button type="button" class="btn btn-info" >Alterar</button></a>
    ` 

    linha.innerHTML = conteudoLinha
    return linha 

}


listarClientes().then(exibe =>
    exibe.forEach( indice => {
   
        corpoTabela.appendChild(exibeCliente(indice.id,indice.cpf,indice.nome))
        //usa-se o indice.nome do campo pois dai ele pega o campo naquela posição.
        
    })


)