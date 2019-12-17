const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const cors = require('cors');
const PORT = 3001;

const pool = new pg.Pool({
    // Connect to database
    host: "salt.db.elephantsql.com",
    database: "cligxofj",
    user: "cligxofj",
    password: "MMdvlDXsE73zeBxtbKvigi5ALP6_pRVo"
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/api/aanwezigheid', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from aanwezigheid right join speler on speler_id=id', (err, table) => {
            done();

            // If err is True than send err else send table.rows
            err ? res.status(400).send(err) : res.status(200).send(table.rows)
        });
    });
});

app.post('/api/aanwezigheid', (req, res) => {
    console.log(req.body);
    const datum = req.body.datum;
    const aanwezig = req.body.aanwezig;
    const speler_id = req.body.speler_id;

    const values = [datum, aanwezig, speler_id];

    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query(
            'INSERT INTO aanwezigheid (datum, aanwezig, speler_id) VALUES($1, $2, $3)', [datum,aanwezig,speler_id],
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

app.get('/api/speler', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from speler', (err, table) => {
            done();

            // If err is True than send err else send table.rows
            err ? res.status(400).send(err) : res.status(200).send(table.rows)
        });
    });
});

app.post('/api/speler', (req, res) => {
    console.log(req.body);
    const spelernummer = req.body.spelernummer;
    const voornaam = req.body.voornaam;
    const achternaam = req.body.achternaam;
    const email = req.body.email;

    const values = [spelernummer, voornaam, achternaam, email];

    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query(
            'INSERT INTO speler (spelernummer, voornaam, achternaam, email) VALUES($1, $2, $3, $4)', [...values],
            err => {
                if (err) { return res.status(400).send(err); }
                console.log('INSERTED DATA SUCCESS');
            }
        );
        
        res.status(200).send({ message: 'Data inserted!' });
        // return res.status(200).send(table.rows);
    });
});

app.delete('/api/speler', (req, res) => {
    console.log(req.body);
    const voornaam = req.body.voornaam;
    const achternaam = req.body.achternaam;

    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('DELETE FROM speler WHERE voornaam = $1 AND achternaam = $2', [voornaam, achternaam], err => {
            if (err) { return res.status(400).send(err); }

            console.log('Delete DATA SUCCESS');
            res.status(201).send({ message: 'Data deleted!' });
        }
        );
    });
});

// View Notitie
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
// Insert Notitie
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
            [titel, notitie],
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
// Update Notitie
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
            [id, titel, notitie],
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
// Delete Notities
app.delete('/api/notities', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const values = [id];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query('DELETE FROM notities WHERE id = $1', [id], err => {
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
// View Wedstrijd
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
// Delete Wedstrijd
app.delete('/api/wedstrijduitslag', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const values = [id];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query('DELETE FROM wedstrijduitslag WHERE id = $1', [id], err => {
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
// Insert Wedstrijd
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
            [id, thuis, uit, stand, verslag],
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
// Update Wedstrijd
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
            [id, verslag],
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