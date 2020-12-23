const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PeopleList = require('../frontend/people.json')
const fetch = require('node-fetch');
const { text } = require('body-parser');
const { json } = require('express');
const app = express();
const router = express.Router();
const host = '127.0.0.1';
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("test")
})
//GET ska hämta en JSON fil och returnera den i JSON-format (prov-nodejs.json)
app.get('/list', (req, res) => {
    console.log(PeopleList)
})

const counting = async () => {
    let promise = await fetch('http://127.0.0.1:3002')
    return promise;
}

app.post('/talet', (req, res) => {
    counting()
        .then(res => res.json())
        .then(json => console.log(json))
        .then(data => res.send(data))
})
/* app.get('/talet', (req, res) => {
    counting()
        .then(res => res.json())
        .then(json => console.log(json))
        .then(datan => res.send(datan))
}) */

app.get('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED GET');
});
app.post('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED POST');
});
//API-serven ska kunna nås från en FETCH från web-appen
app.listen(port, host, () => {
    console.log(`Run at: http://${host}:${port}`);
});

module.exports = router;