import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {sequelize} from './database/database.js';

/*
import {Carreras} from './models/Carreras.js';
import {Citas} from './models/Citas.js';
import {Cursos} from './models/Cursos.js';
import {Horarios} from './models/Horarios.js';
import {Universidades} from './models/Universidades.js';
*/
import {Usuarios} from './models/Usuarios.js';

const app = express();
const port = 3001;

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}))

app.use(bodyParser.json());

async function checkConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        console.log("Conexión a base de datos exitosa.");
    }
    catch(err) {
        console.log("Conexión a base de datos fallida. " + err);
    }
}

app.get("/mostrar-usuario", async function(req, res) {
    const usuario = await Usuarios.findAll({
        where: {
            id: 1
        }
    });
    res.send(usuario);
})

app.listen(port, function() {
    console.log(`Servidor fucionando en el puerto ${port}.`);
    checkConnection();
})