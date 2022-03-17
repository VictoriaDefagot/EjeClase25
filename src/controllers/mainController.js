const express = require('express');

let mainController = 
    {
        index: (req, res) => {  
            res.render('index')
        },
        adm: (req, res) => {
            let admIng = req.query.user;
            res.send('Hola Admin: ' + admIng)
        },
    }

module.exports = mainController;


    