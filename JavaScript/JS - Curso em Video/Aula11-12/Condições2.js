console.log(``);
console.log(``);
var idade = 66

console.log(`Voce tem ${idade} anos.`);
if (idade < 16) {
    console.log(`Não vota`);
}else{
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional');
    }else{
        console.log('Voto obrigatorio');
    }
}
console.log(``);
// Modelo mais agradavel para esse exemplo:

var idade2 = 67

console.log(`Voce tem ${idade2} anos.`);
if (idade2 < 16) {
    console.log(`Não vota`);
}else if (idade2 < 18 || idade2 > 65){
    console.log('Voto opcional');
}else{
    console.log('Voto obrigatorio');
}


console.log(``);

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12){
    console.log('Bomdea');
}else if (hora <= 18){
    console.log('Batarde :]');
}else{
    console.log('Muito Boa Noite...');
}


console.log(``);

//                Lembrete!
//      NÃO ESQUECER NO SWITCH DO BREAK

var hoje = new Date()
var dia = hoje.getDay()

/* 
Esse dia é entregue dentro de uma lista de 0 a 6 respectivo pra cada dia da semana
0 =  Domingo
1 =  Segunda
2 =  Terça
3 =  Quarta
4 =  Quinta
5 =  Sexta
6 =  Sábado
*/
switch (dia) {
    case 0:
        console.log('Hoje é Domingo');
        break;
    case 1:
        console.log('Hoje é Segunda');
        break;
    case 2:
        console.log('Hoje é Terça');
        break;
    case 3:
        console.log('Hoje é Quarta');
        break;
    case 4:
        console.log('Hoje é Quinta');
        break;
    case 5:
        console.log('Hoje é Sexta');
        break;
    case 6:
        console.log('Hoje é Sábado');
        break;
    default:
        console.log('[ERRO] Dia invalido!');
        break;
}










console.log(``);
console.log(``);