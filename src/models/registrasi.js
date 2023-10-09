const db = require('./db');

const registrasi = {
  allRegistrasi: (callback) => {
    db.query('SELECT * FROM edutbkLogin', (err, result) => {
      if (err) {
        console.error('Error saat mengambil data registrasi:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  create: (data, callback) => {
    if (!data || !data.nama || !data.email || !data.password || !data.status) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.log(data.email, data.status);
      console.error('Error saat mengisi data:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO edutbkLogin (nama, email, password, status) VALUES (?, ?, ?, ?)', [data.nama, data.email, data.password, data.status], (err, result) => {
        if (err) {
          console.error('Error saat mengisi data:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  delete: (id, callback) => {
    if (!id) {
      const error = new Error('ID registrasi diperlukan.');
      console.error('Error saat menghapus data registrasi:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM edutbkLogin WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus data registrasi:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.nama && !data.email && !data.password && !data.status )) {
      const error = new Error('ID registrasi dan data diperlukan.');
      console.error('Error saat mengedit registrasi:', error);
      callback(error, null);
    } else {
      db.query('UPDATE edutbkLogin SET nama = ?, email = ?, password = ?, status = ? WHERE id = ?', [data.nama, data.email, data.password, data.status, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit newsletter:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  showByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID registrasi diperlukan.');
      console.error('Error saat menampilkan registrasi berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM edutbkLogin WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan registrasi berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = registrasi;