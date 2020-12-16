const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PeopleList = require('../frontend/people.json')

const app = express();
const router = express.Router();
const host = '127.0.0.1';
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("helooo")
})
app.get('/list', (req, res) => {
    console.log(PeopleList)
})

/*const FetchPpl = async () => {
    console.log(PeopleList)
      let promise = await fetch()
     return promise; */

app.post('/add', (req, res) => {
    let tal = ({ "tal": "10,343,2334,345,22,2233,233" })
    res.send(tal);
})

app.get('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED GET');
});
app.post('*', function (req, res) {
    res.status(404);
    res.send('NOT ALLOWED POST');
});

app.listen(port, host, () => {
    console.log(`Run at: http://${host}:${port}`);
});

module.exports = router;