const crypto = require('crypto');

// Fungsi untuk menghasilkan secretKey secara acak
function generateRandomSecretKey() {
  const secretKey = crypto.randomBytes(32).toString('hex');
  return secretKey;
}

module.exports = {
  secretKey: generateRandomSecretKey(),
  databaseUrl: 'mysql://root:69iN5GF5o0T2XnBhkDST@containers-us-west-87.railway.app:6091/railway',
  expiresIn: '1h'
};
