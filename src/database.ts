const { createPool } = require('mysql2/promise');

const connectionMatriz = createPool({
    port     : process.env.DB_PORT,
    host     : process.env.DB_HOST_MATRIZ,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSW
});

const connectionSuc1 = createPool({
    port     : process.env.DB_PORT,
    host     : process.env.DB_HOST_S1,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSW
});

const connectionSuc2 = createPool({
    port     : process.env.DB_PORT,
    host     : process.env.DB_HOST_S2,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSW
});

const connectionSuc1_replication = createPool({
    port     : process.env.DB_PORT,
    host     : process.env.DB_HOST_MATRIZ,
    database : process.env.DB_DATABASE_S1,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSW
});

const connectionSuc2_replication = createPool({
    port     : process.env.DB_PORT,
    host     : process.env.DB_HOST_MATRIZ,
    database : process.env.DB_DATABASE_S2,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSW
});


export {connectionMatriz, connectionSuc1, connectionSuc2, connectionSuc1_replication, connectionSuc2_replication};