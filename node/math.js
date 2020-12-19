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

//anropa math-server för en beräkning och returnera svaret i JSON-format.
app.get('/', (req, res) => {
    let tal = ({ "tal": "10,343,2334,345,22,2233,233" })
    calculating = (tal.tal.split(",").map(ettTal => +ettTal));
    var sum = calculating.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
    res.send(`${sum}`)
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