
let adm = ['Ada', 'Greta', 'Tim', 'Vim'];

function userAdm (req, res, next) {

    let admIng = req.query.user;
    
    if(adm.includes(admIng)) {
        res.send('Hola Admin: ' + admIng)
    } else {
        res.send('No tienes los privilegios para ingresar')
    }

    next()
}

module.exports = userAdm;