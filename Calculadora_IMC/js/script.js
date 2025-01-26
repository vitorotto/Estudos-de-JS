/* Manipular os dados do formulário */

let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')


/* Para pegar os dados que estão dentro dos inputs devemos usar a propriedade ".value", mas antes, determine um evento como referência para pegar os dados */

btnEnviar.addEventListener('click', (e) => {
    // pegar os valores de cada input
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    // Exibindo o resultado na caixa IMC
    cxImc.value = imc // O value da caixa IMC é alterado de "0.0" para o resultado do calculo de IMC
    let sit = situacaoImc(imc) // Recebe a situação do peso da pessoa com base no resultado do seu IMC
    aviso.innerHTML = sit // Altera o valor do span que fica ao lado da caixa que exibe o resultado do IMC
                          // Exibe a situacão da pessoa. EX: sobrepeso, baixo peso, etc...
    // Saída dos dados
    // Criando o objeto pessoa
    let pessoa = {
        nome : nome,
        idade : idade,
        peso : peso,
        altura : altura,
        imc : imc,
        sit : sit
    }

    console.log(pessoa)
    dados[1].innerHTML = pessoa.nome
    dados[2].innerHTML = pessoa.idade + " anos"
    dados[3].innerHTML = pessoa.peso + " kg"
    dados[4].innerHTML = pessoa.altura + " m"
    dados[4].innerHTML = pessoa.imc + " " + pessoa.sit

    // Prevenir o comportamento padrão de recarregar a página ao pressionar o botão com a propriedade -> |type="submit"|
    e.preventDefault()
})

function situacaoImc(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}