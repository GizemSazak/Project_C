const pg = require('pg');

// Connect to database
const cs = {
    host:"salt.db.elephantsql.com",
    database:"cligxofj",
    user:"cligxofj",
    password:"MMdvlDXsE73zeBxtbKvigi5ALP6_pRVo",
    port:5432
};

const db = new pg.Client(cs);
db.connect();


// example
// db.query('SELECT * from speler').then(res => {

//     const data = res.rows;

//     data.forEach(row => {
//         console.log(`Id: ${row.id} spelernummer: ${row.spelernummer} voornaam: ${row.voornaam} achternaamnaam: ${row.achternaam}`);
//     })

// }).finally(() => db.end());
db.query("INSERT INTO notities (id,titel,notitie)values(2,'test','notitie toevoegen')",(err,res)=>{
    console.log(err,res)
    db.end()
})
// link used:
// http://zetcode.com/javascript/nodepostgres/