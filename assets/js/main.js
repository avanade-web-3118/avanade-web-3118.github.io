//var nome; //hoisting - içar - puxar para cima.

//console.log(nome, "chamando a variavel usando o var");

//const nome = "Avanade";

/**
 * Exixtem 7 tipos de erros em JavaScript
 * ---------------------------------
 * SyntaxError - Escreveu alguma coisa errado.
 * ReferenceError - Chamou alguém que não existe.
 * TyError - Erro de tipo é uma violação do JavaScript
 * EvalError - Evite o uso do comando eval, mas se ele for inválido
 * RangeError - Erro de intervalos, loop infinito, ou chamadas inúmeras de recursividade
 * URIError - Erro referente a chamadas externas. Uniform Resource Identifier. httpwww.
 * InternalError - Erro interno do JavaScript, falta de memória, processador...
 */

//eval('console.log("Vai Corinthians!");');

escreve("Museu do Ipiranga");
//função nominal.
function escreve(x) {
    console.log(x);
}

function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Vai Corinthians!");

//expressão de função
//funçao anônima - que não tem nome.
const mudaTitulo2 = function(target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando subtítulo");

const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

//const exemplo = (x) => console.log(x);

//exemplo ("teste");

const frases = [
    "Um banco para 20 milhões de pessoas", 
    "C6 Bank o seu banco", 
    "Cartão de créditos sem anuidade"
];

// frases.forEach( => {
//     setInterval(() => {
//         mudaFrase(teste)
//     }, 2000)
// });

const mudaFrase = (target, frases, tempo)=> {
    let total = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = 
        frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
        console.log(total)
    }, tempo * 1000);
};
// "h1" - onde
// frases - array
// 4 - segundos

mudaFrase("h1", frases, 4);





