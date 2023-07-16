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
        
        disponibilidad: {
            type: DataTypes.BOOLEAN
        },

        fecha: {
            type: DataTypes.DATE
        }

    }, {
        freezeTableName: true
    }
)

Horarios.hasOne(Citas, {
    foreignKey: "idHorario"
})

Citas.belongsTo(Horarios, {
    foreignKey: "idHorario"
})