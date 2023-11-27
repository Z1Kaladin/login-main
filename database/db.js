const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error) => {
    if (error) {
        console.log('El error de conexión es:' + error);
        return;
    }
    console.log('Connected to the database');

    // Manejar eventos de error después de la conexión
    connection.on('error', (err) => {
        console.log('Error en la conexión a la base de datos:', err);
    });
});

module.exports = connection;