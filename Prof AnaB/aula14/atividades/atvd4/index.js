import ContaBancaria from "./ContaBancaria.js";

let saldoInicial = 1000;
const objConta_bancaria = new ContaBancaria(saldoInicial);


objConta_bancaria.depositar(200);
let extrato = objConta_bancaria.getExtrato();
console.log("Meu saldo é:", extrato);

objConta_bancaria.sacar(50);

console.log("Meu saldo é:", objConta_bancaria.getExtrato());