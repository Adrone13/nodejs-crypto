const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki', // recommended by Node.js docs
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended by Node.js docs
    format: 'pem',
  }
});

module.exports = {
  privateKey,
  publicKey
};
