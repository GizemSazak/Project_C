const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const cors = require('cors');
const Password = require("node-php-password");
const session = require('express-session');
const expressValidator = require('express-validator');
var hash = Password.hash("password123");
const PORT = 3001;
var customId = require("custom-id");
const cookiesMiddleware = require('universal-cookie-express');
customId({});

const pool = new pg.Pool({
    // Connect to database
    host: "salt.db.elephantsql.com",
    database: "cligxofj",
    user: "cligxofj",
    password: "7Sd8bkKwIsoLk_Lq-89ndnYnffkfTxuE"
});

const app = express();
app.use(expressValidator())
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
    pool.connect((err, db, done) => {
        //Check if there is already the same email in database 
        db.query("SELECT COUNT(*) AS cnt FROM registratie WHERE email = $1", [email], function (err, data) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                if (data.rows > 0) {
                    console.log("Email Already exist ");
                } else {
                    var teamcode = customId({}); //Teamecode is unique random number

                    /*If there is no error and the email is not already exist in the database. It will hashing the password. 
                    Also it will check the body of the fields if all fields is filled, the password length is more the 4 and
                    it contains uppercase and special character. Then it will add the user to the database. Otherwise it will gave an alert message for the user.
                     */
                    try {
                        hash = Password.hash(password);
                        db.query("INSERT INTO registratie (email, password, firstname, lastname, teamcode) VALUES($1, $2, $3, $4,$5)", [email, hash, firstname, lastname, teamcode], function (err, insert) {
                            if (err) {
                                var redir = { redirect: '/registreren' };
                                return res.json(redir);
                            } else if (
                                req.checkBody("email", "Emial field can not be empty.").notEmpty() &&
                                req.checkBody('firstname', "firstname field can not be empty.").notEmpty() &&
                                req.checkBody('lastname', "lastname field can not be empty.").notEmpty() &&
                                req.checkBody('password', "password field can not be empty.").notEmpty() &&
                                req.checkBody('password', "password must be between 4-100 characters lnog please try agin.").len(4, 100) &&
                                req.checkBody('password', "password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d.@)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i")) {
                                console.log("INSERTED DATA SUCCESS");
                                redir = { redirect: "/" };
                                return res.json(redir);
                            }
                            else {
                                console.log("INSERTED DATA NOT SUCCESSED>>>");
                                redir = { redirect: '/registreren' };
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
        done();
    });

});
//Update gegevens
app.put('/api/registratie', (req, res, next) => {
    console.log(req.body);
    const id = req.body.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const oudewachtwoord = req.body.oudewachtwoord;
    const password = req.body.password;
    hash = Password.hash(password);
    pool.connect((err, db, done) => {
        if (err) {
            console.log(err + 'eerste');
            return res.status(400).send(err);
        }
        else {
            //Updating first and lastname
            try {
                db.query(
                    'UPDATE registratie SET firstname = $2 , lastname = $3 where id = $1',
                    [id, firstname, lastname],
                    err => {
                        if (err) {
                            console.log(err + 'tweede');
                            return res.status(400).send(err);
                        }
                    }
                );
            }
            catch (err) {
                console.log("NOT UPDATED REGISTRATIE");
            }
        }

        next();
        //Check if the password that the user is filled is equal to the old password if it is true then it will update the password.
        try {
            if (global.password === oudewachtwoord) {
                db.query(
                    'UPDATE registratie SET password = $2 where id = $1',
                    [id, hash],
                    err => {
                        if (err) {
                            console.log(err + 'tweede');
                            return res.status(400).send(err);
                        }
                        console.log('Update Password SUCCESS');
                    }

                );
            }
            else {
                console.log('Update Password NOT SUCCESSED');
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
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    if (err) {
                        return res.status(400).send(err);
                    }
                    try {
                        /*Check if password is equal to the password that we have in registration table.
                          Check if the id from the session if it is equal to the id that we have in registration table.
                          Check if the email from the session if it is equal to the email that we have in registration table.
                        */
                        if (Password.verify(password, table.rows[0].password)) {
                            req.session.id = table.rows[0].id;
                            req.session.email = table.rows[0].email;
                            console.log("Login successed");
                            console.log(req.session.email);
                            var redir = { redirect: "/" }; //redirect the user to home page.
                            req.session.save(function (err) {
                                // session saved
                            })
                            return res.json(redir);
                        }
                    } catch (err) {
                        console.log("Login not successed")
                        redir = { redirect: '/login' }; //If the log in not successed keep the user in login page.
                        return res.json(redir);
                    }

                }
                return res.status(200).send(table.rows);
            }
        );
        done();
    });

});

//Speler login
app.post("/api/loginspeler", (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        const teamcode = req.body.teamcode;
        global.teamcode = req.body.teamcode
        // const password = req.body.password;
        console.log(teamcode);

        db.query(
            "SELECT * from registratie where teamcode = $1", [teamcode],
            (err, table) => {
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    if (err) {
                        return res.status(400).send(err);
                    }
                    try {
                        //If the filled in teamcode is equal to the team code that we have in our database.
                        if (teamcode === table.rows[0].teamcode) {
                            req.session.id = table.rows[0].id; //Check if the id from the session if it is equal to the id that we have in registration table.
                            req.session.teamcode = table.rows[0].teamcode; //Check if the teamcode from the session if it is equal to the teamcode that we have in registration table.
                            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; //Cookie expires after 30 days
                            console.log("Speler Login successed");
                            console.log(req.session.teamcode);
                            var redir = { redirect: "/" }; //If the log in successed send the user to Home page.
                            return res.json(redir);
                        }
                    } catch (err) {
                        console.log("Speler Login not successed")
                        redir = { redirect: '/LoginSpeler' }; //If the log in not successed keep the user in LoginSpeler page.
                        return res.json(redir);
                    }
                }
                return res.status(200).send(table.rows);
            }
        );
        done();
    });

});

