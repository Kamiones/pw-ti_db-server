import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Carreras} from "./Carreras.js";
import {Usuarios} from "./Usuarios.js";

export const Universidades = sequelize.define(
    "Universidades", {
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

Universidades.hasMany(Carreras, {
    foreignKey: "idUniversidad"
})

Carreras.belongsTo(Universidades, {
    foreignKey: "idUniversidad"
})

Universidades.hasMany(Usuarios, {
    foreignKey: "idUniversidad"
})

Usuarios.belongsTo(Universidades, {
    foreignKey: "idUniversidad"
})