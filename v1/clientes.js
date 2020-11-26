const infoClientes = [
    {
        cpf: "1223",
        nome: "Penisvaldo"
    },
    {
        cpf: "1223",
        nome: "Douglas"
    },
    {
        cpf: "999999",
        nome: "herbert richers"
    },
    {
        cpf: "1223",
        nome: "Jeferson"
    }
]
 
 



const corpoTabela = document.querySelector("[data-conteudo-tabela]")

 
const exibeCliente = (cpf,nome) =>{
    
    const linha = document.createElement('tr')
    const conteudoLinha =`
    <td>${cpf}</td>
    <td>${nome}</td>
    ` 

    linha.innerHTML = conteudoLinha
    return linha 

}


infoClientes.forEach( indice => {
   
    corpoTabela.appendChild(exibeCliente(indice.cpf,indice.nome))
    //usa-se o indice.nome do campo pois dai ele pega o campo naquela posição.
    
})