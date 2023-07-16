import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Usuarios} from "./Usuarios.js";
import {Cursos_Usuarios} from "./Cursos_Usuarios.js";

export const Cursos = sequelize.define(
    "Cursos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true
    }
)

Cursos.belongsToMany(Usuarios, {
    through: Cursos_Usuarios
})

Usuarios.belongsToMany(Cursos, {
    through: Cursos_Usuarios
})