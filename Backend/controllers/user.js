const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.pass)
        return res.status(401).send("Process Failed: There'r empty fields");
    
    let existingUser = await User.findOne({email: req.body.email});
    if(existingUser) return res.status(401).send("Process Failed: User already exist");

    let hash = await bcrypt.hash(req.body.pass, 10)

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        pass: hash,
    });
    
    let result = await user.save();
    if(!result) return res.status(400).send("Process Failed: Failed to register user")

    try {
        let jwt = user.generateJWT();
        return res.status(201).send({ jwt });
    } catch (e) {
        return res.status(400).send("Process Failed: Failed to generate JWT");
    }
};


const listUser = async (req, res) => {
    let user = await User.find({ name: new RegExp(req.params["name"], "i") });
    if(!user || user.length === 0) return res.status(401).send("Process Failed: There'nt users register for awhile");
    //filtramos por nombre, ya que por seguridad no deben obtener los correos
    //y contraseñas de los usuarios, pero si desean buscar uno en especifico
    //por nombre, no habrá problema en caso de solicitudes de amistad
    let luser = [];
    user.forEach(u => {
        luser.push(u.name);
    });
    user = luser;
    return res.status(201).send({user});
};

module.exports = { registerUser, listUser };