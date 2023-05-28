"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSuc2_replication = exports.connectionSuc1_replication = exports.connectionSuc2 = exports.connectionSuc1 = exports.connectionMatriz = void 0;
const { createPool } = require('mysql2/promise');
const connectionMatriz = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST_MATRIZ,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW
});
exports.connectionMatriz = connectionMatriz;
const connectionSuc1 = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST_S1,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW
});
exports.connectionSuc1 = connectionSuc1;
const connectionSuc2 = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST_S2,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW
});
exports.connectionSuc2 = connectionSuc2;
const connectionSuc1_replication = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST_MATRIZ,
    database: process.env.DB_DATABASE_S1,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW
});
exports.connectionSuc1_replication = connectionSuc1_replication;
const connectionSuc2_replication = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST_MATRIZ,
    database: process.env.DB_DATABASE_S2,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW
});
exports.connectionSuc2_replication = connectionSuc2_replication;
