const jwt = require('jsonwebtoken');
const config = require('../config/registrasiConfig'); // Impor konfigurasi

const authenticateToken = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ error: 'Akses ditolak. Token tidak ditemukan.' });
  }

  try {
    // Menggunakan config.secretKey untuk memverifikasi token
    const decoded = jwt.verify(token, config.secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token tidak valid.' });
  }
};



module.exports = {
  authenticateToken,
  sendTokenMiddleware
};
