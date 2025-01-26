const formulario = document.querySelector('#formulario') // Selecionar o formulário

const btnEnviar = document.querySelector('#btnCalcular') // Selecionar o botão para o envio dos dados
const btnLimpar = document.querySelector('#btnLimpar') // Selecionar o botão para limpar o formulário

// Armazenando os dados dos inputs
const inputN1 = document.querySelector('#nota1') 
const inputN2 = document.querySelector('#nota2')

// Selecionando os elementos que exibem os resultados
const exibirResultado = document.querySelector('#exibirResultado')
const exibirMedia = document.querySelector('#exibirMedia')
const boxResultado = document.querySelector('.box-resultado')

// Selecionando o alerta para num inválido
const exibirAlerta = document.querySelector('#alerta')

// FUNÇÕES PARA EXECUÇÃO DO PROGRAMA
function media(n1, n2) {
    return (n1 + n2) / 2
}

function selecionarAlerta(notaFinal, element1, element2, boxResultado) {
    if (notaFinal >= 8) {
        element1.innerHTML = 'Aprovado'
        element2.innerHTML = notaFinal
        boxResultado.classList.add('aprovado')
    } else if (notaFinal >= 6) {
        element1.innerHTML = 'Recuperação'
        element2.innerHTML = notaFinal
        boxResultado.classList.add('recuperacao')
    } else {
        element1.innerHTML = 'Reprovado'
        element2.innerHTML = notaFinal
        boxResultado.classList.add('reprovado')
    }
}

// Função que verifica se é um número e se está entre 0 e 10
function validarNumero(numero) {
    const nota1 = inputN1.value
    const nota2 = inputN2.value

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        formulario.reset() // limpar form
        exibirAlerta.textContent = 'Digite uma nota entre 0.0 e 10.0'
        exibirAlerta.classList.add('alerta')
        setTimeout(() => {
            exibirAlerta.textContent = ''
            exibirAlerta.classList.remove('alerta')
        }, 2000)
    }
}

// Criando evento do botão enviar que executa as ações
btnEnviar.addEventListener('click', (e) => {

    const n1 = parseFloat(inputN1.value)
    const n2 = parseFloat(inputN2.value)
    const mediaFinal = media(n1, n2)

    if (isNaN(mediaFinal) || mediaFinal < 0) {
        boxResultado.classList.remove('aprovado')
        boxResultado.classList.remove('recuperacao')
        boxResultado.classList.remove('reprovado')
        console.log('Não é um número')
        exibirResultado.textContent = 'Tente novamente'
        exibirMedia.textContent = 'Digitou algum valor inválido :('
    } else {
        parseFloat(mediaFinal)
        selecionarAlerta(mediaFinal, exibirResultado, exibirMedia, boxResultado)
    }
    
    e.preventDefault()
})

// Criando evento do botão limpar que limpa tudo
btnLimpar.addEventListener('click', () => {
    boxResultado.classList.remove('aprovado')
    boxResultado.classList.remove('recuperacao')
    boxResultado.classList.remove('reprovado')
    exibirMedia.textContent = 'NOTA'
    exibirResultado.textContent = 'RESULTADO'
})