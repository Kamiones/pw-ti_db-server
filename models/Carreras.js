import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Carreras_Cursos} from "./Carreras_Cursos.js"
import {Cursos} from "./Cursos.js";
import {Usuarios} from "./Usuarios.js";

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
        freezeTableName: true,
        timestamps: false
    }
)

Carreras.belongsToMany(Cursos, {
    through: Carreras_Cursos
})

Cursos.belongsToMany(Carreras, {
    through: Carreras_Cursos
})

Carreras.hasMany(Usuarios, {
    foreignKey: 'idCarrera'
})

Usuarios.belongsTo(Carreras, {
    foreignKey: 'idCarrera'
})