//////////////////////////////////////////////////////////////////////////////////////


//////////////////////  Document  ////////////////////////

console.log(document); //esse comando mostra o documento completo do html

/* 
document.body: qnt mais especifico for o elemento q vc pegue menos do html ele vai mostrar

document.body.innerHTML: com esse comando ele vai mostrar o body todo em string como consequencia da pra adicionar elementos do html pelo js concatenando
*/

let p1 = document.getElementById("p1"); 
//aq atribuimos a uma variavel o elemento id do paragrafo1 dando a possibilidade de modificar um elemento em especifico da pagina

let paragrafo = document.getElementsByClassName("paragrafo");
//aq ele faz o mesmo soq com uma class, e o js coloca todos as class em uma array

let th = document.getElementsByTagName("h1");
//aq ele faz o mesmo q o class soq pegando as tags do html, nesse caso pegou o h1


/* 
os tres tem uma semelhança basica de q ambos modificam o conteudo do html porem 

!p1.innerHTML = "Novo conteudo"; 
//esse te da a possibilidade de colocar tags exemplo:
//p1.innerHTML = "<h1>Novo conteudo</h1>";

!p1.innerText = "Conteudo mais novo";
//esse te mostra apenas oq esta sendo mostrado no html

!p1.textContent = "Mais novo ainda";
//ja esse mostra todo o conteudo da tag, ate mesmo os elementos escondidos

*/

p = document.getElementById("p1"); 
p.className = "";         //esse comando vai limpar as class q estiverem na tag de id p1
p.style = "color: blue";  //esse comando vai colocar um style na tag selecionada
p.style.backgroundColor = "red" // tem esse formato aq tb
//p.meuAtt;                //esse comando n vai funcionar pq o "p." é apenas para atributos ja determinados pelo js
let meuAtt = p.getAttribute("meuAtt"); //essa seria a forma correta de fazer oq foi feito anteriormente
//e para modifica-lo ou criar um novo atributo:
p.setAttribute("meuAtt", "Outro nome");
p.setAttribute("novoAtt", "qualquer coisa");