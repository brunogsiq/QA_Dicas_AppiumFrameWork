//this, fará referência a quem invocou fora do caso de teste:
it('Test com função', function () {
    console.log('Function', this)
})

//this, fará referência ao escopo mais alto, que neste caso é o valor da var:
const soma = (a) => 5 + 5
it('Test com função', () => {
    console.log('arrow', this)
})
