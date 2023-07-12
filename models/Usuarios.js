import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

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
            type: DataTypes.STRING
        },

        numero: {
            type: DataTypes.STRING
        },

        rol: {
            type: DataTypes.BOOLEAN
        },

        usuario_nombre: {
            type: DataTypes.STRING
        },

        contraseña: {
            type: DataTypes.STRING
        },

        foto: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)