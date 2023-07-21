import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import {sequelize} from './database/database.js';

import {Calificaciones} from './models/Calificaciones.js';
import {Carreras_Cursos} from './models/Carreras_Cursos.js';
import {Carreras} from './models/Carreras.js';
import {Citas} from './models/Citas.js';
import {Cursos_Usuarios} from './models/Cursos_Usuarios.js';
import {Cursos} from './models/Cursos.js';
import {Horarios} from './models/Horarios.js';
import {Rangos_Horarios} from './models/Rangos_Horarios.js';
import {Rangos} from './models/Rangos.js'
import {Universidades} from './models/Universidades.js';
import {Usuarios_Calificaciones} from './models/Usuarios_Calificaciones.js';
import {Usuarios} from './models/Usuarios.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(session({secret: "soft"}));
app.use(bodyParser.json());

async function checkConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Conexión a base de datos exitosa.");
    }
    catch(err) {
        console.log("Conexión a base de datos fallida. " + err);
    }
}

app.get("/mostrar-usuarios/:id", async function(req, res) {
    var id=req.params.id;
    const usuario = await Usuarios.findAll({
        where:{
            id:id
        }
    });
    res.send(usuario);
})

app.get("/mostrar-usuarios", async function(req, res) {
    const usuario = await Usuarios.findAll();
    res.send(usuario);
})

app.post("/registrar-usuario", async function(req, res) {
    
})

app.get('/citas/:username',async (req,res)=>{

    const usuario = await Usuarios.findOne({
        where: {
          username: req.params.username
        }
      });

      if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
      }

      const citas = await Citas.findAll({
        where: {
          idUsuario: usuario.id
        }
      });
    res.send("Citas dadas");
})

app.post("/login", async function(req, res){
    if(!req.body.username || !req.body.password){
        return res.status(400).send({message: "Usuario y contraseña son campos obligatorios"})
    }
    const usuario = await Usuarios.findOne({
        where: {
            username: req.body.username,
        }
    })
    if(!usuario || usuario.password !== req.body.password){
        return res.status(401).send({message: "Usuario no autorizado"})
    }
    // INITIALIZE COOKIE SESSION
    req.session.usuario=usuario.toJSON();
    return res.status(200).send(usuario.toJSON());
})

app.listen(port, async function() {
    await checkConnection()
})

app.get('/usuarios/:username', async (req, res) => {
  try {
    const username = req.params.username;

    // Realizar una consulta a la base de datos para obtener el usuario por su username y todas las relaciones
    const usuario = await Usuarios.findOne({
      where: { username },
      include: [
        {
          model: Citas,
        },
        {
          model: Carreras,
        },
      ],
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener información del usuario:', error);
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
  }
});