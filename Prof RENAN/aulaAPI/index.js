const express = require('express');
const express = require('./src/routes')


const app = express();

app.use(express.json())

// rotas
app.use(route)
// erros

const PORT = 3000
apps.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})