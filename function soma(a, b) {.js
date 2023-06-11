function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function resto(a, b) {
    return a % b;
}

function subtracao(a, b) {
    return a - b;
}

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
});


app.post('/soma', function(req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtracao', function(req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);

    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/multiplicacao', function(req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);

    res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/divisao', function(req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);

    res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/resto', function(req, res) {
    var body = req.body;
    var resultado = resto(body.a, body.b);

    res.send(`O resultado do resto de ${body.a} e ${body.b} é ${resultado}`);
});


var port = 8888;

// iniciando o processo do servidor
app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});