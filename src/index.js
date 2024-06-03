const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());

// modelo de escrita convencional de função 
// function nome(nome) {
//     return function sobrenome(sobrenome) {
//         console.log(nome, sobrenome);
//     }
// }

// modelo de escrtita Arrow function
// const nome = nome => {
//     const sobrenome = sobrenome => {
//         console.log(nome, sobrenome);
//     }
//     return sobrenome
// }

// modelo de escrtita Arrow function simplificada
const nome = nome => sobrenome = sobrenome => {
    console.log(nome, sobrenome);
}

nome('Jéssica')('Gleizer')

app.use(rotas)

app.listen(3000);