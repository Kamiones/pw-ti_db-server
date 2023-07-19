import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Calificaciones} from "./Calificaciones.js";
import {Citas} from "./Citas.js";
import {Horarios} from "./Horarios.js";
import {Usuarios_Calificaciones} from "./Usuarios_Calificaciones.js";
import {Usuarios_Citas} from "./Usuarios_Citas.js";

export const Usuarios = sequelize.define(
    "Usuarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        correo: {
            type: DataTypes.STRING,
            unique: true
        },

        username: {
            type: DataTypes.STRING,
            unique: true
        },

        password: {
            type: DataTypes.STRING
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
            type: DataTypes.STRING,
            unique: true
        },

        rol: {
            type: DataTypes.BOOLEAN
        },

        foto: {
            type: DataTypes.STRING
        },

        titulo: {
            type: DataTypes.STRING
        },

        presentacion: {
            type: DataTypes.STRING
        }

    }, {
        freezeTableName: true,
        timestamps: false
    }
)

Usuarios.hasMany(Horarios, {
    foreignKey: 'idUsuario'
})

Horarios.belongsTo(Usuarios, {
    foreignKey: 'idUsuario'
})

Usuarios.belongsToMany(Citas, {
    through: Usuarios_Citas
})

Citas.belongsToMany(Usuarios, {
    through: Usuarios_Citas
})

Usuarios.belongsToMany(Calificaciones, {
    through: Usuarios_Calificaciones
})

Calificaciones.belongsToMany(Usuarios, {
    through: Usuarios_Calificaciones
})