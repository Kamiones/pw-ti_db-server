import {sequelize} from "../database/database.js";

export const Rangos_Horarios = sequelize.define(
    "Rangos_Horarios", {}, {
        freezeTableName: true,
        timestamps: false
    }
)