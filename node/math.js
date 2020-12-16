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
app.use("/", router);

function checkResponseStatus(res) {
    if (res.ok) {
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}

const countIt = async () => {
    await fetch('http://127.0.0.1:3000/add')
        .then(checkResponseStatus)
        .then(res => res.json())
        .then(json => {
            console.log("fetchingstuff?")
            console.log(json)
        })
}

app.get('/', (req, res) => {
    res.send("intro math")
})

app.get('/add', (req, res) => {
    countIt()
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