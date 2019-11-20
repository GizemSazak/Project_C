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

app.get('/api/speler', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }

        db.query('SELECT * from speler', (err, table) => {
            done();
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
            console.log(table.rows)
        });
    });
});
app.get('/api/notities', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query('SELECT * from notities order by id DESC', (err, table) => {
            done();
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
            console.log(table.rows)
        });
    });
});

app.post('/api/notities', (req, res) => {
    console.log(req.body);
    const titel = req.body.titel;
    const notitie = req.body.notitie;
    const values = [titel, notitie];
    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'INSERT INTO notities (titel, notitie) VALUES($1, $2)',
            [titel,notitie],
            err => {
                if (err) {
                    console.log(err + 'tweede');
                    return res.status(400).send(err);
                }

                console.log('INSERTED DATA SUCCESS');

                res.status(201).send({ message: 'Data inserted!' });
            }
        );
    });
});
app.put('/api/notities', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const notitie = req.body.notitie;
    const titel = req.body.titel;
    pool.connect((err, db, done) => {
        done();
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'UPDATE notities SET titel = $2 , notitie = $3 WHERE id = $1',
            [id,titel,notitie],
            err => {
                if (err) {
                    console.log(err + 'tweede');
                    return res.status(400).send(err);
                }
                console.log('Update DATA SUCCESS');
                res.status(201).send({ message: 'Data updated!' });
            }
        );
    });
});
app.delete('/api/notities', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const values = [id];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query('DELETE FROM notities WHERE id = $1',[id], err => {
                if (err) {
                    console.log(err + 'tweede');
                    return res.status(400).send(err);
                }

                console.log('Delete DATA SUCCESS');
                console.log(id);

                res.status(201).send({ message: 'Data deleted!' });
            }
        );
    });
});
app.listen(PORT, () => console.log('Listening on port ' + PORT));



// link used:
// http://zetcode.com/javascript/nodepostgres/