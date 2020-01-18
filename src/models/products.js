const connections = require('../config/mysql');

module.exports = {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            connections.query('select * from todolist', (error, result) => {
                if (!error){
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    createProducts: (data) => {
        return new Promise((resolve, reject) => {
            connections.query('INSERT INTO todolist SET ?', data, (error, result) => {
                if (!error){
                    const goodResponse = {
                        id: result.insertId,
                        ...data
                    }
                    resolve(goodResponse);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    editProducts: (id, data) => {
        return new Promise((resolve, reject) => {
            connections.query('UPDATE todolist SET ? where id=?', [data, id], (error, result) => {
                if (!error){
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    deleteProducts: (id) => {
        return new Promise((resolve, reject) => {
            connections.query('DELETE FROM `todolist` WHERE `id`=?', id, (error, result) => {
                if (!error){
                    resolve(result)
                } else {
                    reject(new Error(error));
                }
            })
        })
    }
}