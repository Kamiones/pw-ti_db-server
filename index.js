import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {sequelize} from './database/database.js';

import {Calificaciones} from './models/Calificaciones.js';
import {Carreras_Cursos} from './models/Carreras_Cursos.js';
import {Carreras_Usuarios} from './models/Carreras_Usuarios.js';
import {Carreras} from './models/Carreras.js';
import {Citas} from './models/Citas.js';
import {Cursos_Usuarios} from './models/Cursos_Usuarios.js';
import {Cursos} from './models/Cursos.js';
import {Horarios} from './models/Horarios.js';
import {Rangos_Horarios} from './models/Rangos_Horarios.js';
import {Rangos} from './models/Rangos.js'
import {Universidades} from './models/Universidades.js';
import {Usuarios_Calificaciones} from './models/Usuarios_Calificaciones.js';
import {Usuarios_Citas} from './models/Usuarios_Citas.js';
import {Usuarios} from './models/Usuarios.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())

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

app.post("/registrar-usuario/:", async function(req, res) {
    
})

app.get("/mostrar-usuarios", async function(req, res) {
    const usuario = await Usuarios.findAll();
    res.send(usuario);
})

app.get("/", async function(req, res) {
    res.send("Consulta realizada.");
})

app.listen(port, function() {
    console.log(`Servidor fucionando en el puerto ${port}.`);
    checkConnection();
})