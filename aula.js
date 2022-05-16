
//1.7 Closures

//uma função pode ser atribuída a uma variável
let umaFuncao = function () {
    console.log ("Fui armazenada em uma variável");
}
//e pode ser chamada assim
umaFuncao()
//f recebe uma função como parâmetro e, por isso
//é uma função de alta ordem.
//Por devolver uma função, g também é de alta ordem.
function f (funcao) {
//chamando a função
//note como a tipagem dinâmica tem seu preço
//    funcao() //não reconhecida dentro do próprio escopo
}
function g () {
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}
//f pode ser chamada assim
f (function (){
    console.log ('Estou sendo passada para f')
})
//e g pode ser chamada assim
const gResult = g()
gResult()
//e assim também
g()()
//outros testes
/* f chama g, que somente devolve uma função.
Nada é exibido.*/
f(g)
/*f chama a função devolvida por g.
"Fui criada por g" é exibido.*/
f(g())
/*f tenta chamar o que a função criada por g
devolve. Ela não devolve coisa alguma. Por isso,
um erro - somente em tempo de execução - acontece. */
f(g()())
//O que acontece?
f(1) //devolve nada, pois 1 não é uma função.

function ola(){
    let nome = 'João';
    return function (){
        console.log ('Olá, João');
    }
}
let olaResult = ola();
/*perceba que aqui a função ola já terminou.
É de se esperar que a variável nome já não
possa ser acessada.*/
olaResult();
//também vale com parâmetros
function saudacoesFactory(saudacao, nome){
    return function (){
        console.log (saudacao + ', ' + nome);
    }
}
let olaJoao = saudacoesFactory ('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();
tchauJoao();

function eAgora(){
    let cont = 1;
    function f1 (){
        console.log (cont);
    }
    cont++;
    function f2 (){
        console.log (cont);
    }
    //JSON contendo as duas funções
    return {f1, f2}
}
let eAgoraResult = eAgora();
/* neste momento, a funcao eAgora já
executou por completo e a variável
cont já foi incrementada. Seu valor final
é mantido e, assim, ambas f1 e f2 exibirão 2.
*/
eAgoraResult.f1();
eAgoraResult.f2();

//1.6 Funções

function helloSemParam (){
    console.log ('Oi')
}
helloSemParam()
//cuidado, aqui redefinimos a função sem parâmetros
function helloSemParam (nome){
    console.log ('Hello, ' + nome)
}
helloSemParam('Pedro')
function somaFunc (a, b) {
    return a + b;
}
const resSoma = somaFunc (2, 3)
console.log (resSoma)

const dobroFuncAnon = function (n) {
    return n * 2;
};
const resDobro = dobroFuncAnon(4);
console.log(resDobro);
//valor padrão para o parâmetro
const triploFuncAnon = function (n = 5) {
    return 3 * n;
};
console.log(triploFuncAnon());
console.log(triploFuncAnon(10));

const hello = () => console.log("Hello");
hello();
const dobroArrowFunc = (valor) => valor * 2;
console.log(dobroArrowFunc(10));
const triploArrowFunc = (valor) => {
    return valor * 3;
};
console.log(triploArrowFunc(10));
//e agora?
const ehPar = (n) => {
    n % 2 === 0;
};
console.log(ehPar(10));

//1.5 Vetores

//declaração
v1 = [];
//podemos acessar qualquer posição, começando de zero
v1[0] = 3.4;
v1[10] = 2;
v1[2] = "abc"
//aqui, v1 tem comprimento igual a 11
console.log(v1.length)
//inicializando na declaração
v2 = [2, "abc", true]
console.log(v2)
//iterando
for (let i = 0; i < v2.length; i++){
console.log(v2[i])
}

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);
const res = nomes.map((nome) => nome.charAt(0));
console.log(res);
const todosComecamComA = nomes.every((n) =>
n.startsWith("A"));
console.log(todosComecamComA);
const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma);

//1.4 Comparação

console.log(1 == 1)//true
console.log (1 == "1") //true
console.log (1 === 1) //true
console.log (1 === "1")//false
console.log (true == 1) //true
console.log (1 == [1])//true
console.log (null == null)//true
console.log (null == undefined)//true
console.log([] == false)//true
console.log ([] == [])//false

//1.3 Coerção

const n1 = 2;
const n2 = '3';
//coerção implícita de n1, concatenação acontece
const n3 = n1 + n2;
console.log(n3);
//coeração explícita, soma acontece
const n4 = n1 + Number (n2)
console.log(n4)

//1.1 Declaração de variáveis e constantes

//declarando constantes
const nome = "Jose";
const idade = 27;
// aspas simples e duplas têm o mesmo efeito
const sexo = "M";
const endereco = 'Rua K, 12'
//declarando variáveis
//let: variável local com escopo de bloco
let a = 2;
let b = "abc";
//var: seu escopo é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd"

var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);
//nome pode ser redeclarada
var linguagem = "Java";
console.log("Aprendendo, " + linguagem);
//escopo não restrito a bloco
var idadeVar = 18;
/* exibe undefined. Ou seja, a variável já existe aqui, 
só não teve valor atribuído.
Ela é içada - do inglês hoist - para fora do bloco if */
console.log(`Oi, ${nome}`);
if (idade >= 18) {
var nomeVar = "João";
console.log(`Parabéns, ${nome}. Você pode dirigir`);
}
//ainda existe aqui
console.log(`Até mais, ${nome}.`);

