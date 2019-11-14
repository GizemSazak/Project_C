const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const cors = require('cors');
const PORT = 3001;

const pool = new pg.Pool({
// Connect to database
    host:"salt.db.elephantsql.com",
    database:"cligxofj",
    user:"cligxofj",
    password:"MMdvlDXsE73zeBxtbKvigi5ALP6_pRVo"
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});



app.get('/api/wedstrijduitslag', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }

        db.query('SELECT * from wedstrijduitslag', (err, table) => {
            done();
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
            console.log(table.rows)
        });
    });
});


app.listen(PORT, () => console.log('Listening on port ' + PORT));



// link used:
// http://zetcode.com/javascript/nodepostgres/