const db = require('./db');

const newsletter = {
  allNewsletter: (callback) => {
    db.query('SELECT * FROM edutbkNewsletter', (err, result) => {
      if (err) {
        console.error('Error saat mengambil data newsletter:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  create: (data, callback) => {
    if (!data || !data.email || !data.status) {
      const error = new Error('Data isi diperlukan. Mohon periksa kembali');
      console.log(data.email, data.status);
      console.error('Error saat mengirim newsletter:', error);
      callback(error, null);
    } else {
      db.query('INSERT INTO edutbkNewsletter (email, status) VALUES (?, ?)', [data.email, data.status], (err, result) => {
        if (err) {
          console.error('Error saat mengirim newsletter:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  delete: (id, callback) => {
    if (!id) {
      const error = new Error('ID newsletter diperlukan.');
      console.error('Error saat menghapus newsletter:', error);
      callback(error, null);
    } else {
      db.query('DELETE FROM edutbkNewsletter WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menghapus newsletter:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

  edit: (id, data, callback) => {
    if (!id || !data || (!data.email && !data.status )) {
      const error = new Error('ID newsletter dan data diperlukan.');
      console.error('Error saat mengedit newsletter:', error);
      callback(error, null);
    } else {
      db.query('UPDATE edutbkNewsletter SET email = ?, status = ? WHERE id = ?', [data.email, data.status, id], (err, result) => {
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
      const error = new Error('ID newsletter diperlukan.');
      console.error('Error saat menampilkan newsletter berdasarkan ID:', error);
      callback(error, null);
    } else {
      db.query('SELECT * FROM edutbkNewsletter WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error('Error saat menampilkan newsletter berdasarkan ID:', err);
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  },

};


module.exports = newsletter;