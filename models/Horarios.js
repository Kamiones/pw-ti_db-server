import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Usuarios = sequelize.define(
    "Usuarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        dia: {
            type: DataTypes.STRING,
        },

        hora_ini: {
            type: DataTypes.STRING
        },

        hora_fin: {
            type: DataTypes.STRING
        },

        link: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)