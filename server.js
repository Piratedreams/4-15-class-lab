const express = require('express');
const bodyParser = require('body-parser');



app.get('/index', (req, res) => {
    res.render('index.ejs');
});






app.listen(3000, () =>{
    console.log('I am listening to you breathe');
});