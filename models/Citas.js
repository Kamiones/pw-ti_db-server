import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Citas = sequelize.define(
    "Citas", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        hora_inicio: {
            type: DataTypes.TIME
        },

        link: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)