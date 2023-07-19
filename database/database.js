import {Sequelize} from "sequelize";

// process.env.DATABASE_URL = 'postgres://postgres:admin@localhost/db-proyecto';

// DO NOT USE OPTIONS (this will enforce the use of ssl and will make the app crash)
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