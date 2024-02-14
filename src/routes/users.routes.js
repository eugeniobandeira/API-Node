const { Router } = require("express");

const UsersController = require("../controllers/usersController")
const usersRoutes = Router();


function myMiddleware(request, response, next) {
    console.log("Hi Middleware!");
    
    if(!request.body.isAdmin) {
        return response.status(401).json({ error: "Access denied!" });
    }
    
    next()
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.put( "/:id", usersController.update);

module.exports = usersRoutes;