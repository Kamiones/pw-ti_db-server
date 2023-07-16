import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Horarios} from "./Horarios.js";
import {Rangos_Horarios} from "./Rangos_Horarios.js";

export const Rangos = sequelize.define(
    "Rangos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        hora_inicio: {
            type: DataTypes.INTEGER
        },

        hora_fin: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true
    }
)

Rangos.belongsToMany(Horarios, {
    through: Rangos_Horarios
})

Horarios.belongsToMany(Rangos, {
    through: Rangos_Horarios
})