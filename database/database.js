import {Sequelize} from "sequelize";

// Sequelize(db name, username, password)
export const sequelize = new Sequelize("db-proyecto", "postgres", "Restless1", {
    host: "localhost", 
    dialect: "postgres"
})