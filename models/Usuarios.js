import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Calificaciones} from "./Calificaciones.js";
import {Citas} from "./Citas.js";
import {Cursos} from "./Cursos.js";
import {Horarios} from "./Horarios.js";
import {Cursos_Usuarios} from "./Cursos_Usuarios.js";
import {Usuarios_Calificaciones} from "./Usuarios_Calificaciones.js";
import {Usuarios_Citas} from "./Usuarios_Citas.js";

export const Usuarios = sequelize.define(
    "Usuarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombres: {
            type: DataTypes.STRING,
        },

        apellidos: {
            type: DataTypes.STRING
        },

        tipo_doc: {
            type: DataTypes.BOOLEAN
        },

        numero_doc: {
            type: DataTypes.INTEGER
        },

        rol: {
            type: DataTypes.BOOLEAN
        },

        foto: {
            type: DataTypes.BLOB
        },

        correo: {
            type: DataTypes.STRING
        },

        username: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)

Usuarios.hasMany(Horarios, {
    foreignKey: 'idUsuario'
})

Usuarios.belongsToMany(Calificaciones, {
    through: Usuarios_Calificaciones
})

Usuarios.belongsToMany(Citas, {
    through: Usuarios_Citas
})

Usuarios.belongsToMany(Cursos, {
    through: Cursos_Usuarios
})