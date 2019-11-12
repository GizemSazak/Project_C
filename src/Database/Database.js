const pg = require('pg');

// Connect to database
const cs = {
    host:"salt.db.elephantsql.com",
    database:"cligxofj",
    user:"cligxofj",
    password:"MMdvlDXsE73zeBxtbKvigi5ALP6_pRVo"
};

const db = new pg.Client(cs);
db.connect();


// example
db.query('SELECT * from speler').then(res => {

    const data = res.rows;

    data.forEach(row => {
        console.log(`Id: ${row.id} spelernummer: ${row.spelernummer} voornaam: ${row.voornaam} achternaamnaam: ${row.achternaam}`);
    })

}).finally(() => client.end());

// link used:
// http://zetcode.com/javascript/nodepostgres/