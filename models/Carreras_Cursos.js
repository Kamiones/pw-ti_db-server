import {sequelize} from "../database/database.js";

export const Carreras_Cursos = sequelize.define(
    "Carreras_Cursos", {}, {
        freezeTableName: true,
        timestamps: false
    }
)