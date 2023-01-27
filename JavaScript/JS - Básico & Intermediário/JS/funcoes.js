//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Função  ////////////////////////

function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    //console.log(media);

    return media
}

var resultado1 = media(7, 7);
var resultado2 = media(9, 10);

console.log(`Media 1: ${resultado1} // Media 2: ${resultado2}`);

function saudacao() {
    return "Olá Mundo!!";

}

var s = saudacao;
//por n ter colocado o () o programa entende q vc atribuiu a função a uma variavel
//e por conta disso o "s" passou a ser uma função
console.log(s());


//utilizando o msm exemplo de anteriormente
function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media
}

var resultado = media(5, 7);
var m = media;

var resultado2 = m(2, 3);

console.log(resultado);
console.log(resultado2);

/* 
o mesmo exemplo so q escrito de outra forma:
var media = function (n1, n2) {
    return (n1, n2) / 2;
}
console.log(media(5, 6));
*/


//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Usando TUDO  ////////////////////////

var nomes = ["Igor", "José", "André"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {

    if (media > 7) {
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

for (const i in nomes) {

    var nota1 = notasA[i]; //simplificar na escrita do log e no calculo da media
    var nota2 = notasB[i]; //simplificar na escrita do log e no calculo da media

    var m = media(nota1, nota2); 
    //caso n tivesse simplificado teria ficado:
    //var m = media(notasA[i], notasB[i]);
    //e o uso do "var = m" é pra simplificar ainda mais

    console.log(`${nomes[i]} - ${nota1} - ${nota2} - ${m} - ${passou(m)}`);

}