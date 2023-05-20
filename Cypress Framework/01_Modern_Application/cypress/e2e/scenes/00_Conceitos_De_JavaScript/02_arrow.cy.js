// Construindo a primeira função:
function soma(a, b) {
  return a + b;
}
console.log(soma(1900, 10));

/*
constantes serão usadas quando o seu valor de var não for alterado.
    Caso este valor receba alterações deve-se utilizar o let.
*/
const soma = function (a, b) {
  return a + b;
};
console.log(soma(770, 7));

const soma = (a, b) => {
  return a + b;
};
console.log(soma(1, 9));

//Construindo uma constante em novo padrão:
const soma = (a, b) => a + b;

/*
//ATENÇÃO - ERRADO
const soma = (a, b) -> {
    a + b
    //Neste caso, o esquecimento do return causará problemas no meu código
}
*/

//Outros exemplos:

const soma = (a) => a + a
//or
const soma = a => a + a
//or
const soma = () => 5+5

