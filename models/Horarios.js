import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Rangos} from "./Rangos.js";
import {Usuarios} from "./Usuarios.js";
import {Rangos_Horarios} from "./Rangos_Horarios.js";

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

Horarios.belongsTo(Usuarios)

Horarios.belongsToMany(Rangos, {
    through: Rangos_Horarios
})