//Get teamcode for the tranier
app.get('/api/registratie/teamcode', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query(
            "SELECT teamcode from registratie where email = $1 or teamcode = $2", [global.email, global.teamcode],
            (err, table) => {
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
        done();
    });
});

//Get registratie
app.get('/api/registratie', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query(
            "SELECT * from registratie where email = $1 or teamcode = $2", [global.email, global.teamcode],
            (err, table) => {
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
        done();
    });
});

// Posting teamcode
app.post("/api/teamcode", (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        global.teamcode = req.body.teamcode;
        done();
    });
});

app.put('/api/aanwezigheidnewlist', (req, res) => {
    console.log(req.body);
    const datum = req.body.datum;

    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query(
            'INSERT INTO aanwezigheid(speler_id,datum) select id,$2 from speler where speler.teamcode=$1', [global.teamcode, datum],
            err => {
                if (err) {
                    console.log(err + 'tweede');
                    return res.status(400).send(err);
                }
                console.log('INSERTED DATA SUCCESS');
                res.status(201).send({ message: 'Data inserted!' });
            }
        );
        done();
    });
});

app.put('/api/aanwezigheid', (req, res) => {
    console.log(req.body);
    const datum = req.body.datum;
    const aanwezig = req.body.aanwezig;
    const speler_id = req.body.speler_id;

    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query(
            'UPDATE aanwezigheid SET aanwezig=$2, teamcode=$4 where speler_id=$3 and datum=$1', [datum, aanwezig, speler_id, global.teamcode],
            err => {
                if (err) {
                    console.log(err + 'tweede');
                    return res.status(400).send(err);
                }
                console.log('INSERTED DATA SUCCESS');
                res.status(201).send({ message: 'Data inserted!' });
            }
        );
        done();
    });
});

// Aanwezigheid right join speler on speler_id=id
app.get('/api/aanwezigheid', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from aanwezigheid left join speler on id=speler_id where speler.teamcode = $1 order by speler.voornaam', [global.teamcode], (err, table) => {
            // If err is True than send err else send table.rows
            err ? res.status(400).send(err) : res.status(200).send(table.rows)
        });
        done();
    });

});

//Get spelers
app.get('/api/speleraanwezigheid', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from speler left join aanwezigheid on id=speler_id where speler.teamcode = $1', [global.teamcode], (err, table) => {
            // If err is True than send err else send table.rows
            err ? res.status(400).send(err) : res.status(200).send(table.rows)
        });
        done();
    });

});


//Get spelers
app.get('/api/speler', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) { return res.status(400).send(err); }

        db.query('SELECT * from speler where teamcode = $1', [global.teamcode], (err, table) => {
            // If err is True than send err else send table.rows
            err ? res.status(400).send(err) : res.status(200).send(table.rows)
        });
        done();
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
        done();
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
        done();
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
        //Inserting the values that the user has fillied in to notitie table in the database.
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
        done();
    });

});

// View Notitie
app.get('/api/notities', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query('SELECT * from notities where teamcode = $1 order by id DESC', [global.teamcode], (err, table) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
        });
        done();
    });

});

// Update Notitie
app.put('/api/notities', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const notitie = req.body.notitie;
    const titel = req.body.titel;
    pool.connect((err, db, done) => {
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
        done();
    });

});
// Delete Notities
app.delete('/api/notities', (req, res) => {
    console.log(req.body);
    const id = req.body.id;

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
        done();
    });

});
// View Wedstrijd
app.get('/api/wedstrijduitslag', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }

        db.query('SELECT * from wedstrijduitslag where teamcode = $1 order by id DESC', [global.teamcode], (err, table) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
        });
        done();
    });

});
// Delete Wedstrijd
app.delete('/api/wedstrijduitslag', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
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
        done();
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
        done();
    });

});
// Update Wedstrijd
app.put('/api/wedstrijduitslag', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const verslag = req.body.verslag;
    pool.connect((err, db, done) => {
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
        done();
    });

});

// View Oefeningen
app.get('/api/oefeningen', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }

        db.query('SELECT * from oefeningen order by id ASC', (err, table) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
        });
        done();
    });

});

// View Agenda
app.get('/api/agenda', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            return res.status(400).send(err);
        }
        db.query('SELECT * from agenda where teamcode = $1 order by id DESC', [global.teamcode], (err, table) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send(table.rows);
        });
        done();
    });

});
// Insert Agenda
app.post('/api/agenda', (req, res) => {
    console.log(req.body);
    const beschrijving = req.body.beschrijving;
    const starttijd = req.body.starttijd;
    const eindtijd = req.body.eindtijd;
    const dag = req.body.dag;

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
        done();
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
        done();
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
        done();
    });

});



app.listen(PORT, () => console.log('Listening on port ' + PORT));


// link used:
// http://zetcode.com/javascript/nodepostgres/