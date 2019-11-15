const {Pool, Client} = require ('pg')
const pool = new Pool({
        user: "cligxofj",
        host: "	salt.db.elephantsql.com",
        database: "cligxofj",
        password: "MMdvlDXsE73zeBxtbKvigi5ALP6_pRVo",
        port:5432
    })
    pool.query("INSERT INTO notities (id,title,notitie)values(2,'test','notitie toevoegen')",(err,res)=>{
            console.log(err,res)
            pool.end()
    })