import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()


    try {
        const nome = evento.target.querySelector('[data-nome]').value
        const email = evento.target.querySelector('[data-email]').value

        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'

    }

    catch (erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }

})

/* dentro do escopo do formulário [data-form], o navegador fornece um objeto para obter mais informações de um evento usando o evento.target.querySelector.

value traz o valor que será inserido no campo

preventDefault() previne comportamento padrão do formulário de enviar dados sem checá-los*/
