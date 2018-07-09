const User = require('../models/Users');
const bycript = require('bcrypt-nodejs');

module.exports.run = (app) => {

    app.post('/api/login', (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (user) {
                bycript.compare(req.body.password, user.password, function (err, match) {
                    if (match) {
                        const result = { id: user._id }
                        res.json(result);
                    } else {
                        const result = { msg: "Usuario y/o contraseña incorrecta" }
                        res.json(result);
                    }
                });
            } else {
                const result = { msg: "Usuario y/o contraseña incorrecta" }
                res.json(result);
            }
        });
    });

    app.post('/api/register', (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (!user) {
                let saltRounds = 13;
                bycript.genSalt(saltRounds, (err, salt) => {
                    if (err) reject(err);
                    bycript.hash(req.body.password, salt, null, function (err, hash) {
                        req.body.password = hash;
                        User.create(req.body, (err, user) => {
                            res.json(user);
                        });
                    });
                });
            } else { res.json({ msg: 'Este usuario ya existe' }) }
        });
    });

    app.get('/api/users', (req, res) => {
        User.find({}, (err, users) => {
            res.json(users)
        });
    });



}
