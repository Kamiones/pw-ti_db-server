import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Universidades = sequelize.define(
    "Universidades", {
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