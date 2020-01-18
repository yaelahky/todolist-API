const connection = require('../config/mysql')

module.exports = {
    createUser: (data) => {
        return new Promise ((resolve, reject) => {
            connection.query("INSERT INTO user SET ?", data, (error, result) => {
                if(!error){
                    const goodResponse = {
                        id: result.insertId,
                        ...data
                    }
                    delete goodResponse.password
                    resolve(goodResponse)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    loginUser: (data) => {
        return new Promise ((resolve, reject) => {
            connection.query("SELECT id, username from user WHERE username=? AND password=?", [data.username, data.password], (error, result) => {
                if(!error){
                    resolve(result[0]);
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}