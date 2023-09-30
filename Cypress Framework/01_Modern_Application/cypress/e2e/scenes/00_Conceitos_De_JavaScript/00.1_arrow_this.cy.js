    /*
    constantes serão usadas quando o seu valor de var não for alterado.
        Caso este valor receba alterações deve-se utilizar o let.
    */

    // Construindo funções de maneiras diferentes:

    //01
    function soma02(a, b)
    {
        return a + b
    }
    console.log(soma02(1900, 10));

    //02
    const soma03 = function (a, b)
    {
        return a + b;
    };
    console.log(soma03(770, 7));

    //03
    const soma04 = (a, b) =>
    {
        return a + b;
    };
    console.log(soma04(1, 9));

    //04 - Construindo uma função utilizando padrão mais atual:
    const soma05 = (a, b) => a + b;

    /*
    //ATENÇÃO - EXEMPLO ERRADO PROPOSITALMENTE:
    const soma = (a, b) ->
    {
        a + b
        Neste caso, o esquecimento do return causará problemas no meu código,
            Caso ficasse como a linha baixo, estaria correto e funcionaria;
        return a + b
    }
    */

    //Outros exemplos:
    const soma06 = (a) => a + a
    //or
    const soma07 = a => a + a
    //or
    const soma08 = () => 5 + 5

    //this, fará referência a quem invocou fora do caso de teste, pegando contexto:
    it('Function test', function ()
    {
        //Realizando impressão em JavaScript
        console.log('Function', this)
    });

    //this, fará referência ao escopo mais alto, que neste caso é o valor da var, não pegando contexto:
    const soma01 = (a) => 5 + 5
    it('Arrow test', () =>
    {
        console.log('Arrow', this)
    });