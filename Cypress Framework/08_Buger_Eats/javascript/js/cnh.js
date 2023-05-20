function verificaIdade() {
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length = 0) {
        alert('Idade é um campo obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('ok, você pode tirar carteira de motorista.')
    } else if (idadeNum > 4) {
        alert('Infelizmente você poderá andarde bike ou de carona.')
    } else {
        alert('ah vá! Só pode beber leite.')
    }

    console.log(nome.value)
    console.log(typeof nome.value)
    console.log(idade.value)
    console.log(typeof idadeNum)
}