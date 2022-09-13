import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_SCHEMA,
        port: 3306,
        multipleStatements: true
    }
})

