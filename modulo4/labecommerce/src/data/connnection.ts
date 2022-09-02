import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
    client: "mysql",
    connection:{
        host: process.env.BD_HOST,
        port: 3306,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_SCHEMA,
        multipleStatements: true
    }
})

export default connection   