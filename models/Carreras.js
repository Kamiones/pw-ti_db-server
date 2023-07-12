import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Carreras = sequelize.define(
    "Carreras", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true
    }
)