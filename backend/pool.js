import mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Beaver19",
    database: "ubereats_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error occurred: ' + err);
        return;
    }
    console.log("Pool created and connection established");
    connection.release();
});

export default pool;