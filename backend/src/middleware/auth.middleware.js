const auth = (res, res, next) => {
    if(!req.session.user){
        return res.status(401).json({message : "Unauthorised"})
    }
    next();
}

module.exports = auth;