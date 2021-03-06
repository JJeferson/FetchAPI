const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')


const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then(dados=>{
    
    inputCPF.value = dados[0].cpf
    inputNome.value = dados[0].nome 
})



const formEdicao = document.querySelector('[data-form]')

formEdicao.addEventListener("submit",event =>{

    event.preventDefault()
    const nome = event.target.querySelector('[data-nome]')
    const cpf = event.target.querySelector('[data-cpf]')

    editaCliente(id,nome.value,cpf.value)
    window.location.href = "clientes.html"
})