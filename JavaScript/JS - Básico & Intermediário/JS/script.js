/* console.log("olá Mundo!"); */

var x; 

x = "hd";
x = "placa de captura";

console.log(x);
/* a ordem influencia na logica
ultimo valor atribuido foi "placa de captura" ent vai imprimir no console placa de captura */

var c; 
var d;

c = "placa de captura";
c = d;
d = "hd";

console.log(c);


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  TIPOS DE DADOS  ////////////////////////

// Boolean = atribuição de true ou false
// Null = serve pra deixar uma variavel vazia
/* 
diferente doq foi visto antes so dava pra substituir o conteudo da variavel porem tem como deixar ela vazia atribuindo o NULL 
var a = null;
*/
// Undefined = é qnd a variavel n foi inicializada

// Number = numerais no geral
// String = cadeia de caracteres, qlqr tipo de letra, espaço e etc...
/*
a diferença entre o numero na string e dele number é pq no number da pra trabalhar com ele

console.log("1" + "1");   enquanto esse vai concatenar os doios numeros 1
console.log(1 + 1);       o outro vai fazer de fato a soma entre os dois 1
*/


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  OPERAÇÕES ARITMÉTICAS  ////////////////////////

//  + Adição          // a + b
//  - Subtração       // a - b
//  * Multiplicação   // a * b
//  / Divisão         // a / b
//  % Módulo          // a % b
//  ++ Incremento     // a++ é a mesma coisa q a = a + 1
//  -- Decremento     // a-- é a mesma coisa q a = a - 1
/* escrever --a ou ++a influencia na ordem atribuição 
levando o exemplo em consideração:
var a = 10;
var b = ++a;
console.log(b); qnd o codigo entrar no b ele vai primeiro atribuir mais 1 e dps atribuir ao valor de a
se no exemplo estivesse a++ ele teria atribuido 10 e dps somado +1

*/

var a = 10;
var b = 15;

var operacao = a % b; // vai retornar o resto da divisão
// tanto qnt pode ser feito direto no console.log qnt pode-se criar uma variavel para fazer o calculo
// console.log (a % b);

console.log(operacao); //como 10 n se divide por 15 sobra o proprio 10 como resposta


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  ATRIBUIÇÕES  ////////////////////////

//  =    x = y    x = y   
//  +=   x += y   x = x + y
//  -=   x -= y   x = x - y
//  *=   x *= y   x = x * y
//  /=   x /= y   x = x / y
//  %=   x %= y   x = x % y


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  OPERADORES COMPARATIVOS  ////////////////////////

//  ==   igual a 
//  ===  valor igual e igual // alem de comparar o valor compara o tipo de valor
//  !=   não é igual
//  !==  não igual ou não igual // alem de verificar se os valores são diferentes tb compara se o tipo de valor são diferentes
//  >    maior que 
//  <    menor que 
//  =>   maior ou igual a
//  <=   menor ou igual a


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  OPERADORES LÓGICOS  ////////////////////////

//  &&  e 
//  ||  ou
//  Negativo  //inverte oq tem dentro
console.log(!true)

var idade = 15;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("Maior que vinte ", maior20);
console.log("Menor que vinte ", menor20);


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  STRING  ////////////////////////

var str = 'Valor "texto entre aspas" qualquer';
str += " "
str += "outro texto"
// é igual a:

var str2 = "Valor qualquer" + " " + "mais texto."

console.log(str);
console.log(str2);

//parseInt = transformar em um numero inteiro
//parseFloat = transformar em um numero com casas decimais

var num1 = "3.5";
var num2 = 10;

var soma = parseFloat(num1) + parseFloat(num2);

console.log(soma);


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  ALERT, PROMPT & CONSOLE  ////////////////////////

alert("Bom dia e um grande salve");

var nome = prompt("Qual seu nome?"); 
//vai aparecer uma caixa para preecher com uma string.
alert(`Muito prazer ${nome} e seja bem vindo ao meu site :]`);
//vai aparecer uma caixa de alerta
console.log(nome);
//vai escrever os valores no console do site "f12"

var numero = parseInt(prompt(`${nome} escolha um número: `));

var dobro = numero + numero;
//prompt(`${nome} escolha um número: `); -> se escrito apenas assim ele vai pegar o valor do numero como string e apenas fazer a concatenação do valor de numero

alert(`O dobro de ${numero} é ${dobro}`);