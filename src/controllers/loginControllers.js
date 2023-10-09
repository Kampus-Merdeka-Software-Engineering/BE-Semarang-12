const jwt = require('jsonwebtoken');
const config = require('../config/registrasiConfig'); 
const userModel = require('../models/login'); 

const loginController = {
  login: (req, res) => {
    const { email, password } = req.body;

    // Cek apakah email dan password tersedia
    if (!email || !password) {
      return res.status(400).json({ error: 'Email dan password diperlukan' });
    }

    // Cari pengguna berdasarkan email
    userModel.authenticateUser(email, password, (err, user) => {
      if (err) {
        console.error('Error saat mencari pengguna:', err);
        return res.status(500).json({ error: 'Kesalahan Internal Server' });
      }

      if (!user) {
        return res.status(401).json({ error: 'Email atau password salah' });
      }
        const sendTokenMiddleware = (res, email) => {
            // Buat token untuk pengguna yang berhasil login
            const token = jwt.sign({ email }, config.secretKey, { expiresIn: '1h' });
            
            // Kirim token sebagai respons
            res.status(200).json({ message: 'Login berhasil', token });
        };
        sendTokenMiddleware(res, user.email);
    });
  },
};

module.exports = loginController;
