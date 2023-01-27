function loaded(){

    function changeH1(i) {
        let h1 = document.getElementsByTagName("h1")[0]
        h1.innerText = i.value;
    }
    
    function hidenH1(){
        let h1 = document.getElementsByTagName("h1")[0];
        h1.style.display = "none";
    }
    
    function onOver(elemento){
        elemento.style.backgroundColor = "red";
    }
    
    function onOver2(elemento){
        /* o parametro 'elemento' serve para referenciar o this e utilizar aquele elemento seja pra modificar ou qlqr outra coisa */
        
        elemento.style.backgroundColor = "purple";
    }
    
    function offOver(elemento){
        elemento.style.backgroundColor = "cornflowerblue";
    }
    
    function onMouseOver(){
        let elemento = document.getElementsByTagName("p")[0];
        elemento.style.backgroundColor = "green";
    }
    
    /* function offMouseOver(){
        let elemento = document.getElementsByTagName("p")[0];
        elemento.style.backgroundColor = "white";
        
    } */
    
    let t = document.getElementById("titulo");
    t.innerHTML = "rrr";
    /* execução desse teste funcionaria em outros meus codigos pq por padrao eu coloco a execução do codigo js no final e ele so vai ser carregado apos carregar toda a pagina
    caso ela viesse no inicio teria q ser executado oq foi feito no html */

    /* t.onclick = mudarText; */
    function mudarText(){
        this.innerHTML = "Novo Texto";
    }    
    /* outra forma de fazer a mesma coisa
    (eu achei mais simples...) */

    t.addEventListener("click", mudarText);
    /* aq aparentemente da pra adicionar qualquer evento para ser executado e na sequencia a função q vai ser chamada */

    t.addEventListener("mouseover", mudarComOnOver);
    t.addEventListener("mouseout", mudarComOffOver);

    function mudarComOnOver(){
        this.innerHTML = "teste"
        /* texto original */
    }
    function mudarComOffOver(){
        this.innerHTML = "rrr"
    }

}


