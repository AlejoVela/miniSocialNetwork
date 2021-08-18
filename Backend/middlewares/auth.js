const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    let jwToken = req.header("Authorization");
    if(!jwToken) return res.status(401).send("Authorization denied: no Token");
    
    jwToken = jwToken.split(" ")[1];
    
    if(!jwToken) return res.status(401).send("Authorization denied: no Token");

    try {
        const payload = await jwt.verify(jwToken, process.env.SECRET_KEYWORD);
        req.user = payload;
        next();
    } catch (e) {
        return res.status(401).send("Authorization denied: Invalid Token");
    }
};

module.exports = auth;