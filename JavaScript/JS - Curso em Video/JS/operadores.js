/////////////// EXEMPLO DE ORDEM DE PRECENDENCIA //////////////////

var a = 5 + 3            // = 8
//ordem normal
var b = a % 5            // = 3
//ordem normal
var c = 5 * b **2        // = 45
//primeiro a potencia dps a multiplicação
var d = 10 - a / 2       // = 6
//primeiro divide dps subtrai
var e = 6 * 2 / d        // = 2
//tanto faz a ordem mas sempre melhor seguir a ordem q se le a operação
//no caso pelo '6 * 2'
var f = b % e + 4 / e    // = 3
//primeiro se faz o calculo dos valores das pontas dps soma os resultados
//(b % e) + (4 / e)

var a = 5
var b = 8

a > b && b % 2 == 0  //false
//aq vai ser resolvido cada conta separadamente e verificado se os dois sao verdadeiros
//(a > b) && (b % 2 == 0)
// false  &&     true       ->retorno false
//se 'a' for maior q 'b' e tambem o resto da divisão de b por 2 for igual a 0 ent o retorno seria true
//como o comparativo ta sendo com o &&(e) ent basta q um dos dois seja false para q retorne falso
a <= b || b / 2 == 2 //true
//msm esquema do exemplo anterior
//como o comparativo ta sendo com o ||(ou) o retorno vai ser true pq basta q um dos dois seja verdadeiro pra devolver o true
/* 
os comparativos vao ser executados nessa ordem:
1°) !  - não
2°) && - e
3°) || - ou
*/



///// so pra lembrar... /////
/* 
5 = 5       true
5 == '5'    true
5 === '5'   false
5 === 5     true
*/

/////////////// EXEMPLO COM O OPERADOR TERNARIO //////////////////

var x = 8  //x = 8

var res = x % 2 == 0 ? 5 : 9  //res = 5
// foi feita a execução do calculo com o 'x' e verificado se o retorno era 0
// caso fosse verdadeiro o valor de 'res' passaria a ser 5 e caso fosse falso seria 9








