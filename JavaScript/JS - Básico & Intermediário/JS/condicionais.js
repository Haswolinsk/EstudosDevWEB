//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  IF  ////////////////////////

var idade = 19;

if (idade >= 18 && idade <= 70) {
    console.log("pode");
} else {
    console.log("não pode");
}

idade >= 18 ? console.log("pode") : console.log("não pode");

var pode = idade >= 18 ? true : false; //operador ternario
console.log(pode);
/* 
//////////// OPERADOR TERNARIO/////////////////
estrutura  
variavel condição ? saida1 : saida2;
VARIAVEL a ser comparada
CONDIÇÃO para indicar oq vai sair
? estrutura do operador ternario
SAIDA1 caso seja verdadeiro com a condição
SAIDA2 caso a condição n seja atendida
*/


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  SWITCH  ////////////////////////

var nota1 = 8.0;
var nota2 = 10.0;

var media = (nota1 + nota2) / 2;

var conceito = "";

if (media >= 8) {
    conceito = "Ótimo";

} else if (media >= 6.5) {
    conceito = "Bom";

} else {
    conceito = "Regular";

}

console.log(media);
console.log(conceito);

switch (conceito) {
    case "Ótimo":
        console.log(`Parabéns, vc é um ótimo aluno.`);

        break;
    case "Bom": //no caso de uma string para o switch ter cuidado com as letras maiusculas e minusculas ou acentuação.
        console.log(`Você esta quase perfeito.`);

        break;
    case "Regular":
        console.log(`Estuude mais um pouco.`);

        break;
    default:
        console.log(`Houve algum erro...`);
        break;
}


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  FOR E WHILE  ////////////////////////

var numero = 5;

/* for (let i = 0; i < numero; i++) {
    console.log(`Executando o for, pela ${i+1}vez`);
} */
console.log(`Acabou`);

/* while (numero < 10) {
    console.log(`numero ${numero}`);
    numero++;
} */


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Math.random()  ////////////////////////

var numero = Math.random() * 100;

while (numero < 90) {
    console.log(numero);
    numero = Math.random() * 100;
}
console.log(numero);
console.log(`Acabou`);

/* 
forma n usual de usar o math random com o for:

for (var n = Math.random()*100; n < 90; n = Math.random()) {
    console.log(n);
}
console.log(n); 

*/


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Array  ////////////////////////

var alunos = new Array("Igor", "José", "André", "Maria", "Joana", "Leo");
//var alunos = ["Igor", "José", "André", "Maria"]

console.log(alunos[0]);
console.log(alunos.length); //.length faz a contagem da qnt de elementos do array

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos);

}

for (const i in alunos) {
    console.log(alunos[i]);  //nesse ele pega primeiro o index
}
for (const aluno of alunos) {
    console.log(aluno);      //ja nesse ele ja pega direto o elemento
}