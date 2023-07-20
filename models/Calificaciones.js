import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Calificaciones = sequelize.define(
    "Calificaciones", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        fecha: {
            type: DataTypes.DATE,
        },

        calificacion: {
            type: DataTypes.FLOAT
        },

        comentario: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)