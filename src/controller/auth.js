const { createUser, loginUser } = require('../models/auth')
const helper = require('../helper')
const jwt = require('jsonwebtoken')

module.exports = {
    createUser: async(request, response) => {
        try {
            const newDate = new Date()
            const data = {
                name: request.body.name,
                username: request.body.username,
                password: request.body.password,
                created_at: newDate,
                updated_at: newDate
            }
            const result = await createUser(data)
            return helper.response(response, 200, result)
        } catch (error) {
            console.log(error)
            return helper.response(response, 400, error)
        }
    },
    loginUser: async(request, response) => {
        try {
            const userData = {
                username: request.body.username,
                password: request.body.password
            }
            const result = await loginUser(userData)
            const token = jwt.sign({result}, 'RAHASIA', {expiresIn: '1m'})
            return helper.response(response, 200, {token: token})
        } catch (error) {
            console.log(error)
            return helper.response(response, 400, error)
        }
    }
}