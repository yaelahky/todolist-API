const jwt = require('jsonwebtoken')

module.exports = {
    authorization: (request, response, next) => {
        const token = request.headers.authorization

        jwt.verify(token, 'RAHASIA', (error, result) => {
            if (error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError"){
                response.json(error.message)
            } else {
                request.token = result
                next()
            }
        })
    }
}