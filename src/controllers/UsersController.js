const AppError = require("../utils/AppError")
class UsersController {

    create(request, response) {
        const { name, email, password } = request.body;

        //Verificar se todos os campos foram preenchidos
        if(!name) {
            return response.status(400).json({ error: 'O nome é obrigatório.'});
        }

        if(!email) {
            return response.status(400).json({ error: 'O email é obrigatório.'});
        }

        if(!password) {
            return response.status(400).json({ error: 'A senha é obrigatório.'});
        }

        response.status(201).json({ name, email, password })
    }
}

module.exports = UsersController;