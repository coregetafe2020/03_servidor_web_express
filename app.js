const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
})

app.get('/contacto', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/contacto.html');
})

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/pagina404.html');
})

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})


