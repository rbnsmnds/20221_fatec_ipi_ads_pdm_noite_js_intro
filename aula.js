
//3.2. O inferno de callbacks

const fs = require("fs");
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
/* crie um arquivo chamado arquivo.txt com o conteúdo
"2" (sem as aspas)
no mesmo diretório em que se encontra seu script */
abrirArquivo("arquivo.txt");

const reabrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
            const dobro = +conteudo.toString() * 2;
            const finalizar = function (erro){
                if(erro){
                    console.log('Deu erro tentando salvar o dobro')
                }
                else{
                    console.log("Salvou o dobro com sucesso");
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
reabrirArquivo("arquivo.txt");

//3.1 Modelo Single Threaded

console.log('Eu primeiro')
console.log("Agora eu")
console.log("Sempre vou ser a última...:(")

//Este pode ser um funcionamento desejável, quando...
const sum = 2 + 7
const num = 5
//só faz sentido se os valores a e b já estiverem disponíveis
console.log(sum + num)

function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const dConst = 8 + 4
    return dConst
}
const aConst = 2 + 3
const bConst = 5 + 9
const dConst = demorada()
/*o valor de e não depende do valor devolvido
pela função demorada.*/
const eConst = 2 + aConst + bConst
console.log(eConst)

const uConst = 4 + 5
const vConst = 7 + 11
/* função será executada depois de, pelo menos, 500
milissegundos */
setTimeout(function(){
    const wConst = demorada()
    console.log(wConst)
}, 500)
//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const xConst = uConst + vConst
console.log(xConst)

setTimeout(function(){
    console.log('dentro da timeout', 0)
})
const zConst = new Date().getTime() + 1000
//não esqueça do ;, única instrução no corpo do while
while (new Date().getTime() <= zConst);
console.log('fora da timeout')

function demorada(tempo) {
    console.log(`demorada ${tempo}`);
    const atualMaisTempo = new Date().getTime() + tempo;
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4;
    return d;
}
setTimeout(function (){demorada(2000)}, 2000);
setTimeout(function (){demorada(1000)}, 1000);
console.log("chegou ao fim do script principal");

//2.1 Representações JSON

//Uma pessoa se chama João e tem 17 anos.
let pessoa = {
    nome: "João",
    idade: 17,
}
//o acesso a propriedades pode ser feito com ponto
console.log("Me chamo " + pessoa.nome);
//e com [] também
console.log("Tenho " + pessoa["idade"] + " anos");

/*Uma pessoa se chama Maria, 
tem 21 anos e mora na rua B, número 121.*/
let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
    logradouro: "Rua B",
    numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade} anos
    e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
    número ${pessoaComEndereco["endereco"]["numero"]}`
);

/*Uma concessionária tem CNPJ e endereço. 
Ela possui alguns carros em estoque. 
Cada um deles tem marca, 
modelo e ana de fabricação.*/
let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};
for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação:
    ${veiculo.anoDeFabricacao}`);
}

/*Uma calculadora realiza 
as operações de soma e subtração.*/
let calculadora = {
    //pode ser arrow function
    soma: (a, b) => a + b,
    //e função comum também
    subtracao: function (a, b) {
        return a - b;
    },
};
console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);

//1.7 Closures

//uma função pode ser atribuída a uma variável
let umaFuncao = function () {
    console.log ("Fui armazenada em uma variável");
}
//e pode ser chamada assim
umaFuncao()
/*f recebe uma função como parâmetro e, por isso
é uma função de alta ordem.
Por devolver uma função, g também é de alta ordem.*/
function f (funcao) {
/*chamando a função,
note como a tipagem dinâmica tem seu preço*/
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
/*f chama g, que somente devolve uma função.
Nada é exibido.*/
f(g)
/*f chama a função devolvida por g.
"Fui criada por g" é exibido.*/
f(g())
/*f tenta chamar o que a função criada por g
devolve. Ela não devolve coisa alguma. Por isso,
um erro - somente em tempo de execução - acontece.*/
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
/*neste momento, a funcao eAgora já
executou por completo e a variável
cont já foi incrementada. Seu valor final
é mantido e, assim, ambas f1 e f2 exibirão 2.*/
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
//aspas simples e duplas têm o mesmo efeito
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
/*exibe undefined. Ou seja, a variável já existe aqui, 
só não teve valor atribuído.
Ela é içada - do inglês hoist - para fora do bloco if*/
console.log(`Oi, ${nome}`);
if (idade >= 18) {
var nomeVar = "João";
console.log(`Parabéns, ${nome}. Você pode dirigir`);
}
//ainda existe aqui
console.log(`Até mais, ${nome}.`);
