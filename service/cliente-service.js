const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível listar os clientes.')
        })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Error('Não foi possível criar um cliente.')
        })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if (!resposta.ok) {
            throw new Error('Não foi possível remover o cliente.')

        }

    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível detalhar um cliente.')
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })

    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.JSON()
            }
            throw new Error('Não foi possível atualizar o cliente.')
        })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

/* 

-> fetch faz conexão com a API e devolve uma promisse.
-> promisse retornar uma informação que deve ser resolvida.

-> fetch substitui tanto a promise e o http. Fetch é um método global da interface da fetch API, que possui vários métodos que podemos utilizar. A fetch é um dos métodos utilizados da interface da fetch API, então  por padrão a fetch já faz um get, e devolve uma promise. Não precisa instanciar mais nada, simplesmente retorno a fetch.

*/