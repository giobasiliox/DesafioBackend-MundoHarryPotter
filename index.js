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
    password: '811867', //mudar a senha para ds564 ou 811867
    port: 5432, //mudar a porta para 7007 ou 5432   
});


//mudar nome da tabela para bruxos
//mudar nome da tabela para varinhas
//mudar nome da coluna para comprimento


app.post('/bruxo', async (req, res) => {
    try {
        const { nome, idade, casahogwarts, habilidades, status_sangue, patrono } = req.body;


        let casasValidas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
        let statusValidos = ['Puro', 'Mestiço', 'Trouxa'];

        if (!casasValidas.includes(casahogwarts)) {
            return res.status(400).send({ mensagem: 'A Casa em Hogwarts deve ser válida: Grifinória, Sonserina, Corvinal, Lufa-Lufa. Escreva novamente corretamente.' });
        } else if (!statusValidos.includes(status_sangue)) {
            return res.status(400).send({ mensagem: 'O Status de Sangue deve ser válido: Puro, Mestiço, Trouxa. Escreva novamente corretamente.  ' });
        }
        else {
            await pool.query('INSERT INTO bruxo (nome, idade, casahogwarts, habilidades, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [nome, idade, casahogwarts, habilidades, status_sangue, patrono]);
            res.status(201).send({ mensagem: 'Bruxo adicionada com sucesso 🧙🏻!' });
        }

    } catch (error) {
        console.error('Erro ao adicionar bruxo:', error);
        res.status(500).send('Erro ao adicionar bruxo');
    }
});

app.get('/bruxo', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM bruxo');
        res.json({
            total: result.rowCount,
            bruxos: result.rows,
        });
    } catch (error) {
        console.error('Erro ao buscar bruxos:', error);
        res.status(500).send('Erro ao buscar bruxos');
    }
});

app.get('/bruxo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM bruxo WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: 'Bruxo não encontrado' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Erro ao obter bruxo por ID:', error);
        res.status(500).send('Erro ao obter bruxo por ID');
    }
});

app.get('/bruxo/nome/:nome', async (req, res) => {
    try {
        const { nome } = req.params;
        const result = await pool.query('SELECT * FROM bruxo WHERE nome = $1', [nome]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: 'Bruxo não encontrado' });
        } else {
            res.json(result.rows[0]);
            console.log('Resultados da consulta:', result.rows);

        }
    } catch (error) {
        console.error('Erro ao obter bruxo por nome:', error);
        res.status(500).send('Erro ao obter bruxo por nome');
    }
});


app.put('/bruxo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, idade, casahogwarts, habilidades, status_sangue, patrono } = req.body;

        let casasValidas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
        let statusValidos = ['Puro', 'Mestiço', 'Trouxa'];

        if (!casasValidas.includes(casahogwarts)) {
            return res.status(400).send({ mensagem: 'A Casa em Hogwarts deve ser válida: Grifinória, Sonserina, Corvinal, Lufa-Lufa. Escreva novamente corretamente.' });
        } else if (!statusValidos.includes(status_sangue)) {
            return res.status(400).send({ mensagem: 'O Status de Sangue deve ser válido: Puro, Mestiço, Trouxa. Escreva novamente corretamente.  ' });
        }
        else {
            await pool.query('UPDATE bruxo SET nome = $1, idade = $2, casahogwarts = $3, habilidades = $4, status_sangue = $5, patrono = $6 WHERE id = $7 RETURNING *', [nome, idade, casahogwarts, habilidades, status_sangue, patrono, id]);
            res.status(200).send({ mensagem: 'Bruxo atualizado com sucesso!' });
        }
    } catch (error) {
        console.error('Erro ao atualizar bruxo:', error);
        res.status(500).send('Erro ao atualizar bruxo');
    }
});

app.delete('/bruxo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM bruxo WHERE id = $1', [id]);
        res.status(200).send({ mensagem: 'Bruxo removido com sucesso!' });
    } catch (error) {
        console.error('Erro ao remover bruxo:', error);
        res.status(500).send('Erro ao remover bruxo');
    }
});





app.post('/varinha', async (req, res) => {
    try {
        const { material, compimento, nucleo, data_fabricacao } = req.body;
        await pool.query('INSERT INTO varinha (material, compimento, nucleo, data_fabricacao) VALUES ($1, $2, $3, $4) RETURNING *', [material, compimento, nucleo, data_fabricacao]);
        res.status(201).send({ mensagem: 'Varinha adicionada com sucesso 🪄!' });
    } catch (error) {
        console.error('Erro ao adicionar varinha:', error);
        res.status(500).send('Erro ao adicionar varinha');
    }
});

app.get('/varinha', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM varinha');
        res.json({
            total: result.rowCount,
            varinhas: result.rows,
        });
    } catch (error) {
        console.error('Erro ao buscar varinha:', error);
        res.status(500).send('Erro ao buscar varinha');
    }
})

app.get('/varinha/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM varinha WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: 'Varinha não encontrada' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Erro ao obter varinha por ID:', error);
        res.status(500).send('Erro ao obter varinha por ID');
    }
});

app.put('/varinha/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { material, compimento, nucleo, data_fabricacao } = req.body;
        await pool.query('UPDATE varinha SET material = $1, compimento = $2, nucleo = $3, data_fabricacao = $4 WHERE id = $5 RETURNING *', [material, compimento, nucleo, data_fabricacao, id]);
        res.status(200).send({ mensagem: 'Varinha atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar varinha:', error);
        res.status(500).send('Erro ao atualizar varinha');
    }
});

app.delete('/varinha/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM varinha WHERE id = $1', [id]);
        res.status(200).send({ mensagem: 'Varinha removido com sucesso!' });
    } catch (error) {
        console.error('Erro ao remover varinha:', error);
        res.status(500).send('Erro ao remover varinha');
    }
});




app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT} 🦉🚀');
});