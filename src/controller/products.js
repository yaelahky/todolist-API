const productModels = require('../models/products');
const helper = require('../helper');

module.exports = {
    getProducts: async(request, response) => {
        const result = await productModels.getProducts()
        return helper.response(response, 200, result);
    },
    createProducts: async(req, res) => {
        try {
            const data = {
                todo: req.body.todo,
                name: req.body.name,
                complete: req.body.complete
            }
            const result = await productModels.createProducts(data);
            return helper.response(res, 200, result);
        } catch (error) {
            return helper.response(res, 200, error);
        }
    },
    editProducts: async(request, response) => {
        try {
            const data = {
                todo: request.body.todo,
                name: request.body.name,
                complete: request.body.complete
            }
            const id = request.params.id
            const result = await productModels.editProducts(id, data);
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    },
    deleteProducts: async(request, response) => {
        try {
            const id = request.params.id
            const result = await productModels.deleteProducts(id);
            response.json(result);
        } catch (error){
            response.json(error)
        }
    }
}