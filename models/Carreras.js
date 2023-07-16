import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Cursos} from "./Cursos.js";
import {Universidades} from "./Universidades.js";

export const Carreras = sequelize.define(
    "Carreras", {
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

Carreras.hasMany(Cursos)
Carreras.belongsTo(Universidades)