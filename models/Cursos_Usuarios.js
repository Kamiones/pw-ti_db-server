import {sequelize} from "../database/database.js";

export const Cursos_Usuarios = sequelize.define(
    "Cursos_Usuarios", {}, {
        freezeTableName: true,
        timestamps: false
    }
)