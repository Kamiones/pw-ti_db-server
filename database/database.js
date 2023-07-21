import {Sequelize} from "sequelize";

// process.env.DATABASE_URL = 'postgres://postgres:admin@localhost/db-proyecto';

export const sequelize = new Sequelize("ejemplodb","postgres","nico",{
    host: "localhost", //aca iria el ip de la otra maquina,
    dialect: "postgres"
})