const mysql = require('mysql2');
// const url = require('url');
// const databaseUrl = new URL('mysql://root:69iN5GF5o0T2XnBhkDST@containers-us-west-87.railway.app:6091/railway');

const db = mysql.createConnection({
  host: databaseUrl.hostname,
  port: databaseUrl.port,
  user: databaseUrl.username,
  password: databaseUrl.password,
  database: databaseUrl.pathname.substr(1), 
  // host: 'localhost', // Ganti dengan host MySQL Anda
  // user: 'root', // Ganti dengan username MySQL Anda
  // password: '', // Ganti dengan password MySQL Anda
  // database: 'edutbklogin' // Ganti dengan nama database yang ingin Anda hubungkan
});

db.connect((err) => {
  if (err) {
    console.error('Server tidak berhasil terkoneksi ke database MySQL Railway:', err);
    return;
  }
  console.log('Server berhasil terkoneksi ke database MySQL Railway');
});

module.exports = db;

