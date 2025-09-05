const express = require('express')

let task = [
    { id:1, tittle: "Estudar Apis", done: false},
    { id:2, tittle: "Praticar Criação de Apis", done: true},
]


// Regras de negocio:
// o titulo é obrigatorio
// Npode haver título duplicado
// Só é possivel concluir uma tarefa se ela existir
// N é permitido atualizar ou excluir uma tarefa inexistente
// N é possivel excluir uma tarefa concluida

const getAll =() => task

const getById = (id) => {
    const task= task.find(t => t.id === id)
    if(!task) throw {status: 404, message: "Tarefa não encontrada"}
}

module.exports = {getAll, getById}