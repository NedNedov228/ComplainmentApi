import sqlite3 from 'sqlite3';
import path from 'path';
import userDB from './userDB';
import zayavkiDB from './zayavkiDB';
require('dotenv').config(path.resolve(__dirname, '../.env'));

export const pool = new sqlite3.Database('../db.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

export const createTablesAsync = async () => {
    await userDB.createUsersTable();
    await zayavkiDB.createZayavkiTable();
}

export const createTables = () => {
    createTablesAsync().catch(console.error);
}