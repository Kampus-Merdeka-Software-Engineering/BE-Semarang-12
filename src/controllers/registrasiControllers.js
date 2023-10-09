const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const registrasi = require('../models/registrasi');

const registrationControllers = {

    // Fungsi untuk menampilkan halaman registrasi
    showAllRegistrasi: (req, res) => {
      registrasi.allRegistrasi((err, hasil) => {
        if (err) {
          console.error('Error saat mengambil data registrasi:', err);
          res.status(500).json({ error: 'Kesalahan Internal Server' });
          return;
        }
        res.status(200).json(hasil);
      });
    },
  
    // Fungsi untuk menangani proses registrasi
    createRegistrasi: (req, res) => {
      const { nama, email, password } = req.body;
  
      // Validasi input
      if (!nama || !email || !password) {
        res.status(400).json({ error: 'Semua bidang diperlukan' });
        return;
      }

      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error('Error saat mengenkripsi password:', err);
          return res.status(500).json({ error: 'Kesalahan Internal Server' });
        }
  
        // Simpan pengguna ke database dengan password yang sudah dienkripsi dan status 'Terkirim'
        const data = { nama, email, password: hashedPassword, status: 'Terkirim' };
        registrasi.create(data, (err, hasil) => {
          if (err) {
            console.error('Error saat melakukan registrasi:', err);
            return res.status(500).json({ error: 'Kesalahan Internal Server' });
          }
          res.status(201).json({ pesan: 'Registrasi berhasil'});
  
        });
      });
    },

    editRegistrasi: (req, res) => {
      const idRegistrasi = req.params.id;
      const { nama , email , password } = req.body;

      if (!nama || !email || !password) {
        res.status(400).json({ error: 'Form isi diperlukan'});
      }

      const registrasiEdited = { nama, email, password, status: 'Terkirim dan Teredit'};

      registrasi.edit(idRegistrasi, registrasiEdited,(err, hasil) => {
        if (err) {
          console.error('Error saat mengedit Registrasi', err);
          res.status(500).json({ error: 'Kesalahan Internal Server'});
          return;
        }
        res.status(200).json({ pesan: 'Registrasi berhasil diperbarui', registrasi: hasil});
      });
    },

    deleteRegistrasi: (req, res) => {
      const idRegistrasi = req.params.id;

      registrasi.delete(idRegistrasi, (err) => {
        if (err) {
          console.error('Error saat menghapus Registrasi:', err);
          res.status(500).json({ error: 'Kesalahan Internal Server' });
          return;
        }
        res.status(200).json({ pesan: 'Registrasi berhasil dihapus' });
      });
    },

    showRegistrasiByID: (req, res) => {
      const idRegistrasi = req.params.id;

      registrasi.tampilkanByID(idRegistrasi, (err, hasil) => {
        if (err) {
          console.error('Error saat mengambil data Registrasi:', err);
          res.status(500).json({ error: 'Kesalahan Internal Server' });
          return;
        }

        if (hasil) {
          res.status(200).json(hasil);
        } else {
          res.status(404).json({ error: 'Registrasi tidak ditemukan' });
        }
      });
    }
  };
  
  module.exports = registrationControllers;

