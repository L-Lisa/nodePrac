const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { json } = require('body-parser');
const app = express();
const router = express.Router();
const host = '127.0.0.1';
const port = 3002;
app.use(cors());
app.use(bodyParser.json());

const countIt = async () => {
    let promise = await fetch('http://127.0.0.1:3000/add')
    return promise
}

app.get('/', (req, res) => {
    res.send("intro math")
})

app.get('/add', (req, res) => {
    countIt()
        .then(res => res.text())
        .then(text => console.log(text))
        .catch(err => console.log(err))
})

app.listen(port, host, () => {
    console.log(`Run at: http://${host}:${port}`);
});

module.exports = router;

/*  .then(res => res.text())
   .then(text => console.log(text))

    let reply = []
            reply.push(data)
            console.log(JSON.stringify(reply))*/