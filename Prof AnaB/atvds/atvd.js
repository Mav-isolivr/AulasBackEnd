//Functions Tradicionais
function adicionar(a, b){
    return a + '-' + b //Ana -Beatriz
}

//Funçoes Anonimas
let saudacao = function (){
    console.log("Oi pessoal")
}

concatenacaoPalavras("Vitor", "Moreira");
saudacao();


//Arrow Functions
const saudacao1 = () =>{
    console.log("Oi pessoal")
}


function somar (a,b){
    return a+b;
}


//É equivalente a essa funcao arrow function
const somar = (a,b) => a+b;

//Diferença do this. entre arrow functions e funções tradicionais
//Arrow function NÃO POSSO UTILIZAR O THIS
//FUNÇÃO NORMAL POSSO UTILIZAR O THIS
const obj = {
    nome: "Ana",
    idade: 15,
    saudacao: () =>{
        console.log("Oi"+ this.name)//erro
        //Equivalente a
        console.log("Oi" + obj.nome)
    }
}

//função callback
function executar (funcaoCallBack){
    console.log("Antes");
    funcaoCallBack();
    console.log("Depois");
}
executar(()=>console.log("Executando!"))

//Resultado do código
//Antes
//Executando
//Depois

//Função Sícrona
function sicrona(){
    console.log("Vai executar essa linha primeiro");
    console.log("Depois essa linha");
    console.log("E depois essa linha");
}
sicrona();

function teste(){
    console.log("a");
    setTimeout(()=> {
        console.log("b");
    }, 2000);
    console.log("c");
}
teste();


//Funções que retornam OUTRAS FUNÇÕES

//Função1
function saudacao(nome) {
    //Função2
    return function (){
        console.log(`${mensagem}, ${nome}`);
    }
}

const msgParaLuzia = saudacao("Luzia");//função 1
msgParaLuzia("fala comigo"); //funcão 2



//Funções Assícronas

function esperar(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log('Demorou, mas chegou');
        }, 5000);
    })
}



//Toda vez que eu fizer uma função assicrona
//Eu preciso utilizar o await
async function executar (){
    console.log('Esperando...');
    const resultado = await esperar() //ESPERA A PROMISE FINALIZAR COM SUCESSO OU FALHA
    console.log(resultado);
}

executar();

//Resultado desse codigo
//Esperando....
//Depois de 5 seg...................................
//Demorou mas chegou
//



let carro = {
    nome: "Honda Civic da Ana Beatriz",
    marca: "Honda",
    modelo: "Civic",
    ano: 2025,
    atrobitos: ["som", "camera re", "teto solar", "antena"]
}

console.log(carro.ano) //2025
console.log(carro.atributos[2])

//ADD
carro.cor = "Preto com Vermelho";

//Alterar
carro.nome = "Honda "