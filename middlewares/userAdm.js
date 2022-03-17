
let adm = ['Ada', 'Greta', 'Tim', 'Vim'];

function userAdm (req, res, next) {

    let admIng = req.query.user;
    
    if(adm.includes(admIng)) {
        next()
    } else {
        res.send('No tienes los privilegios para ingresar')
    }
}

module.exports = userAdm;