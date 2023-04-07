const express = require('express');
const routes = express.Router();
const fs = require('fs');


routes.get('/', (req,res,next) => {
    fs.readFile('username.txt', (err, data) => {
        if(err) {
            data = 'No chat exists';
            console.log(data);
        }
        res.send(`${data}<form action='/' method='POST' onsubmit = "document.getElementById('username').value = localStorage.getItem('username')">
                            <input type='hidden' id='username' name='username'>
                            <input type='text' id='message' name='message' placeholder='Message'>
                            <button type='submit'>Send</button>
                    </form>`
        );
    });
});

routes.post('/', (req,res,next) => {

    console.log(req.body.username);
    console.log(req.body.message);

    fs.writeFile('username.txt', `${req.body.username} : ${req.body.message}`, {flag: 'a'} ,(err) => {
        err ? console.log(err) : res.redirect('/');
    });
});

routes.get('/login',(req,res,next) => {
    res.send(`<form action='/' method='GET' onsubmit = "localStorage.setItem('username', document.getElementById('username').value.toString())">Enter Username : 
                    <input type='text' id='username' name='username' placeholder='Username'>
                    <button type='submit'>Login</button>
                </form>`
    );
});


module.exports = routes;