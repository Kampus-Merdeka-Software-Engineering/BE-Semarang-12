const registrasi = require('../models/registrasi');

const registrationControllers = {

    // Fungsi untuk menampilkan halaman registrasi
    showAllRegistration: (req, res) => {
      res.render('registration'); // Gantilah 'registration' dengan nama template atau halaman registrasi Anda
    },
  
    // Fungsi untuk menangani proses registrasi
    createRegistration: (req, res) => {
      const { nama, email, password } = req.body;
  
      // Validasi input
      if (!nama || !email || !password) {
        res.status(400).json({ error: 'Semua bidang diperlukan' });
        return;
      }
  
      // Anda dapat menyimpan data pengguna yang baru terdaftar ke database di sini
      // Contoh sederhana: hanya menampilkan pesan berhasil
      res.status(201).json({ pesan: 'Registrasi berhasil' });
    }
  };
  
  module.exports = registrationControllers;