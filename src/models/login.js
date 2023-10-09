const db = require('./db'); 
const bcrypt = require('bcrypt');

const login = {
  authenticateUser: (email, password, callback) => {
    // Cari pengguna berdasarkan email
    db.query('SELECT * FROM edutbkLogin WHERE email = ?', [email], (err, results) => {
      if (err) {
        console.error('Error Login', err);
        callback(err, null);
        return;
      }

      if (results.length === 0) {
        // Pengguna dengan email tersebut tidak ditemukan
        callback(err, null);
      } else {
        // Pengguna dengan email ditemukan, verifikasi kata sandi
        const user = results[0];
        // console.log(user, password, user.password);
        // membandingkan kata sandi yang dimasukkan dengan kata sandi yang di-hash dalam database
        bcrypt.compare(password, user.password, (err, match) => {
          if (err) {
            console.error('Error saat membandingkan kata sandi:', err);
            callback(err, null);
            return;
          }

          if (match) {
            // Kata sandi cocok, kirim data pengguna
            callback(null, user);
          } else {
            // Kata sandi tidak cocok
            callback(null, null);
          }
        });
      }
    });
  },
};

module.exports = login;
