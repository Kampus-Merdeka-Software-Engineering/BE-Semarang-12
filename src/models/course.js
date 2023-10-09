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
    if (!data || !data.nama || !data.email || !data.course || !data.tanggal || !data.tokenCourse) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali db');
      console.log(data.nama, data.email, data.course, data.tanggal, data.tokenCourse);
      console.error('Error saat membuat Course:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO edutbkCourse (nama, email, course, tanggal, tokenCourse) VALUES (?, ?, ?, ?, ?)', [data.nama, data.email, data.course, data.tanggal, data.tokenCourse], (err, result) => {
        if (err) {
          console.error('Error saat membuat course:', err);
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
    if (!id || !data || (!data.nama && !data.email && !data.course && !data.tokenCourse )) {
      const error = new Error('ID kontak dan data diperlukan.');
      console.error('Error saat mengedit kontak:', error);
      callback(error, null);
    } else {
      db.query('UPDATE edutbkContact SET nama = ?, email = ?, course = ?, tanggal = ?, tokenCourse = ? WHERE id = ?', [data.nama, data.email, data.course, data.tokenCourse, id], (err, result) => {
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