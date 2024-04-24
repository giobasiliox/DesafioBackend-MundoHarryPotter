const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({ mensagem: 'Servidor backend rodando com sucesso🚀' });
});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'desafiohp',
    password: 'ds564',
    port: 7007,
});

app.get('/bruxos', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM bruxo');
    res.status(200).send(rows);
},);

app.post('/bruxos', async (req, res) => {
    try {
        const { nome, idade, casahogwarts, habilidades, status_sangue, patrono } = req.body;

        
        let casasValidas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
        let statusValidos = ['Puro', 'Mestiço', 'Trouxa'];

        if (!casasValidas.includes(casahogwarts) ) {
            return res.status(400).send({ mensagem: 'A Casa em Hogwarts deve ser válida: Grifinória, Sonserina, Corvinal, Lufa-Lufa. Escreva novamente corretamente.' });
        } else if (!statusValidos.includes(status_sangue)) {
            return res.status(400).send({ mensagem: 'O Status de Sangue deve ser válido: Puro, Mestiço, Trouxa. Escreva novamente corretamente.  ' });
        }
        else{
        const { rows } = await pool.query('INSERT INTO bruxo (nome, idade, casahogwarts, habilidades, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [nome, idade, casahogwarts, habilidades, status_sangue, patrono]);
        res.status(201).send(rows[0]);
        }

    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(500).send('Erro ao adicionar bruxo');
    }
});









app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT} 🦉🚀');
});