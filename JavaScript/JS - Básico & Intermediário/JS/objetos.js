//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Objetos  ////////////////////////

//------------------  Propriedades  ------------------//

// var aluno = new Object({...})    //<- isso daq é o mesmo q
var aluno = {                       //<- isso daq(soq simplificado)
    nome: "André",
    notas: [8.0, 9.5],
    valor: true

    //as propriedades do objeto pode ser de qlqr tipo seja um array ate mesmo ter mais um objeto dentro do objeto
}

console.log(aluno.notas[1]); //pra chamar o valor do objeto basta colocar o "." e o nome da propriedade 

aluno.matricula = 12345; //*aq vai add uma nova propriedade ao objeto

var nomeDeUmaNovaPropriedade = "lastName"; //**a string dessa variavel tb pode ser utilizada como uma nova propriedade

//aluno["sobrenome"] = "Haswolinsk"; //*: aq é outra forma de fazer o mesmo
aluno[nomeDeUmaNovaPropriedade] = "Haswolinsk"; //**: tb pode ser modificado o nome da propriedade por uma variavel

console.log(aluno);

/* 
outra forma de ter criado o mesmo objeto:
var aluno = new Object();   // aq é adicionado a variavel aluno o atributo de objeto e na sequencia é feito a adição dos atributos

aluno.nome = "André";
aluno.notas = [8.0, 9.0];
aluno.valor = true;

...

console.log(aluno);
*/


//------------------  Métodos  ------------------//

//toda função dentro de um objeto é um metodo.
var aluno = {
    nome: "André",
    notas: [8.5, 9.5],
    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

//não necessariamente a variavel precisa estar inserida e criada dentro do objeto:

function calcMedia(n1, n2) {
    return (this.notas[0] + this.notas[1]) / 2;
    //o .this serve para referenciar a propriedade daquele objeto q esta inserido
    //por causa do .this ela acaba funcionando apenas qnd esta inserida em algum objeto
}

var aluno1 = {
    nome: "João",
    notas: [8, 9],
    media: calcMedia
}
var aluno2 = {
    nome: "Maria",
    notas: [6, 7],
    media: calcMedia
}

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());


/////////////EXEMPLO FINAL

function obj(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

var a = new obj("Igor", "Oliveira");

console.log(a);


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Datas  ////////////////////////

//var d = new Date(year, month, hours, minutes, seconds, milliseconds);  
var d = new Date(2018, 08, 12); //cada valor vai representar um desses acima
//DETALHE IMPORTANTE: o mes é reprensetado de 0 a 11 pq ele esta dentro de uma array. ent começa com 0 = janeiro e termina em 11 = dezembro

var data = new Date("23 Feb 2022 20:22"); //tb tem como criar a data no formato de string mas tem q seguir os padrões pra o codigo entender
/* 
outras formas de criar com string:
new Date("05-20-1999");   //tomar cuidado pois o certo é o padrão de data dos EUA
new Date("05/20/1999");   
new Date("20/05/1999");   //ESSE FORMATO ELE NÃO ACEITA
new Date(1999);     //nesse ele vai fazer a contagem da data iniciada padrão e somar a quantidade de milisegundos
new Date("1999");   //ja nesse por estar dentro de uma string ele ja vai entender direto q vc esta se referindo ao ano
*/

console.log(d);
console.log(data);

//da data q foi definida tem como pegar apenas um pedaço dela com um metodo
/* console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(data.getHours());
console.log(data.getTime()); */ //comando bom pra descobrir os milisegundos daquele dia

//comando pra modificar algum valor da data é com .set
/* console.log(d.setFullYear(2002));
console.log(d.setHours(12));
console.log(d.setDate(24)); */


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Variaveis  ////////////////////////

var numero1 = 1
let numero2 = 2
const numero3 = 3   

//o let e o const tem um escopo fechado, isso significa q as variaveis declaradas neles so vão funcionar onde elas foram declaradas
//exemplo: uma variavel let ou const criada dentro de um objeto n pode ser acessada fora dele.
//essa peculiaridade dessas variaveis é parecida com as variaveis dentro das funções

//essa acaba sendo a unica diferença entre o var e o let, enquanto o var é uma variavel global o let so pode ser acesado dentro do escopo(dentro do bloco no qual ela foi criada) em q ele esta inserido


//numero3 = 7   //esse teste vai dar erro pq a variavel const n pode ser re-atribuida
//tomar cuidado para n confundir pq se dentro da variavel const tiver uma array("[]") ou um objeto("{}") ainda sim pode ser modifica normalmente porem ela nunca deixara de ser uma array ou um objeto
//a const sempre vai manter o mesmo valor, no caso se for uma array o valor vai ser o array n o conteudo da array


console.log(numero1);
console.log(numero2);
console.log(numero3);