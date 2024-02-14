const { Router } = require("express");

const UsersController = require("../controllers/usersController")
const usersRoutes = Router();


function myMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware!");
    
    if(!request.body.isAdmin) {
        return response.status(401).json({ error: "Acesso negado!" });
    }
    
    next() //Para que o middleware continue a execução do próximo recurso da aplicação
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create)

// Para expor as rotas
module.exports = usersRoutes;