import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Carreras} from "./Carreras.js";

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
        freezeTableName: true
    }
)

Universidades.hasMany(Carreras, {
    foreignKey: "idUniversidad"
})

Carreras.belongsTo(Universidades)