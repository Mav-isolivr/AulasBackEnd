// Implemente uma classe ContaBancaria com saldo privado e métodos depositar e sacar que alteram o saldo.

class ContaBancaria{
    #saldo;

    constructor (saldoInicial){
        this.#saldo = saldoInicial;
    }

    //metodo depositar SET
    depositar(valor){
        if(valor > 0 )
        this.#saldo = this.#saldo + valor;
    }

    //metodo sacar SET
    sacar(valor){
        if(valor <= this.#saldo)
            this.#saldo = this.#saldo - valor;
    }

    getExtrato(){
        return this.#saldo;
    }
}
module.exports = ContaBancaria;