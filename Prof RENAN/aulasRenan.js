//OPERADORES SPRAD COM OB 
//EX

const dadosAdicionais = {
    rua: "Bertolo Simao Oliveira",
    numero: 23
}

const pessoas = {
    name: Iasmin,
    idade: 29,
    ...dadosAdicionais
}

console.log(pessoa)
//PODE SER UTILIZADO PARA DESTRUTURAR ARRAYS E OBJETOS

//EX SEM SPREAD
//  const dadosAdicionais = {
//       rua: "Bertolo Simao Oliveira",
//       numero: 23
//  }
// 
//  const pessoa = {
//      name: Iasmin,
//      idade: 29,
//      rua: dadosAdicionais.rua
//      numero: dadosAdicionais.numero
//  }
// console.log(pessoa)