const jwt  = require('jsonwebtoken')
const config = require('../config');

const JWT_OPTIONS = {}

module.exports = {

    verifyJwt: async function (token) {
        return await  jwt.verify(token, config.cypherKey, JWT_OPTIONS);
    },

    signJwt: async function (payload, options = {}) {
        return await jwt.sign(payload, config.cypherKey, {...JWT_OPTIONS, ...options});
    }

}
