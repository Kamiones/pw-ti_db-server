import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Citas = sequelize.define(
    "Citas", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        fecha: {
            type: DataTypes.DATE
        },

        link: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    }
)