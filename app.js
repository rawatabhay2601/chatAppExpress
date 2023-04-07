const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const loginPath = require('./routes/login');

app.use(bodyParser.urlencoded({extended:false}));
app.use(loginPath);

app.use('/',(req,res,next) => {
    res.status(404).send("<h1 style='color:red'>No Page Found !!!</h1>");
});

app.listen(3000);