const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findById } = require("../services/admin");

passport.use(
    new Strategy({
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async (payload, done) => {
        const user = await findById(payload.id);
        
        //Se crea el request.user
        done(null, user);
    })
);

module.exports = passport.authenticate("jwt", {session:false});