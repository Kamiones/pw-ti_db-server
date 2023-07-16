import {sequelize} from "../database/database.js";

export const Usuarios_Citas = sequelize.define(
    "Usuarios_Citas", {}, {
        freezeTableName: true,
        timestamps: false
    }
)