const express = require('express')
const app = express()
const port = 3000

const { Client } = require('pg')
const client = new Client ({
  user: "postgres",
  password: "postpass14",
  host: "localhost",
  port: "5432",
  database: "test"
})
client.connect();


app.get('/main', (req, res) => {

    client.query('select id, name from hogehoge;', (error, result)=>{
        console.log(result);
        // var result = result.rows[0]["id"]
        res.render('main.ejs', {results: result});
        client.end();
    });

});

app.get('/bookmark', (req, res) => {
    res.render('bookmark.ejs');
})

app.get('/', (req, res) => {
    var test = "hogehoge";
    res.render('test.ejs', {test: test})
});

app.listen(3000);