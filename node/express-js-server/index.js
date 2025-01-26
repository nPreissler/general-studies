const express = require('express');
const server = express();

server.get('/hello', (req, res) => {
    const { text , number } = req.query;

    return res.json({
        title: '200',
        message: `msg ${text}` ,
        number: number
    });
});

server.get('/hello:name', (req, res) => {
const name = req.params.name;

    return res.json({
        title: '200',
        message: `msg ${text}`
    });
})

server.listen(3000);
