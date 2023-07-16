import {sequelize} from "../database/database.js";

export const Usuarios_Calificaciones = sequelize.define(
    "Usuarios_Calificaciones", {}, {
        freezeTableName: true,
        timestamps: false
    }
)