const User = require('../models/user');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    if(!req.body.email || !req.body.pass)
        return res.status(401).send("There are empty fields");
    
    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(401).send("Incorret email or password");

    let hashComparation = await bcrypt.compare(req.body.pass, user.pass);
    if(!hashComparation) return res.status(401).send("Incorret email or password");

    try {
        let jwt = user.generateJWT();
        return res.status(200).send({ jwt });
    } catch (e) {
        return res.status(400).send("login error");
    }y

};

module.exports = {login};