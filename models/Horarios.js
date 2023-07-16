import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Citas} from "./Citas.js";

export const Horarios = sequelize.define(
    "Horarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        fecha: {
            type: DataTypes.DATE
        },

        disponibilidad: {
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true
    }
)

Horarios.hasOne(Citas, {
    foreignKey: "idHorario"
})

Citas.belongsTo(Horarios)