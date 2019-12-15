const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const pg = require("pg");
const cors = require("cors");
const PORT = 3001;
const saltRounds = 10;
const bcrypt = require('bcrypt');
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

app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/api/registratie", (req, res) => {
  pool.connect((err, db, done) => {
    if (err) {
      return res.status(400).send(err);
    }

    db.query(
      "SELECT * from registratie",
      (err, table) => {
        done();
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(200).send(table.rows);
        console.log(table.rows);
      }
    );
  });
});


app.post("/api/registratie", (req, res) => {
    //   // Ik heb teamcode voor nu weggehaald
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    // const values = [email, password, firstname, lastname];
    pool.connect((err, db, done) => {
        db.query("SELECT COUNT(*) AS cnt FROM registratie WHERE email = $1",[email], function(err,data){
      if (err) {
        return res.status(400).send(err);
      }
      else{
        if(data.rows > 0){  
            console.log("Email Already exist ");     
              // Already exist 
        }else{
            bcrypt.hash(password, saltRounds, function(err, hash) {
            db.query("INSERT INTO registratie (email, password, firstname, lastname) VALUES($1, $2, $3, $4)" , [email, hash, firstname, lastname], function(err , insert){
                if(err){
                    return res.status(400).send(err);
                }else{
                    console.log("INSERTED DATA SUCCESS");     
                    res.status(201).send({ message: "Data inserted!" });           
                }
            })    
        });
              
        }
    }

    });
});
  

app.get("/api/speler", (req, res) => {
  pool.connect((err, db, done) => {
    if (err) {
      return res.status(400).send(err);
    }

    db.query("SELECT * from speler", (err, table) => {
      done();

      // If err is True than send err else send table.rows
      err ? res.status(400).send(err) : res.status(200).send(table.rows);
    });
  });
});

app.post("/api/speler", (req, res) => {
  console.log(req.body);
  const spelernummer = req.body.spelernummer;
  const voornaam = req.body.voornaam;
  const achternaam = req.body.achternaam;
  const email = req.body.email;

  const values = [spelernummer, voornaam, achternaam, email];

  pool.connect((err, db, done) => {
    if (err) {
      console.log(err + "eerste");
      return res.status(400).send(err);
    }

    db.query(
      "INSERT INTO speler (spelernummer, voornaam, achternaam, email) VALUES($1, $2, $3, $4)",
      [...values],
      err => {
        if (err) {
          return res.status(400).send(err);
        }

        console.log("INSERTED DATA SUCCESS");

        res.status(201).send({ message: "Data inserted!" });
      }
    );
  });
});

app.get("/api/speler", (req, res) => {
  // const id = parseInt(request.params.id)
  const id = req.body.id;
  pool.connect((err, db, done) => {
    if (err) {
      return res.status(400).send(err);
    }

    db.query("DELETE from speler WHERE id = $1", [id], (err, table) => {
      done();

      // If err is True than send err else send table.rows
      err ? res.status(400).send(err) : res.status(200).send(table.rows);
    });
  });
});

app.get("/api/wedstrijduitslag", (req, res) => {
  pool.connect((err, db, done) => {
    if (err) {
      return res.status(400).send(err);
    }

    db.query(
      "SELECT * from wedstrijduitslag order by id DESC",
      (err, table) => {
        done();
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(200).send(table.rows);
        console.log(table.rows);
      }
    );
  });
});

app.post("/api/wedstrijduitslag", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const thuis = req.body.thuis;
  const stand = req.body.stand;
  const uit = req.body.uit;
  const verslag = req.body.verslag;

  const values = [id, thuis, stand, uit, verslag];

  pool.connect((err, db, done) => {
    if (err) {
      console.log(err + "eerste");
      return res.status(400).send(err);
    }

    db.query(
      "INSERT INTO wedstrijduitslag (id, thuis, uit, stand, verslag) VALUES($1, $2, $3, $4, $5)",
      [id, thuis, stand, uit, verslag],
      err => {
        if (err) {
          console.log(err + "tweede");
          return res.status(400).send(err);
        }

        console.log("INSERTED DATA SUCCESS");

        res.status(201).send({ message: "Data inserted!" });
      }
    );
  });
});
});

app.listen(PORT, () => console.log("Listening on port " + PORT));

// link used:
// http://zetcode.com/javascript/nodepostgres/
