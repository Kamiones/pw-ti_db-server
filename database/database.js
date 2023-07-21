import {Sequelize} from "sequelize";

// process.env.DATABASE_URL = 'postgres://postgres:admin@localhost/db-proyecto';

const options = {
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false
        }
    }
};

export const sequelize = new Sequelize(
    process.env.DATABASE_URL
)