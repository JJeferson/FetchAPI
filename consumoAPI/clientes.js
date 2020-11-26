
const listarClientes = () => {
return fetch('http://localhost:4000/clientes')
// o metodo padrão do fetch é o GET por isso n precisa por
.then( resposta =>{
  
    return resposta.json()

})
.then(json=> {

   return json

})
}

const cadastrarNovoCliente = (nome,cpf) =>{
    const Json = JSON.stringify({
        cpf:cpf,
        nome:nome
     

    })
    
    return fetch('http://localhost:4000/clientes/cliente',{
    method:'POST',
    headers:{
     'Content-Type':'application/json'
    },
    body: Json

    })
    .then(resp => {
        return resp.body
    })

}



const deleteCliente = (id) =>{
 
    
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
    method:'DELETE',
    headers:{
     'Content-Type':'application/json'
    }})
    .then(resp => {
        return resp.body
    })

}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
    method:'GET'})
    .then( resposta =>{
  
        return resposta.json()
    
    })


}

 


const editaCliente = (id,nome,cpf) =>{
    const Json = JSON.stringify({
         
        cpf:cpf,
        nome:nome
     

    })
    
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
    method:'PUT',
    headers:{
     'Content-Type':'application/json'
    },
    body: Json

    })
    .then(resp => {
        return resp.body
    })

}