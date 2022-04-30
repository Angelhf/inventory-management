//Created using a tutorial from youtube, learning how to use all of these different libs
// along with Node.js to create a simple backend for a login system. 
// https://www.youtube.com/watch?v=-RCnNyD0L-s&t=1537s&ab_channel=WebDevSimplified

// This code was modified from the original to suit our needs for how we wanted to setup
// our login. 

const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByUsername, getUserById) {
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        if (user == null) {
            return done(null, false, { message: 'No user with that username' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize