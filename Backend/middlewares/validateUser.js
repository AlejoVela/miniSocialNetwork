const User = require('../models/user');

const validateUser = async (req, res, next) => {
    let user = await User.findById(req.user._id);
    if(!user) return res.status(400).send("Authorization denied: Invalid User");
    if(!user.userStatus) return res.status("400").send("Inactive User");
    next();
};

module.exports = validateUser;