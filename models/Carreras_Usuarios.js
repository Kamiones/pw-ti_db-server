import {sequelize} from "../database/database.js";

export const Carreras_Usuarios = sequelize.define(
    "Carreras_Usuarios", {}, {
        freezeTableName: true,
        timestamps: false
    }
)