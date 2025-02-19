import mysql from 'mysql2/promise'; 
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
	host: process.env.DB_HOSTNAME || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'senha-mysql',
	database: process.env.DB_DATABASE || 'dashboard',
});

export default connection;