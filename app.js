const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.render('main.ejs');
})

app.get('/bookmark', (req, res) => {
    res.render('bookmark.ejs');
})

app.listen(3000);