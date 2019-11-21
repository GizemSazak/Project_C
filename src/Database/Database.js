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

        db.query('SELECT * from wedstrijduitslag order by id DESC', (err, table) => {
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

app.delete('/api/wedstrijduitslag', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const values = [id];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query('DELETE FROM wedstrijduitslag WHERE id = $1',[id], err => {
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

app.post('/api/wedstrijduitslag', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const thuis = req.body.thuis;
    const uit = req.body.uit;
    const stand = req.body.stand;
    const verslag = req.body.verslag;

    const values = [id, thuis, uit, stand, verslag];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'INSERT INTO wedstrijduitslag (id, thuis, uit, stand, verslag) VALUES($1, $2, $3, $4, $5)',
            [id,thuis,stand,uit,verslag],
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

app.put('/api/wedstrijduitslag', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const verslag = req.body.verslag;
    pool.connect((err, db, done) => {
        done();
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'UPDATE wedstrijduitslag SET verslag = $2 WHERE id = $1',
            [id,verslag],
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


app.listen(PORT, () => console.log('Listening on port ' + PORT));




// link used:
// http://zetcode.com/javascript/nodepostgres/