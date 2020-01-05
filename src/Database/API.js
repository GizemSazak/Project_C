const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const cors = require('cors');
const Password = require("node-php-password");
const session = require('express-session');
var hash = Password.hash("password123");
const PORT = 3001;
var customId = require("custom-id");
// const Cookies = require('universal-cookie');
var localStorage = require('localStorage')

// const cookies = new Cookies();
const cookiesMiddleware = require('universal-cookie-express');
customId({});

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
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboardssaacat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))
app.use(cookiesMiddleware())
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

//Registreren
app.post("/api/registratie", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    // const values = [email, password, firstname, lastname];
    pool.connect((err, db, done) => {
        db.query("SELECT COUNT(*) AS cnt FROM registratie WHERE email = $1", [email], function (err, data) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                if (data.rows > 0) {
                    console.log("Email Already exist ");
                    // Already exist 
                } else {
                    var teamcode = customId({});
                    // console.log(customId({}));
                    try {
                        hash = Password.hash(password);
                        db.query("INSERT INTO registratie (email, password, firstname, lastname, teamcode) VALUES($1, $2, $3, $4,$5)", [email, hash, firstname, lastname, teamcode], function (err, insert) {
                            if (err) {
                                return res.status(400).send(err);
                            } else {
                                console.log("INSERTED DATA SUCCESS");
                                var redir = { redirect: "/" };
                                return res.json(redir);
                            }
                        })
                    }
                    catch (err) {
                        console.log("INSERTED DATA NOT SUCCESSED");
                        var redir = { redirect: '/registreren' };
                        return res.json(redir);
                    }
                }
            }
        });
    });

});
//Update gegevens
app.put('/api/registratie', (req, res,next) => {
    console.log(req.body);
    const id = req.body.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const oudewachtwoord = req.body.oudewachtwoord;
    const password = req.body.password;
    hash = Password.hash(password);
    pool.connect((err, db, done) => {
        done();
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }
        else{
        try {
          db.query(
                'UPDATE registratie SET firstname = $2 , lastname = $3 where id = $1',
                [id, firstname, lastname],
                err => {
                    if (err) {
                        console.log(err + 'tweede');
                        return res.status(400).send(err);
                    }
                    console.log('Update DATA SUCCESS');
                }

            );

        }
        catch (err) {
            console.log("NOT UPDATED REGISTRATIE");
        }
    }
            next();
            try {
                if(global.password == oudewachtwoord ){
                db.query(
                    'UPDATE registratie SET password = $2 where id = $1',
                    [id, hash],
                    err => {
                        if (err) {
                            console.log(err + 'tweede');
                            return res.status(400).send(err);
                        }
                        console.log('Update Password SUCCESS');
                        // res.status(201).send({ message: 'Data updated!' });
                    }
        
                );
            }
            else{
                console.log('Update Password NOT SUCCESSED')
            }
        }
            catch (err) {
                console.log("PASSWORD UPDATE ERROR");
            }
    });

});
//Inloggen
app.post("/api/login", (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        const email = req.body.email;
        global.email = req.body.email;
        const password = req.body.password;
        global.password = req.body.password;
        console.log(email);

        db.query(
            "SELECT * from registratie where email = $1", [email],
            (err, table) => {
                done();
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    if (err) {
                        return res.status(400).send(err);
                    }
                    try {
                        if (Password.verify(password, table.rows[0].password)) {
                            // window.localStorage.setItem('myData', 'My data');
                            req.session.id = table.rows[0].id;
                            req.session.email = table.rows[0].email;
                            console.log("Login successed");
                            console.log(req.session.email);
                            var redir = { redirect: "/" };
                            req.session.save(function (err) {
                                // session saved
                            })
                            return res.json(redir);
                        }
                    } catch (err) {
                        console.log("Login not successed")
                        redir = { redirect: '/login' };
                        return res.json(redir);
                    }

                }

                return res.status(200).send(table.rows);
            }
        );
    });

});
//Get teamcode for the tranier
app.get('/api/registratie/teamcode', (req, res) => {
    pool.connect((err, db, done) => {
        db.query(
            "SELECT teamcode from registratie where email = $1", [global.email],
            (err, table) => {
                done();
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    if (err) {
                        return res.status(400).send(err);
                    }

                }

                return res.status(200).send(table.rows);
            }
        );
    });
});

//Get registratie
app.get('/api/registratie', (req, res) => {
    pool.connect((err, db, done) => {
        db.query(
            "SELECT * from registratie where email = $1", [global.email],
            (err, table) => {
                done();
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    if (err) {
                        return res.status(400).send(err);
                    }

                }

                return res.status(200).send(table.rows);
            }
        );
    });
});

// teamcode
app.post("/api/teamcode", (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        const teamcode = req.body.teamcode;
        global.teamcode = req.body.teamcode;

    });
});

