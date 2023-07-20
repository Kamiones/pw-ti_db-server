import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Citas = sequelize.define(
    "Citas", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        estado: {
            type: DataTypes.BOOLEAN
        },

        fecha: {
            type: DataTypes.DATE
        },

        link: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)