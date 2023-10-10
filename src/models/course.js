const db = require('./db');

const course = {
  allCourse: (callback) => {
    db.query('SELECT * FROM edutbkCourse', (err, result) => {
      if (err) {
        console.error('Error saat mengambil semua course:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  create: (data, callback) => {
    if (!data || !data.nama || !data.email || !data.course || !data.tanggal || !data.tokenCourse || !data.status) {
      const error = new Error('Semua data harus diisi. Harap periksa kembali masukan Anda.');
      console.error('Kesalahan saat membuat Course:', error);
      callback(error, null);
    } else {
      const query = 'INSERT INTO edutbkCourse (nama, email, course, tanggal, tokenCourse, status) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [data.nama, data.email, data.course, data.tanggal, data.tokenCourse, data.status];
  
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Kesalahan saat membuat course:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  delete: (id, callback) => {
    if (!id) {
      const error = new Error('ID course diperlukan.');
      console.error('Error saat menghapus course:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM edutbkCourse WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus course:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.nama && !data.email && !data.course && !data.tokenCourse && !data.status )) {
      const error = new Error('ID kontak dan data diperlukan.');
      console.error('Error saat mengedit kontak:', error);
      callback(error, null);
    } else {
      db.query('UPDATE edutbkContact SET nama = ?, email = ?, course = ?, tanggal = ?, tokenCourse = ? status = ?, WHERE id = ?', [data.nama, data.email, data.course, data.tokenCourse, data.status, id], (err, result) => {
        if (err) {
          console.error('Error saat mengedit kontak:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  showByID: (id, callback) => {
    if (!id) {
      const error = new Error('ID kontak diperlukan.');
      console.error('Error saat menampilkan kontak berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM edutbkContact WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan kontak berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },
    
}

module.exports = course;