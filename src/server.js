require("express-async-errors");
const AppError = require("./utils/AppError");
const migrationsRun = require("./database/sqlite/migrations")
const express = require("express");
const routes = require("./routes")

migrationsRun();

const app = express();
app.use(express.json());

// Para visualizar todas as rotas que estão no routes
app.use(routes);


app.use(( error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);
    
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
    
}); 

const PORT = 3333;
app.listen(PORT);