// Aanwezigheid
app.get('/api/aanwezigheid', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from aanwezigheid right join speler on speler_id=id where speler.teamcode = $1',[global.teamcode], (err, table) => {
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
            'INSERT INTO aanwezigheid (datum, aanwezig, speler_id, teamcode) VALUES($1, $2, $3, $4)', [datum, aanwezig, speler_id, global.teamcode],
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

//Get spelers
app.get('/api/speler', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from speler where teamcode = $1', [global.teamcode], (err, table) => {
            done();

            // If err is True than send err else send table.rows
            err ? res.status(400).send(err) : res.status(200).send(table.rows)
        });
    });

});

//Speler login
app.post("/api/loginspeler", (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        const teamcode = req.body.teamcode;
        // const password = req.body.password;
        console.log(teamcode);

        db.query(
            "SELECT * from registratie where teamcode = $1", [teamcode],
            (err, table) => {
                done();
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    if (err) {
                        return res.status(400).send(err);
                    }
                    try {
                        if (teamcode === table.rows[0].teamcode) {
                            req.session.id = table.rows[0].id;
                            req.session.teamcode = table.rows[0].teamcode;
                            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
                            console.log("Speler Login successed");
                            console.log(req.session.teamcode);
                            var redir = { redirect: "/" };
                            return res.json(redir);
                        }
                    } catch (err) {
                        console.log("Speler Login not successed")
                        redir = { redirect: '/LoginSpeler' };
                        return res.json(redir);
                    }
                }

                return res.status(200).send(table.rows);
            }
        );
    });

});

app.post('/api/speler', (req, res) => {
    console.log(req.body);
    const spelernummer = req.body.spelernummer;
    const voornaam = req.body.voornaam;
    const achternaam = req.body.achternaam;
    const email = req.body.email;

    const values = [spelernummer, voornaam, achternaam, email, global.teamcode];

    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query(
            'INSERT INTO speler (spelernummer, voornaam, achternaam, email, teamcode) VALUES($1, $2, $3, $4, $5)', [...values],
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



// Insert Notitie
app.post('/api/notities', (req, res) => {
    console.log(req.body);
    const titel = req.body.titel;
    const notitie = req.body.notitie;

    const values = [titel, notitie, global.teamcode];
    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'INSERT INTO notities (titel, notitie, teamcode) VALUES($1, $2, $3)',
            [...values],
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

// View Notitie
app.get('/api/notities', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query('SELECT * from notities where teamcode = $1 order by id DESC', [global.teamcode], (err, table) => {
            done();
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
        });
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

        db.query('SELECT * from wedstrijduitslag where teamcode = $1 order by id DESC', [global.teamcode], (err, table) => {
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
    const week = req.body.week;
    const thuis = req.body.thuis;
    const uit = req.body.uit;
    const stand = req.body.stand;
    const verslag = req.body.verslag;

    const values = [week, thuis, uit, stand, verslag, global.teamcode];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'INSERT INTO wedstrijduitslag (week, thuis, uit, stand, verslag, teamcode) VALUES($1, $2, $3, $4, $5, $6)',
            [...values],
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

// View Oefeningen
app.get('/api/oefeningen', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }

        db.query('SELECT * from oefeningen order by id ASC', (err, table) => {
            done();
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
            console.log(table.rows)
        });
    });

});

// View Agenda
app.get('/api/agenda', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query('SELECT * from agenda where teamcode = $1 order by id DESC', [global.teamcode], (err, table) => {
            done();
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
            console.log(table.rows)
        });
    });

});
// Insert Agenda
app.post('/api/agenda', (req, res) => {
    console.log(req.body);
    const beschrijving = req.body.beschrijving;
    const starttijd = req.body.starttijd;
    const eindtijd = req.body.eindtijd;
    const dag = req.body.dag;

    const values = [beschrijving, starttijd, eindtijd, dag, global.teamcode];

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'INSERT INTO agenda (beschrijving, starttijd, eindtijd, dag, teamcode) VALUES($1, $2, $3, $4, $5)',
            [beschrijving, starttijd, eindtijd, dag, global.teamcode],
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

// Update Agenda
app.put('/api/Agenda', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const dag = req.body.dag;
    const starttijd = req.body.starttijd;
    const eindtijd = req.body.eindtijd;
    const beschrijving = req.body.beschrijving;
    pool.connect((err, db, done) => {
        done();
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query(
            'UPDATE agenda SET dag = $2,  starttijd = $3,  eindtijd = $4,  beschrijving = $5 WHERE id = $1',
            [id, dag, starttijd, eindtijd, beschrijving],
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

// Delete agenda
app.delete('/api/agenda', (req, res) => {
    console.log(req.body);
    const id = req.body.id;

    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }

        db.query('DELETE FROM agenda WHERE id = $1',
            [id], err => {
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